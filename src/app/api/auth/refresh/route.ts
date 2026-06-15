import { PrismaClient } from "@generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { generateToken } from "@/lib/tokens";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const secret = process.env.JWT_REFRESH_SECRET!;
  const refreshToken = request.cookies.get("refreshToken")?.value!; // Access the refreshToken

  try {
    jwt.verify(refreshToken, secret);
    const rToken = await prisma.refreshToken.findUnique({
      where: { refreshToken },
    });

    if (!rToken) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 }); // Token does not exist in db
    }

    if (rToken.revoked) {
      // theft detected - revoke all tokens for this user
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

    // Mark the current refreshToken as revoked
    await prisma.refreshToken.update({
      where: { id: rToken.id },
      data: { revoked: true },
    });

    // Generate new tokens and return it to the client
    const tokens = await generateToken(prisma, user);

    const response = NextResponse.json({
      accessToken: tokens.accessToken,
    });

    // Attach refreshToken as an httpOnly cookie. This cookie will only be attached with the request if the api call is hits this file
    response.cookies.set("refreshToken", tokens.refreshToken, {
      httpOnly: true, // JS won't be able to read this cookie
      secure: true, // This cookie is only sent over HTTPS and never over plain HTTP
      sameSite: true, // This cookie is only sent from my own domain
      path: "/api/auth/refresh", // This cookie is sent to this path
      maxAge: 60 * 60 * 24 * 7, // Lasts 7 days
    });

    return response;
  } catch (e) {
    if (e instanceof TokenExpiredError) {
      return NextResponse.json({ message: "Expired token" }, { status: 401 }); // Token is expired
    }
    if (e instanceof JsonWebTokenError) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 }); // Wrong token provided
    }
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
};
