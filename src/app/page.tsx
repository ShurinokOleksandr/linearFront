import { CreateWorkSpace } from '@/features/createWorkSpaceForNewUser';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { requestAllWorkSpace } from '@/shared/utils';
import { queryClient } from '@/app/clientQuery';
import { cookies } from 'next/headers';
import React from 'react';

import { Main } from './(pageForNewUser)/Main';

export default async function Home() {
    const access_token = cookies().get('access_token')?.value;
    const refresh_token = cookies().get('refresh_token')?.value;

    await queryClient.prefetchQuery({
        queryFn: () => requestAllWorkSpace(access_token, refresh_token),
        queryKey: ['workspace'],
    });
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Main access_token={access_token}>
                <CreateWorkSpace />
            </Main>
        </HydrationBoundary>
    );
}
