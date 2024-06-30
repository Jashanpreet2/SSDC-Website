import { NextResponse } from "next/server";

export function middleware(request) {
    const ifAdmin = request.cookies.get('session')?.value;
    if (ifAdmin) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
    matcher: ['/admin/:path*'],
};