import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This is a MOCK middleware representing international security standards
// In a real app, this would verify Supabase JWTs and roles.
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Allow public assets and landing page
    if (
        pathname === '/' ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/brand') ||
        pathname === '/login' ||
        pathname === '/favicon.ico'
    ) {
        return NextResponse.next();
    }

    // 2. Mock Authentication Check
    // In production, we check for 'sb-access-token' or similar auth cookie
    const isAuthenticated = request.cookies.has('quevelug-auth-mock');

    if (!isAuthenticated && pathname !== '/login') {
        // Redirect to login if trying to access protected routes without auth
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // 3. Simple Role Enforcement Mock
    // Logic: 
    // /reporting -> Directors/Supervisors only
    // /monitoring -> All except guards
    // /guards -> Guards only

    // (In a real scenario, we would decode the JWT to get the user role)

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/monitoring/:path*',
        '/guards/:path*',
        '/reporting/:path*',
    ],
};
