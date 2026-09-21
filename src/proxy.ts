import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { localeFromPath } from "@/i18n/path";

export function proxy(request: NextRequest) {
  const locale = localeFromPath(request.nextUrl.pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|_next/data).*)"],
};
