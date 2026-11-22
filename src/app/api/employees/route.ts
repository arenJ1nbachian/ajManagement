import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { $Enums, Role } from "@generated/prisma";
import crypto from "crypto";
import { Resend } from "resend";
import { getTokenUser } from "@/lib/tokens";

interface InitialInformation {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  role: Role;
  lid: string;
  positionIds?: string[];
}

// Endpoint for when an owner or manager adds an employee to a location.
// An account gets created in the database without a password
// An invite token gets created and an email gets sent to the employee with a link to an endpoint to confirm their account
export const POST = async (request: NextRequest) => {
  const user = getTokenUser(request);

  if (!user)
    return NextResponse.json({ message: "Not signed in" }, { status: 401 }); // If the server cannot identify the user behind this request return 401

  try {
    const body: InitialInformation = await request.json();

    const {
      firstname,
      lastname,
      email,
      phone,
      role,
      lid,
      positionIds = [],
    } = body;

    if (
      !Array.isArray(positionIds) ||
      !positionIds.every((pid) => typeof pid === "string")
    )
      return NextResponse.json(
        { message: "Invalid position ids" },
        { status: 400 },
      );

    if (typeof lid !== "string")
      return NextResponse.json(
        { message: "Please provide a location!" },
        { status: 400 },
      );

    const userLocation = await prisma.userLocation.findUnique({
      where: { userId_locationId: { locationId: lid, userId: user.userId } },
      include: { location: { select: { name: true } } },
    });

    if (!userLocation)
      return NextResponse.json(
        { message: "You don't have access to this restaurant" },
        { status: 403 },
      );

    if (userLocation.role === $Enums.Role.employee) {
      return NextResponse.json(
        { message: "Only owners and managers can invite people" },
        { status: 403 },
      ); // Only owners and managers can create employee's
    }

    // If the access level for the person being invited is something other than an employee or manager
    if (role !== $Enums.Role.employee && role !== $Enums.Role.manager)
      return NextResponse.json(
        { message: "Role must be employee or manager" },
        { status: 400 },
      );

    // If the access level for the person being invited is a manager with the sender of the invitation being someone other than an owner
    if (role === $Enums.Role.manager && userLocation.role !== $Enums.Role.owner)
      return NextResponse.json(
        { message: "Only the owner can invite managers" },
        { status: 403 },
      );

    if (!firstname || !lastname || !email)
      return NextResponse.json(
        { message: "Please fill out all information" },
        { status: 400 },
      );

    const validPositionCount = await prisma.position.count({
      where: { id: { in: positionIds }, locationId: lid },
    });

    if (validPositionCount !== positionIds.length)
      return NextResponse.json(
        {
          message: "Some roles don't belong to this restaurant",
        },
        { status: 400 },
      );

    let invitedUser = await prisma.user.findUnique({ where: { email } });

    if (invitedUser) {
      const location = await prisma.userLocation.findUnique({
        where: {
          userId_locationId: { locationId: lid, userId: invitedUser.id },
        },
      });

      if (location)
        return NextResponse.json(
          {
            message: "This person is already on your team",
          },
          { status: 409 },
        );
    } else {
      invitedUser = await prisma.user.create({
        data: { firstname, lastname, email, phone },
      });
    }

    const hasAccount = !!invitedUser.passwordHash;
    const restaurantName = userLocation.location.name;

    const subject = hasAccount
      ? `Join ${restaurantName} on ajManagement`
      : `You've been invited to ${restaurantName}}`;

    const heading = hasAccount
      ? `${invitedUser.firstname}, you've been added to a new team.`
      : `You've been invited, ${invitedUser.firstname}.`;

    const bodyText = hasAccount
      ? `${restaurantName} added you to their team. Sign in with your existing account to join.`
      : `${restaurantName} added you to their team on ajManagement. Set up your account to see your shifts.`;

    const buttonText = hasAccount
      ? `Join ${restaurantName}`
      : "Set up your account";

    await prisma.userLocation.create({
      data: {
        userId: invitedUser.id,
        locationId: lid,
        status: "pending",
        role: role,
      },
    });

    await prisma.userPosition.createMany({
      data: positionIds.map((pid) => ({
        userId: invitedUser.id,
        positionId: pid,
      })),
      skipDuplicates: true,
    });

    const token = crypto.randomBytes(32).toString("hex");

    await prisma.inviteToken.create({
      data: {
        token,
        userId: invitedUser.id,
        expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000),
        lid,
      },
    });

    const inviteLink = `${process.env.NEXT_PUBLIC_APP_URL}/invite?token=${token}`;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "noreply@ajmanagement.ca",
      to: email,
      subject: `${subject}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light only">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#fafaf9;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fafaf9;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:520px;">

          <!-- Logo row -->
          <tr>
            <td style="padding:0 4px 20px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="40" height="40" align="center" valign="middle" style="width:40px;height:40px;background:#ffeed6;border-radius:8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:15px;font-weight:700;color:#be4308;">aj</td>
                  <td style="padding-left:12px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:16px;font-weight:600;color:#1c1917;">ajManagement</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#ffffff;border:1px solid #e7e5e4;border-radius:16px;padding:32px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
              <h1 style="margin:0 0 12px;font-size:22px;line-height:1.3;font-weight:600;color:#1c1917;">${heading}</h1>
              <p style="margin:0 0 28px;font-size:15px;line-height:1.6;color:#78716c;">${bodyText}</p>

              <!-- Button -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:#0f766e;border-radius:10px;">
                    <a href="${inviteLink}" style="display:inline-block;padding:13px 24px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;">${buttonText} &rarr;</a>
                  </td>
                </tr>
              </table>

              <p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:#78716c;">This link expires in 48 hours.</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 4px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#78716c;">
              If you weren't expecting this, you can safely ignore this email.<br>
              Button not working? Paste this into your browser:<br>
              <a href="${inviteLink}" style="color:#0f766e;word-break:break-all;">${inviteLink}</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
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
        role: true,
        user: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            phone: true,
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
