import { PrismaClient } from "@generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextResponse } from "next/server";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

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
