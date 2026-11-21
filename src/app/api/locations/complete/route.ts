import { prisma } from "@/lib/prisma";
import { getTokenUser } from "@/lib/tokens";
import { $Enums } from "@generated/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const user = getTokenUser(request);

  if (!user)
    return NextResponse.json({ message: "Not signed in" }, { status: 401 }); // If the server cannot identify the user behind this request return 401

  try {
    const body = await request.json();

    const { locationId } = body;

    if (typeof locationId !== "string")
      return NextResponse.json(
        { message: "No locationId provided" },
        { status: 400 },
      );

    const userLocation = await prisma.userLocation.findUnique({
      where: { userId_locationId: { locationId, userId: user.userId } },
    });

    if (!userLocation)
      return NextResponse.json(
        { message: "You don't have access to this restaurant" },
        { status: 403 },
      );

    if (userLocation.role !== $Enums.Role.owner)
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 }); // If the role is not an owner, return status 403

    const updatedLocation = await prisma.location.update({
      where: { id: userLocation.locationId },
      data: { setupCompletedAt: new Date() },
    });

    return NextResponse.json(updatedLocation, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
};
