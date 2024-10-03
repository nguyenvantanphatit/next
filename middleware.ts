import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userStorage = request.cookies.get('user-storage')?.value

  const authRequiredPaths = ['/dashboard', '/cart']

  if (authRequiredPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
    if (!userStorage) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/cart/:path*'],
}
