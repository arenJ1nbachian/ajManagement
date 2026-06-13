import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const verifyJwt = (request: NextRequest): NextResponse | void => {
  const authorization = request.headers.get("Authorization"); // Retreive the authorization header

  if (!authorization)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 }); // No authorization was provided (request unauthorized)

  const token = authorization.split(" ")[1]; // Retreive the token
  const secretKey = process.env.JWT_SECRET!;

  try {
    jwt.verify(token, secretKey); // Validate the token
  } catch (e) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
};

export function proxy(request: NextRequest): NextResponse {
  const route = request.nextUrl.pathname; // Retreive the route of the http request

  if (route.startsWith("/api/") && !route.slice(5, 9).startsWith("auth")) {
    // Verify all routes that start with /api/ and does not follow with auth
    verifyJwt(request);
  }
  return NextResponse.next(); // Proceed to the protected route
}

export const config = {
  // "(?!auth)" - what comes next must not be "auth".
  // .* - zero or more of any single character
  matcher: ["/api/((?!auth).*)"],
};
