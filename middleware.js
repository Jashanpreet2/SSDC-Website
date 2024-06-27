import { NextResponse } from 'next/server';
import { mongooseConnect } from "./lib/dbUtils";

export function middleware(request) {
    try {
        if (mongooseConnect()) {
            return NextResponse.next();
        }
    } catch (err) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });   
    }
}

export const config = {
    matcher: ['/api/:path*'],
};