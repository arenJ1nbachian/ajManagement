import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@generated/prisma";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstname, lastname, email, password } = body; // Destructure register fields from body

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    }); // Find a user where email matches one from the email input

    if (existingUser)
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 400 },
      ); // return bad request when user already exists

    const passwordHash = await bcrypt.hash(password, 10); // Hash the password

    const user = await prisma.user.create({
      data: { firstname, lastname, email, passwordHash, role: "employee" },
    }); // Create new user in db

    const secret = process.env.JWT_SECRET!;

    const token = jwt.sign({ userId: user.id, role: user.role }, secret, {
      expiresIn: "7d",
    }); // Create a jsonwebtoken

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
