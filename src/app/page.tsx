import { requestAllWorkSpace } from '@/shared/utils/api/requests/workspace/all';
import { CreateNewWorkSpace } from '@/features/createWorkSpaceForNewUser';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { queryClient } from '@/app/clientQuery';
import { cookies } from 'next/headers';
import React from 'react';

import { Main } from './(pageForNewUser)/Main';


export default async function Home() {
	const cookieStore = cookies();
	const token = cookieStore.get('access_token')?.value;
	
	await queryClient.prefetchQuery({
		queryFn:() => requestAllWorkSpace(token),
		queryKey:['workspace', token]
	});
	
	
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Main token={token}>
				<CreateNewWorkSpace token={token}/>
			</Main>
		</HydrationBoundary>
	
	);
}
