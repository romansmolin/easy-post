import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    console.log('request: ', request.cookies)
    return NextResponse.next()
}

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
