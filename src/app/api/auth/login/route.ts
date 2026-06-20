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

    const {
      email,
      password,
      rememberMe,
    }: { email: string; password: string; rememberMe: boolean } = body; // Destructure login fields from body

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

    const { accessToken, refreshToken } = await generateToken(
      prisma,
      user,
      rememberMe,
    ); // Destructure accessToken and refreshToken from the helper function

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
      sameSite: "strict", // This cookie is only sent from my own domain
      path: "/", // This cookie is sent to this path
      ...(rememberMe ? { maxAge: 60 * 60 * 24 * 30 } : {}), // If rememberMe checking the cookie lasts a month else it becomes a session cookie
    });

    return response;
  } catch (e) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
