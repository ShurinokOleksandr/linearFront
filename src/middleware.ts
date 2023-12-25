import type { NextRequest } from 'next/server';

import { BASE_URL } from '@/shared/utils/api/wretchInstance';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
	const access_token = request.cookies.get('access_token');
	const refresh_token  = request.cookies.get('refresh_token');
	const dynamicPathRegex = /^\/[^\\/]+\/team\/[^/]+\/[^/]+$/;
	
	if (!access_token && !refresh_token && request.nextUrl.pathname === '/') {
		return NextResponse.redirect(new URL('/login', request.url));
	}
	if (!access_token && !refresh_token && request.nextUrl.pathname === '/main') {
		return NextResponse.redirect(new URL('/login', request.url));
	}
	if (!access_token && !refresh_token && dynamicPathRegex.test(request.nextUrl.pathname)) {
		return NextResponse.redirect(new URL('/login', request.url));
	}
	if (access_token && request.nextUrl.pathname === '/login') {
		return NextResponse.redirect(new URL('/', request.url));
	}
	if(!access_token && refresh_token){
		const res = await fetch(`${BASE_URL}auth/refresh`, {
			headers: {
				Authorization: `Bearer ${refresh_token.value}`,
				'Content-type': 'application/json'
			},
			credentials:'include'
		});
		const response = NextResponse.next();

		const data =   res.headers.getSetCookie()[0];
		const cookies = Object.fromEntries(data.split('; ').map(cookie => cookie.split('=')));

		const accessToken = cookies['access_token'];
		response.cookies.set('access_token', accessToken);
		return response;
	}
	// try {
	// 	if(access_token?.value){
	// 		const secret = new TextEncoder().encode('secret');
	// 		const verifyResult = await jose.jwtVerify(
	// 			access_token.value,
	// 			secret,
	// 		);
	// 		console.log(verifyResult,'1');
	// 		if (access_token && request.nextUrl.pathname === '/login') {
	// 			return NextResponse.redirect(new URL('/', request.url));
	// 		}
	// 	}else if(refresh_token?.value) {
	//
	// 		const res = await fetch(`${BASE_URL}auth/refresh`, {
	// 			headers: {
	// 				Authorization: `Bearer ${refresh_token.value}`,
	// 				'Content-type': 'application/json'
	// 			},
	// 			credentials:'include',
	// 		});
	// 		const response = NextResponse.next();
	//
	// 		const data =   res.headers.getSetCookie()[0];
	// 		const cookies = Object.fromEntries(data.split('; ').map(cookie => cookie.split('=')));
	//
	// 		const accessToken = cookies['access_token'];
	// 		// response.cookies.set('access_token', accessToken);
	// 		response.cookies.set({
	// 			name:'access_token',
	// 			value:accessToken,
	// 			httpOnly:true,
	// 			maxAge:30000,
	//
	// 		});
	//
	// 		NextResponse.redirect(new URL('/', request.url));
	// 		return response;
	//
	// 	} else if(!refresh_token?.value){
	// 		if (!access_token && request.nextUrl.pathname === '/') {
	// 			return NextResponse.redirect(new URL('/login', request.url));
	// 		}
	// 		if (!access_token && request.nextUrl.pathname === '/main') {
	// 			return NextResponse.redirect(new URL('/login', request.url));
	// 		}
	// 		if (!access_token && dynamicPathRegex.test(request.nextUrl.pathname)) {
	// 			return NextResponse.redirect(new URL('/login', request.url));
	// 		}
	// 		console.log(3);
	//
	// 	}
	// } catch {
	//
	// }
}

export const config = {
	matcher: ['/main/:path*','/login/:path*','/:path*', '/(.*)/team/(.*)'],
};