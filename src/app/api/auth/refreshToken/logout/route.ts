import { NextRequest, NextResponse } from "next/server";
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import crypto from "crypto";
import { PrismaClient } from "@generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const secret = process.env.JWT_REFRESH_SECRET!;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  // If no refreshToken cookie exists then there's nothing left to do
  if (!refreshToken)
    return NextResponse.json(
      { message: "Already logged out" },
      { status: 200 },
    );

  try {
    jwt.verify(refreshToken, secret); // Verify the refresh token

    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    /* Delete the refreshToken from db. We do this to let the back-end distinguish between an attack and a log out.
         If we had set revoked to true it would trigger the theft-detection branch on the next renew, incorrectly logging out other sessions*/
    await prisma.refreshToken.deleteMany({
      where: { refreshToken: refreshTokenHash },
    });

    const response = NextResponse.json(
      { message: "Logged out" },
      { status: 200 },
    );

    response.cookies.delete({
      name: "refreshToken",
      path: "/",
    });

    return response;
  } catch (e) {
    if (e instanceof TokenExpiredError) {
      const response = NextResponse.json(
        { message: "Already logged out" },
        { status: 200 },
      );

      const refreshTokenHash = crypto
        .createHash("sha256")
        .update(refreshToken)
        .digest("hex");

      await prisma.refreshToken.deleteMany({
        where: { refreshToken: refreshTokenHash },
      }); // Delete refresh token from database to prevent dead data accumulation

      response.cookies.delete({
        name: "refreshToken",
        path: "/",
      });
      return response; // Token is expired, assume logged out and clear cookie
    }
    if (e instanceof JsonWebTokenError) {
      const response = NextResponse.json(
        { message: "Already logged out" },
        { status: 200 },
      );

      response.cookies.delete({
        name: "refreshToken",
        path: "/",
      });
      return response; // Wrong token provided, assume logged out and clear cookie
    }
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
};
