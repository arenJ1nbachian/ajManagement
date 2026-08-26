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
      html: `<p>Hi ${firstname} ${lastname},</p><p>Click the link below to set up your account:</p><a href="${process.env.NEXT_PUBLIC_APP_URL}/invite?token=${token}">Set up your account</a><p>This link expires in 48 hours.</p>`,
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
