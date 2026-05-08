import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check for the auth_session cookie
  const authSession = request.cookies.get('auth_session')?.value;

  // If the user is trying to access an /admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!authSession) {
      // Not logged in, redirect to login page
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // If the user is logged in and trying to access the login page, redirect to admin
  if (request.nextUrl.pathname === '/login') {
    if (authSession) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

// Configure the middleware to only run on specific paths
export const config = {
  matcher: ['/admin/:path*', '/login'],
};
