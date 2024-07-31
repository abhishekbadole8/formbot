import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  
  const { pathname } = request.nextUrl;
  
  const sessionToken = request.cookies.get("next-auth.session-token")?.value;

  if (pathname.includes("/workspace") || pathname.includes("/settings")) {
    if (!sessionToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else if (pathname === "/login" || pathname === "/signup") {   
    if (sessionToken) {
      return NextResponse.redirect(new URL("/workspace", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/workspace/:path*", "/login", "/signup", "/", "/settings"],
};
