import { prisma } from "@/lib/prisma";
import { getTokenUser } from "@/lib/tokens";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
};

export const POST = async (request: NextRequest) => {
  const user = getTokenUser(request); // Read the token and retrieve the userId and role from it

  if (!user)
    return NextResponse.json({ message: "Not signed in" }, { status: 401 }); // If the server cannot identify the user behind this request return 401

  if (user.role !== "owner")
    return NextResponse.json(
      { message: "Only owners can create a restaurant" },
      { status: 403 },
    ); // If the role is not an owner return status 403

  try {
    // The data expected and required is the name, address and phone from the request body.
    const body = await request.json();
    const { name, address, phone } = body;

    // If any are empty return 400
    if (!name?.trim() || !address?.trim() || !phone?.trim())
      return NextResponse.json(
        {
          message: "Name, address and phone are required",
        },
        { status: 400 },
      );

    // Create the location and link it to the user
    const location = await prisma.location.create({
      data: {
        name: name.trim(),
        address: address.trim(),
        phone: phone.trim(),
        users: {
          create: { status: "active", userId: user.userId },
        },
      },
    });

    // Return the location with status 201
    return NextResponse.json(location, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
};
