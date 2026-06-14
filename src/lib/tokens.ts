import { PrismaClient, User } from "@generated/prisma";
import jwt from "jsonwebtoken";

type generateTokenType = {
  accessToken: string;
  refreshToken: string;
};

export const generateToken = async (
  prisma: PrismaClient,
  user: User,
): Promise<generateTokenType> => {
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
