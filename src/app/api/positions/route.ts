import { PALETTE } from "@/lib/roleColorPalette";
import { getTokenUser } from "@/lib/tokens";
import { $Enums, PrismaClient } from "@generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextRequest, NextResponse } from "next/server";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export async function POST(request: NextRequest) {
  const user = getTokenUser(request);

  if (!user)
    return NextResponse.json({ message: "Not signed in" }, { status: 401 }); // If the server cannot identify the user behind this request return 401

  try {
    const body = await request.json();
    const { locationId, names } = body;

    // Invalid or no locationId has been provided
    if (typeof locationId !== "string")
      return NextResponse.json(
        { message: "No locationId provided!" },
        { status: 400 },
      );

    const foundLocation = await prisma.userLocation.findUnique({
      where: { userId_locationId: { locationId, userId: user.userId } },
    });

    // Location does not belong to the owner
    if (!foundLocation)
      return NextResponse.json(
        { message: "You don't have access to this restaurant" },
        { status: 403 },
      );

    if (
      foundLocation.role !== $Enums.Role.owner &&
      foundLocation.role !== $Enums.Role.manager
    )
      return NextResponse.json(
        { message: "Only owners and managers can create a position" },
        { status: 403 },
      ); // If the role is not an owner nor a manager return status 403

    if (!Array.isArray(names))
      return NextResponse.json(
        { message: "Add at least one role." },
        { status: 400 },
      );

    // Trim and remove any empty string and store it into newPositions
    const newPositions = names.map((n) => n.trim()).filter((n) => n.length > 0);

    if (newPositions.length === 0)
      return NextResponse.json(
        { message: "Add at least one role." },
        { status: 400 },
      );

    // Retreive existing positions of the location
    const existingPositions = await prisma.position.findMany({
      where: { locationId },
      select: { name: true, color: true },
    });

    // List of all seen positions lowercased
    const seen = new Set(existingPositions.map((p) => p.name.toLowerCase()));
    const namesToCreate: string[] = [];

    for (const newPosition of newPositions) {
      const key = newPosition.toLowerCase();
      if (seen.has(key)) continue; // Skip: already exists or already added
      seen.add(key);
      namesToCreate.push(newPosition);
    }

    const seenColors = new Set(
      existingPositions.map((p) => p.color.toLowerCase()),
    );

    const freeColors = PALETTE.filter((color) => !seenColors.has(color));

    const positionsToCreate = namesToCreate.map((n, i) => ({
      name: n,
      color: freeColors[i] ?? PALETTE[i % PALETTE.length],
      locationId,
    }));

    const data = await prisma.position.createManyAndReturn({
      data: positionsToCreate,
    });

    return NextResponse.json(data, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const locationId = searchParams.get("locationId");

  if (!locationId) {
    return NextResponse.json(
      { message: "Missing required parameters" },
      { status: 400 },
    );
  }
  const positions = await prisma.position.findMany({
    where: { locationId },
    select: { id: true, name: true },
  });

  if (positions.length === 0) {
    return NextResponse.json(
      { message: "No positions exists" },
      { status: 404 },
    );
  }

  return NextResponse.json(positions, { status: 200 });
}
