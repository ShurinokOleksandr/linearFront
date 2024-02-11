import type { NextRequest } from 'next/server';

import { BASE_URL } from '@/shared/utils/api/wretchInstance';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    const access_token = request.cookies.get('access_token');
    const refresh_token = request.cookies.get('refresh_token');
    const dynamicPathRegex = /^\/[^\\/]+\/team\/[^/]+\/[^/]+$/;
    const pathToAllPages =
        request.nextUrl.pathname === '/' ||
        request.nextUrl.pathname === '/main' ||
        dynamicPathRegex.test(request.nextUrl.pathname);
    if (!refresh_token && pathToAllPages) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (refresh_token && request.nextUrl.pathname === '/login') {
        return NextResponse.redirect(new URL('/', request.url));
    }
    if (!access_token && refresh_token) {
        const res = await fetch(`${BASE_URL}auth/refresh`, {
            headers: {
                Authorization: `Bearer ${refresh_token.value}`,
                'Content-type': 'application/json',
            },
            credentials: 'include',
        });
        const response = NextResponse.next();

        const data = res.headers.getSetCookie()[0];
        const cookies = Object.fromEntries(
            data.split('; ').map((cookie) => cookie.split('='))
        );

        const accessToken = cookies['access_token'];
        response.cookies.set({
            name: 'access_token',
            value: accessToken,
            httpOnly: true,
            maxAge: 10000,
            path: '/',
        });
        return response;
    }
}
// export const config = {
//     matcher: ['/main/:path*', '/login/:path*', '/:path*', '/(.*)/team/(.*)'],
// };
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
