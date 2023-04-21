import { withClerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export const config = {
  matcher: [
    /**
     * Match all request paths except for the ones starting with:
     * - _next
     * - static
     * - favicon.ico
     */
    '/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)',
  ],
}

export default withClerkMiddleware(() => {
  return NextResponse.next()
})
