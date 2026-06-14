import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAccessJwt } from "./lib/tokens";

export function proxy(request: NextRequest): NextResponse {
  return verifyAccessJwt(request) ?? NextResponse.next(); // If jwt verification return void then return NextResponse.next()
}

export const config = {
  // "(?!auth)" - what comes next must not be "auth".
  // .* - zero or more of any single character
  matcher: ["/api/((?!auth).*)"],
};
