import { PrismaClient } from "@generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { generateToken } from "@/lib/tokens";
import crypto from "crypto";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const secret = process.env.JWT_REFRESH_SECRET!;
  const refreshToken = request.cookies.get("refreshToken")?.value!; // Access the refreshToken

  try {
    jwt.verify(refreshToken, secret);
    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    const rToken = await prisma.refreshToken.findUnique({
      where: { refreshToken: refreshTokenHash },
    });

    if (!rToken) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 }); // Token does not exist in db
    }

    if (rToken.expiresAt < new Date()) {
      return NextResponse.json({ message: "Expired token" }, { status: 401 }); // Token is expired
    }

    const update = await prisma.refreshToken.updateMany({
      where: { refreshToken: refreshTokenHash, revoked: false },
      data: { revoked: true },
    });

    if (update.count === 0) {
      await prisma.refreshToken.updateMany({
        where: { userId: rToken.userId },
        data: { revoked: true },
      });
      return NextResponse.json(
        { message: "Token reuse detected" },
        { status: 401 },
      );
    }

    // Retreive the user needed to generate new tokens
    const user = await prisma.user.findUnique({
      where: { id: rToken.userId },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 }); // The user does not exist
    }

    // Generate new tokens and return it to the client
    const tokens = await generateToken(prisma, user, rToken.expiresAt);

    const response = NextResponse.json({
      accessToken: tokens.accessToken,
      id: user.id,
      role: user.role,
    });

    // Attach refreshToken as an httpOnly cookie. This cookie will only be attached with the request if the api call is hits this file
    response.cookies.set("refreshToken", tokens.refreshToken, {
      httpOnly: true, // JS won't be able to read this cookie
      secure: true, // This cookie is only sent over HTTPS and never over plain HTTP
      sameSite: "strict", // This cookie is only sent from my own domain
      path: "/api/auth/refreshToken", // This cookie is sent to this path
      maxAge: Math.floor(rToken.expiresAt.getTime() - Date.now() / 1000), // Lasts 7 days
    });
    return response;
  } catch (e) {
    if (e instanceof JsonWebTokenError) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 }); // Wrong token provided
    }
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
};
