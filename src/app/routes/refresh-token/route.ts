import { cookies } from 'next/headers';

export async function GET(){
    const refresh_token = cookies().get('refresh_token')?.value;
    cookies().delete('access_token');
    try {
        await fetch('http://localhost:4001/auth/refresh', {
            headers: {
                authorization: `Bearer ${refresh_token}`,
                'Content-type': 'application/json',
            },
            credentials: 'include',
            method: 'GET',
        });
        return new Response(JSON.stringify({ message: 'Access token refreshed' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    }catch (e) {
        return new Response(JSON.stringify({ message: e }), {
            headers: { 'Content-Type': 'application/json' },
            status: 400,
        });
    }
}