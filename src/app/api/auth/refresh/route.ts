import { PrismaClient } from "@generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextResponse } from "next/server";
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { generateToken } from "@/lib/tokens";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export const POST = async (request: Request): Promise<NextResponse> => {
  const secret = process.env.JWT_REFRESH_SECRET!;
  const { refreshToken } = await request.json();

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

    return NextResponse.json({
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });
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
