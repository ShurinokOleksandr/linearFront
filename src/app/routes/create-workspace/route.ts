import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const cookieStore = cookies();
    const responseForFetch = await request.json();
    console.log(responseForFetch, 'dsafdfasd sduakdfasdfasdfasdfa');
    const access_token = cookieStore.get('access_token')?.value;
    const refresh_token = cookieStore.get('refresh_token')?.value;
    const responses = await fetch('http://localhost:4001/workspace/create', {
        headers: {
            authorization: `Bearer ${access_token}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(responseForFetch),
        credentials: 'include',
        method: 'POST',
    });
    if (responses.status === 401) {
        const res = await fetch('http://localhost:4001/auth/refresh', {
            headers: {
                authorization: `Bearer ${refresh_token}`,
                'Content-type': 'application/json',
            },
            credentials: 'include',
            method: 'GET',
        });
        const data = res.headers.getSetCookie()[0];
        const cookies = Object.fromEntries(
            data.split('; ').map((cookie) => cookie.split('='))
        );

        const accessToken = cookies['access_token'];
        console.log(accessToken);
        await fetch('http://localhost:4001/workspace/create', {
            headers: {
                authorization: `Bearer ${accessToken}`,
                'Content-type': 'application/json',
            },
            body: JSON.stringify(responseForFetch),
            credentials: 'include',
            method: 'POST',
        });
        return new Response(JSON.stringify({ message: 'Workspace created' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    }
    return new Response(JSON.stringify({ message: 'Workspace created' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
    });
}
