import { PrismaClient } from "@generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextResponse } from "next/server";
import { fromDateString } from "@/lib/dateUtils";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    // The locationId of the user that made this request
    const locationId = searchParams.get("locationId");

    // The starting Monday date
    const stringStartDate: string | null = searchParams.get("startDate");

    // The ending Sunday date
    const stringEndDate: string | null = searchParams.get("endDate");

    if (!locationId || !stringStartDate || !stringEndDate)
      return NextResponse.json(
        { message: "Missing required parameters" },
        { status: 400 },
      );

    const startDate = fromDateString(stringStartDate);
    const endDate = fromDateString(stringEndDate);

    // Retreive every schedules of users along with their first name, last name and their shifts where those shifts fall inclusively in between the start and end date
    const schedules = await prisma.userLocation.findMany({
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
                date: {
                  gte: startDate,
                  lte: endDate,
                },
              },
            },
          },
        },
      },
    });

    const result = schedules.map((s) => ({
      user: {
        ...s.user,
        shiftAssignments: s.user.shiftAssignments.map((a) => ({
          ...a,
          date: a.date.toISOString().split("T")[0],
        })),
      },
    }));

    return NextResponse.json(result, { status: 200 });
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

  if (!userId || !date || !start || !positionId) {
    return NextResponse.json(
      { message: "Missing required parameters" },
      { status: 400 },
    );
  }

  const dateObj = fromDateString(date);

  const existing = await prisma.shiftAssignment.findFirst({
    where: {
      userId,
      date: dateObj,
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
      data: { userId, date: dateObj, start, end, positionId },
    });
  }

  return NextResponse.json(newShift, { status: 200 });
}
