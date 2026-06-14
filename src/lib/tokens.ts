import { PrismaClient, User } from "@generated/prisma";
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

type GenerateTokenResult = {
  accessToken: string;
  refreshToken: string;
};

export const verifyAccessJwt = (request: NextRequest): NextResponse | void => {
  const authorization = request.headers.get("Authorization"); // Retreive the authorization header

  if (!authorization)
    return NextResponse.json({ message: "No token" }, { status: 401 }); // No authorization was provided (request unauthorized)

  const accessToken = authorization.split(" ")[1]; // Retreive the access token
  const accessSecretKey = process.env.JWT_ACCESS_SECRET!; // Retreive the access token's secret key

  try {
    jwt.verify(accessToken, accessSecretKey); // Validate the access token
  } catch (e) {
    if (e instanceof TokenExpiredError) {
      return NextResponse.json({ message: "Token expired" }, { status: 401 }); // Expired access token
    }
    if (e instanceof JsonWebTokenError) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 }); // Wrong token provided
    }
  }
};

export const generateToken = async (
  prisma: PrismaClient,
  user: User,
): Promise<GenerateTokenResult> => {
  const accessSecret = process.env.JWT_ACCESS_SECRET!;
  const refreshSecret = process.env.JWT_REFRESH_SECRET!;

  const accessToken = jwt.sign(
    { userId: user.id, role: user.role },
    accessSecret,
    {
      expiresIn: "5m",
    },
  ); // Create an access token

  const refreshToken = jwt.sign({ userId: user.id }, refreshSecret, {
    expiresIn: "7d",
  }); // Create a refresh token

  const oneWeek = 1000 * 60 * 60 * 24 * 7;

  await prisma.refreshToken.create({
    data: {
      refreshToken,
      userId: user.id,
      expiresAt: new Date(Date.now() + oneWeek),
    },
  }); // Add refreshToken in the database

  return { accessToken, refreshToken };
};
