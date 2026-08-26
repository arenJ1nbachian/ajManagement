import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Endpoint for when a user clicks on the invite link.
export const GET = async (request: NextRequest) => {
  try {
    const searchParams = request.nextUrl.searchParams;

    // Retreive the invite token from the search param
    const inviteString = searchParams.get("invite");

    if (!inviteString)
      return NextResponse.json(
        { message: "Please provide an invite string" },
        { status: 400 },
      );

    const inviteToken = await prisma.inviteToken.findUnique({
      where: { token: inviteString },
      include: { user: { select: { firstname: true, lastname: true } } },
    });

    if (!inviteToken)
      return NextResponse.json(
        { message: "Invalid invite token provided" },
        { status: 400 },
      );

    // If the invite token has already been used (e.g. account is already been finalized and created)
    if (inviteToken.used) {
      return NextResponse.json(
        { message: "Invite token has already been used" },
        { status: 400 },
      );
    }

    // If the link is expired
    if (inviteToken.expiresAt < new Date()) {
      return NextResponse.json(
        { message: "Invite token has expired" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        firstname: inviteToken.user.firstname,
        lastname: inviteToken.user.lastname,
      },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};

// Endpoint for when the user finalizes their account. The invite token in the db contains the relevant user in question.
// From there a hashed version of their entered password gets stored and the invite token get invalidated which prevent
// the same link to be used again
export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const { password, inviteString } = body;

  try {
    if (!inviteString)
      return NextResponse.json(
        { message: "Please provide an invite string" },
        { status: 400 },
      );

    if (!password)
      return NextResponse.json(
        { message: "Password not provided" },
        { status: 400 },
      );

    const inviteToken = await prisma.inviteToken.findUnique({
      where: { token: inviteString },
    });

    if (!inviteToken)
      return NextResponse.json(
        { message: "Invalid invite token provided" },
        { status: 400 },
      );

    // If the invite token has already been used (e.g. account is already been finalized and created)
    if (inviteToken.used) {
      return NextResponse.json(
        { message: "Invite token has already been used" },
        { status: 400 },
      );
    }

    // If the link is expired
    if (inviteToken.expiresAt < new Date()) {
      return NextResponse.json(
        { message: "Invite token has expired" },
        { status: 400 },
      );
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id: inviteToken.userId },
      data: { passwordHash },
    });

    // Mark the status of a user belonging to the location in question as active
    await prisma.userLocation.updateMany({
      where: { userId: inviteToken.userId, locationId: inviteToken.lid },
      data: { status: "active" },
    });

    // Invalidate the token by setting used to true
    await prisma.inviteToken.update({
      where: { id: inviteToken.id },
      data: { used: true },
    });

    return NextResponse.json(
      { message: "Account succesffully finalized" },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
