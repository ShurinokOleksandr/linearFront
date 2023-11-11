import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
	const cookie = request.cookies.get('access_token');
	console.log( request.nextUrl.pathname,'123');
	// console.log( request.nextUrl.pathname);
	
	if (!cookie && request.nextUrl.pathname === '/') {
		return NextResponse.redirect(new URL('/login', request.url));
	}
	if (!cookie && request.nextUrl.pathname === '/main') {
		return NextResponse.redirect(new URL('/login', request.url));
	}
	if (cookie && request.nextUrl.pathname === '/login') {
		// return NextResponse.next();
		return NextResponse.redirect(new URL('/', request.url));
	}
	// try {
	// 	// const secret = new TextEncoder().encode('secret');
	// 	// const { protectedHeader, payload } = await jose.jwtVerify(
	// 	// 	cookie.value,
	// 	// 	secret,
	// 	// );
	// 	return NextResponse.next();
	// } catch {
	// 	return NextResponse.redirect('http://localhost:3000/404');
	// }
}

export const config = {
	matcher: ['/main/:path*','/login/:path*','/:path*',],
};