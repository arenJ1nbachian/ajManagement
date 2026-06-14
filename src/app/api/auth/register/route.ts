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

    const response = NextResponse.json(
      {
        accessToken: accessToken,
        id: user.id,
        role: user.role,
      },
      { status: 200 },
    ); // return the tokens, id and role

    // Attach refreshToken as an httpOnly cookie. This cookie will only be attached with the request if the api call is to "/api/auth/refresh"
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true, // JS won't be able to read this cookie
      secure: true, // This cookie is only sent over HTTPS and never over plain HTTP
      sameSite: true, // This cookie is only sent from my own domain
      path: "/api/auth/refresh", // This cookie is sent to this path
      maxAge: 60 * 60 * 24 * 7, // Lasts 7 days
    });

    return response;
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
