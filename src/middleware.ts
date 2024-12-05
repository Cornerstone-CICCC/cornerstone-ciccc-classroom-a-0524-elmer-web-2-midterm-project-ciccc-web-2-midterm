import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const movieName = searchParams.get(KEY_MOVIE_NAME);
  if (movieName === null) return;
  const headers = new Headers(request.headers);
  headers.set(KEY_MOVIE_NAME, movieName);
  return NextResponse.next({ headers });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

export const KEY_MOVIE_NAME = "movie-name";
