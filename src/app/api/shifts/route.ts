import { PrismaClient } from "@generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextResponse } from "next/server";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    // The locationId of the user that made this request
    const locationId = searchParams.get("locationId");

    // The starting Monday date
    const startDate = searchParams.get("startDate");

    // The ending Sunday date
    const endDate = searchParams.get("endDate");

    if (!locationId || !startDate || !endDate)
      return NextResponse.json(
        { message: "Missing required parameters" },
        { status: 400 },
      );

    // Retreive every users along with their first name, last name and their shifts where those shifts fall inclusively in between the start and end date
    const users = await prisma.userLocation.findMany({
      where: { locationId },
      select: {
        user: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            shiftAssignments: {
              select: {
                start: true,
                end: true,
                date: true,
                position: {
                  select: {
                    name: true,
                    id: true,
                  },
                },
              },
              where: {
                date: { gte: new Date(startDate), lte: new Date(endDate) },
              },
            },
          },
        },
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { userId, date, start, end, positionId } = body;

  if (!userId || !date || !start || !end || !positionId) {
    return NextResponse.json(
      { message: "Missing required parameters" },
      { status: 400 },
    );
  }

  const existing = await prisma.shiftAssignment.findFirst({
    where: {
      userId,
      date: new Date(date),
    },
  });

  let newShift = null;

  if (existing) {
    newShift = await prisma.shiftAssignment.update({
      where: { id: existing.id },
      data: { start, end, positionId },
    });
  } else {
    newShift = await prisma.shiftAssignment.create({
      data: { userId, date: new Date(date), start, end, positionId },
    });
  }

  return NextResponse.json(newShift, { status: 200 });
}
