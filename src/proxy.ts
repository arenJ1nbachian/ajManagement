import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAccessJwt } from "./lib/tokens";
import jwt from "jsonwebtoken";

/**
 * Intercepts requests before they reach a page or API route, deciding
 * whether to let them continue, or redirect/reject them.
 *
 * Two separate kinds of requests need two separate kinds of checks,
 * because they carry different tokens:
 * - API requests (/api/*) attach the short-lived ACCESS token manually,
 *   via an Authorization header, set by our own fetch() calls.
 * - Page requests (e.g. typing /dashboard in the address bar) are raw
 *   browser navigations -- no JS has run yet to attach a header, so the
 *   only thing that COULD be present is the REFRESH token, since that
 *   one rides along automatically as an httpOnly cookie.
 *
 * This is a shallow check only (token exists + signature/expiry valid).
 * It intentionally does NOT hit the database to check revocation --
 * that deeper check still happens in /api/auth/refreshToken/renew,
 * which remains the real source of truth. This function exists purely
 * to reject the common "no token at all" case early, before a page's
 * JS bundle gets shipped to someone who was never going to be let in.
 */
export function proxy(request: NextRequest): NextResponse {
  // Extract the pathname from the URL
  const pathname = request.nextUrl.pathname;

  // API routes carry the access token -- verify the token
  if (pathname.startsWith("/api/")) {
    return verifyAccessJwt(request) ?? NextResponse.next();
  }

  const urlPages = ["/dashboard"];
  const isPageUrl = urlPages.some((page) => pathname.startsWith(page));
  const secret = process.env.JWT_REFRESH_SECRET!;

  // Page routes only ever carry the refreshToken cookie at this stage
  if (isPageUrl) {
    const refreshToken = request.cookies.get("refreshToken")?.value;

    // No cookie at all -- the common case, never authenticated
    if (!refreshToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    try {
      jwt.verify(refreshToken, secret);
    } catch (e) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Cookie present and structurally valid -- let it through. The
    // real database-backed check (revocation, reuse detection) still
    // happens in /renew when the page actually tries to refresh.
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  // "(?!auth)" - what comes next must not be "auth".
  // .* - zero or more of any single character
  matcher: ["/dashboard", "/api/((?!auth).*)"],
};
