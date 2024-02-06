import { cookies } from 'next/headers';

export async function GET(){
    const cookieStore = cookies();
    if(cookieStore.get('access_token') && cookieStore.get('refresh_token')){
        return new Response('Login success', { status: 200 });
    }else{
        return new Response('Not auth', { status: 401 });
    }
}