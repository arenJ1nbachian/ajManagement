import { PrismaClient } from "@generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

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

    const secret = process.env.JWT_SECRET!;

    const token = jwt.sign({ userId: user.id, role: user.role }, secret, {
      expiresIn: "7d",
    }); // Create a jwt token

    return NextResponse.json(
      { token, id: user.id, role: user.role },
      { status: 200 },
    ); // return the token, id and role
  } catch (e) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
