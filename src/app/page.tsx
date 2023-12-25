import { requestAllWorkSpace } from '@/shared/utils/api/requests/workspace/all';
import { CreateNewWorkSpace } from '@/features/createWorkSpaceForNewUser';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { queryClient } from '@/app/clientQuery';
import { cookies } from 'next/headers';
import React from 'react';

import { Main } from './(pageForNewUser)/Main';


export default async function Home() {
	const cookieStore = cookies();
	const access_token = cookieStore.get('access_token')?.value;
	const refresh_token = cookies().get('refresh_token')?.value;
	
	await queryClient.prefetchQuery({
		queryFn:() => requestAllWorkSpace(access_token),
		queryKey:['workspace', refresh_token]
	});
	
	
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Main token={access_token}>
				<CreateNewWorkSpace token={access_token}/>
			</Main>
		</HydrationBoundary>
	
	);
}
