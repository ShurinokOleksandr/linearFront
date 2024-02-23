import { cookies } from 'next/headers';
import wretch from 'wretch';

export async function GET(){
    const access_token = cookies().get('access_token');
    const refresh_token = cookies().get('refresh_token');

    if(access_token?.value){
        return new Response(JSON.stringify({ token: access_token?.value }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    }else{
        // const res = await fetch('http://localhost:4001/auth/refresh', {
        //     headers: {
        //         authorization: `Bearer ${refresh_token?.value}`,
        //         'Content-type': 'application/json',
        //     },
        //     credentials: 'include',
        //     method: 'GET',
        // });
        const res = await wretch('http://localhost:4001/auth/refresh')
            .headers({ authorization: `Bearer ${refresh_token?.value}` })
            .get()
            .res(  (res) => res);
        const data = res.headers.getSetCookie()[0];
        const cookies = Object.fromEntries(
            data.split('; ').map((cookie) => cookie.split('='))
        );

        const accessToken = cookies['access_token'];


        return new Response(JSON.stringify({ token: accessToken }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    }


}