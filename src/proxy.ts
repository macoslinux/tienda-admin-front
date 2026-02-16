import "server-only";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createTiendaToken, deleteSessionAsync } from "./server/cookies";

const protectedRoutes = [
  "/profile",
  "/logout",
  "/confirmation",
  "/customer",
  "/orderdetails",
  "/completed",
  "/migrar-esim",
];

const pathnameStartWith = (pathname: string) => {
  return protectedRoutes.some((p) => pathname.startsWith(p));
};

export const proxy = async (request: NextRequest) => {
  const cookies = request.cookies;
  const baseUrl = request.url;
  const tiendaAdminToken = cookies.get("TIENDA_AD_ACCESS_TOKEN")?.value;
  const nextUrl = request?.nextUrl;
  const pathname = nextUrl?.pathname;
  const searchParams = nextUrl?.searchParams;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("searchParams", searchParams.toString());
  requestHeaders.set("pathname", pathname);

  if (tiendaAdminToken) {
    const response = await createTiendaToken(request, requestHeaders);
    if (response && pathnameStartWith("/logout")) deleteSessionAsync();
    if (response) return response;
    const responseRedirect = NextResponse.redirect(
      new URL(`/login?redirectUri=${pathname}`, baseUrl),
    );
    return responseRedirect;
  }
  if (pathnameStartWith("/Plugins/ExternalAuthADClaro/Login")) {
    const responseRedirect = NextResponse.redirect(
      new URL(`/login?redirectUri=${pathname}`, baseUrl),
    );
    return responseRedirect;
  }
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    "/profile",
    "/logout",
    "/confirmation",
    "/customer/:path*",
    "/orderdetails/:id*",
    "/migrar-esim/:path*",
  ],
};
