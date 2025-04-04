import { auth } from '@/features/auth/lib/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default auth((req) => {
    const isLoggedIn = !!req.auth
    const isAuthPage = req.nextUrl.pathname.startsWith('/auth')
    const isDashboardPage = req.nextUrl.pathname.startsWith('/dashboard')

    if (isDashboardPage && !isLoggedIn) {
        return Response.redirect(new URL('/auth', req.nextUrl))
    }

    if (isAuthPage && isLoggedIn) {
        return Response.redirect(new URL('/dashboard', req.nextUrl))
    }

    return NextResponse.next()
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
