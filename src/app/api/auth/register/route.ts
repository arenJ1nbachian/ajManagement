import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@generated/prisma";
import { generateToken } from "@/lib/tokens";

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

    const { accessToken, refreshToken } = await generateToken(prisma, user); // Destructure accessToken and refreshToken from the helper function

    return NextResponse.json(
      { accessToken, refreshToken, id: user.id, role: user.role },
      { status: 200 },
    ); // return the tokens, id and role
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
