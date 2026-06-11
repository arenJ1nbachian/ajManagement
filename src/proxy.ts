import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(request: NextRequest) {
  const authorization = request.headers.get("Authorization"); // Retreive the authorization header

  if (!authorization)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 }); // No authorization was provided (request unauthorized)

  const token = authorization.split(" ")[1]; // Retreive the token
  const secretKey = process.env.JWT_SECRET!;

  try {
    jwt.verify(token, secretKey); // Validate the token
    return NextResponse.next(); // Proceed to the protected route
  } catch (e) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}

export const config = {
  matcher: ["/api/((?!auth).*)"],
};
