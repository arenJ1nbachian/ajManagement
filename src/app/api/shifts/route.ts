import { PrismaClient } from "@generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextResponse } from "next/server";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const locationId = searchParams.get("locationId");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    if (!locationId || !startDate || !endDate)
      return NextResponse.json(
        { message: "Missing required parameters" },
        { status: 400 },
      );

    const users = await prisma.userLocation.findMany({
      where: { locationId },
      select: {
        user: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            role: true,
            shiftAssignments: {
              select: {
                start: true,
                end: true,
                date: true,
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
