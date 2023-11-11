import { cookies } from 'next/headers';

export async function POST(){
	const cookieStore = cookies();
	
	cookieStore.delete('access_token');
	cookieStore.delete('refresh_token');
	return new Response('Cookie deleted', { status: 200 });
	
}