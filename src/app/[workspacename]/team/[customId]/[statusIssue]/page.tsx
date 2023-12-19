
import { Logout } from '@/entities/logout/Logout';
import { cookies } from 'next/headers';
import React from 'react';

import { Wrapper } from './(components)/Wrapper';



export default function Home() {
	const cookieStore = cookies();
	const token = cookieStore.get('access_token')?.value;
	
	return (
		<main>
			<Wrapper token={token}/>
			<Logout />
		</main>
	);
}
