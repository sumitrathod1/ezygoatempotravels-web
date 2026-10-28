import { NextResponse, type NextRequest } from "next/server";
import { SITE_HOST, SITE_URL } from "@/lib/site";

// Host handling (BUILD-BRIEF.md §3). Both hosts come from SITE_URL, so no domain is typed here.
const CANONICAL_HOST = SITE_HOST; // www.ezygoatempotravels.com
const APEX_HOST = SITE_HOST.replace(/^www\./, ""); // ezygoatempotravels.com

/** The host the visitor asked for. Behind Easypanel's proxy that's in X-Forwarded-Host. */
function requestHost(request: NextRequest): string {
  const raw = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
  return raw.split(",")[0].trim().toLowerCase().replace(/:\d+$/, "");
}

export function proxy(request: NextRequest) {
  const host = requestHost(request);

  // Apex → www, same path and query, permanent 301.
  if (host === APEX_HOST && APEX_HOST !== CANONICAL_HOST) {
    const { pathname, search } = request.nextUrl;
    return NextResponse.redirect(`${SITE_URL}${pathname}${search}`, 301);
  }

  // Any other host (Easypanel temporary URL, localhost) must never be indexed.
  if (host !== CANONICAL_HOST) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next's static assets, image optimisation and any file with an extension (images, fonts,
  // favicon). robots.txt and sitemap.xml are matched explicitly so staging copies get noindex too.
  matcher: ["/((?!_next/static|_next/image|.*\\.[a-zA-Z0-9]+$).*)", "/robots.txt", "/sitemap.xml"],
};
