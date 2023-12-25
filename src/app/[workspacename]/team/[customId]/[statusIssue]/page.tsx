import { requestAllWorkSpace } from '@/shared/utils/api/requests/workspace/all';
import { Logout } from '@/entities/logout/Logout';
import { queryClient } from '@/app/clientQuery';
import { cookies } from 'next/headers';
import React from 'react';

import { Wrapper } from './(components)/Wrapper';



export default async function Home() {
 	const access_token = cookies().get('access_token')?.value;
	const refresh_token = cookies().get('refresh_token')?.value;
	
	await queryClient.prefetchQuery({
		queryFn:() => requestAllWorkSpace(access_token),
		queryKey:['workspace',refresh_token]
	});
	return (
		<main>
			<Wrapper refresh_token={refresh_token} access_token={access_token}/>
			<Logout />
		</main>
	);
}
