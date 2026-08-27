import { NextRequest } from "next/server";

export const GET = (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
};
