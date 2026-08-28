import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Role } from "@generated/prisma";
import crypto from "crypto";
import { Resend } from "resend";

interface InitialInformation {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  role: Role;
  lid: string;
}

// Endpoint for when an owner or manager adds an employee to a location.
// An account gets created in the database without a password
// An invite token gets created and an email gets sent to the employee with a link to an endpoint to confirm their account
export const POST = async (request: Request) => {
  const body: InitialInformation = await request.json();

  try {
    const { firstname, lastname, email, phone, role, lid } = body;

    if (!firstname || !lastname || !email || !phone || !role || !lid)
      return NextResponse.json(
        { message: "Please fill out all information" },
        { status: 400 },
      );

    const user = await prisma.user.create({
      data: { firstname, lastname, email, phone, role: role },
    });

    await prisma.userLocation.create({
      data: { userId: user.id, locationId: lid, status: "pending" },
    });

    const token = crypto.randomBytes(32).toString("hex");

    await prisma.inviteToken.create({
      data: {
        token,
        userId: user.id,
        expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000),
        lid,
      },
    });

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "noreply@ajmanagement.ca",
      to: email,
      subject: "You've been invited to ajManagement",
      html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:32px 16px;background:#0C0C0E;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:520px;margin:0 auto;">
    <div style="background:#2A1F00;border:1px solid #78450A;border-radius:10px;padding:10px 14px;margin-bottom:16px;font-size:12px;color:#FBB040;">
      <strong style="display:block;margin-bottom:2px;">Employee invitation — feature test</strong>
      If you received this email, the invite flow is working correctly.
    </div>
    <div style="background:#141417;border:1px solid #242428;border-radius:16px;overflow:hidden;">
      <div style="padding:28px 32px 24px;border-bottom:1px solid #242428;">
        <span style="font-size:14px;font-weight:600;color:#F2F2F4;">ajManagement</span>
      </div>
      <div style="padding:32px;">
        <h1 style="font-size:22px;font-weight:600;color:#F2F2F4;margin:0 0 12px;">You've been invited, ${firstname}.</h1>
        <p style="font-size:14px;color:#71717A;margin:0 0 28px;line-height:1.65;">A manager has added you to their team. Set up your account using the link below.</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/invite?token=${token}" style="display:inline-block;background:#3B82F6;color:#fff;font-size:14px;font-weight:600;padding:12px 24px;border-radius:10px;text-decoration:none;">Set up your account →</a>
        <p style="font-size:12px;color:#3B82F6;margin:20px 0 0;">This link expires in 48 hours.</p>
      </div>
      <div style="padding:20px 32px;border-top:1px solid #242428;">
        <p style="font-size:12px;color:#71717A;margin:0;">If you weren't expecting this, you can safely ignore this email.</p>
      </div>
    </div>
  </div>
</body>
</html>
`,
    });

    return NextResponse.json({ message: "Employee created" }, { status: 201 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
};

// Retreives all employees at a given location and return the status of the employee along with relevant information such
// as their first and last name, email address, phone number and their job title
export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  try {
    const lid = searchParams.get("locationId");

    if (!lid)
      return NextResponse.json(
        { message: "No locationId provided" },
        { status: 400 },
      );

    const usersAtLocation = await prisma.userLocation.findMany({
      where: { locationId: lid },
      select: {
        status: true,
        user: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            phone: true,
            role: true,
          },
        },
      },
    });

    return NextResponse.json(usersAtLocation, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};

// Removes an employee at a given location
export const DELETE = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const { uid, lid } = body;

    if (!uid || !lid)
      return NextResponse.json(
        { message: "Missing required parameters" },
        { status: 400 },
      );
    await prisma.userLocation.deleteMany({
      where: { userId: uid, locationId: lid },
    });
    return NextResponse.json({ message: "User Deleted" }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
