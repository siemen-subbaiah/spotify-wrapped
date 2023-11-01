import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const accessToken = request.cookies.get('accessToken');

  if (request.nextUrl.pathname === '/' && !accessToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (request.nextUrl.pathname === '/login' && accessToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
};
