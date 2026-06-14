import { generateToken } from "@/lib/tokens";
import { PrismaClient } from "@generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body; // Destructure login fields from body

    const user = await prisma.user.findUnique({ where: { email } }); // Find the user where email matches one from the input

    if (!user)
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 404 },
      ); // User does not exist

    const isMatch = await bcrypt.compare(password, user.passwordHash); // Compare password with hashedPassword

    if (!isMatch)
      return NextResponse.json(
        { message: "Incorrect Password" },
        { status: 401 },
      ); // The password does not match

    const { accessToken, refreshToken } = await generateToken(prisma, user); // Destructure accessToken and refreshToken from the helper function

    return NextResponse.json(
      {
        accessToken: accessToken,
        refreshToken: refreshToken,
        id: user.id,
        role: user.role,
      },
      { status: 200 },
    ); // return the tokens, id and role
  } catch (e) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
