// Runs before every matched request. Node.js runtime — full API access.

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  console.log(`[Proxy] ${request.method} ${request.nextUrl.pathname}`)

  const { pathname } = request.nextUrl

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)
  requestHeaders.set('x-timestamp', new Date().toISOString())

  if (pathname === '/old-blog') { // Example 2: Redirect /old-blog to /blog
    return NextResponse.redirect(new URL('/blog', request.url))
  }

  if (pathname.startsWith('/admin')) { // Example 3: Simple authentication check
    // Check for auth token (in real app, validate JWT)
    const token = request.cookies.get('auth-token')

    if (!token) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('from', pathname) // Remember where user tried to go
      return NextResponse.redirect(loginUrl)
    }
  }

  // NOTE: Node.js runtime can't set response headers via NextResponse.next() — pass via request headers instead
  if (pathname.startsWith('/api')) { // Example 4: API rate limiting (basic example)
    requestHeaders.set('x-ratelimit-limit', '100')
    requestHeaders.set('x-ratelimit-remaining', '99')
  }

  // NOTE (Node.js runtime): response.cookies.set() on NextResponse.next() does
  // not propagate to the client in Node.js runtime (same limitation as response
  // headers). Use NextResponse.redirect() or NextResponse.rewrite() to set
  // cookies that reach the client, or set a cookie from the page/route handler.
  if (pathname === '/') { // Example 5: A/B Testing
    const bucket = Math.random() < 0.5 ? 'a' : 'b'
    const response = NextResponse.next()
    response.cookies.set('ab-test-variant', bucket)
    return response
  }

  if (pathname === '/hidden') { // Example 6: Rewrite requests
    return NextResponse.rewrite(new URL('/about', request.url))
  }

  const userAgent = request.headers.get('user-agent') || '' // Example 7: Block certain user agents (bot protection)
  if (userAgent.includes('BadBot')) {
    return new NextResponse('Access Denied', { status: 403 })
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    /*
     * Match all paths except Next.js internals and static files.
     * Simple pattern for better Turbopack static analysis compatibility.
     */
    '/((?!_next).*)',
  ],
}
