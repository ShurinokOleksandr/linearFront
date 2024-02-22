import { CreateWorkSpace } from '@/features/create-workspace-for-new-user';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { Main } from '@/app/(page-for-new-user)/Main';
import { requestAllWorkSpace } from '@/shared/utils';
import { queryClient } from '@/app/clientQuery';
import { cookies } from 'next/headers';
import React from 'react';


export default async function Home() {
    const access_token = cookies().get('access_token')?.value;

    await queryClient.prefetchQuery({
        queryFn: () => requestAllWorkSpace(access_token),
        queryKey: ['workspace'],
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Main access_token={access_token}>
                <CreateWorkSpace
                    access_token={access_token}
                />
            </Main>
        </HydrationBoundary>
    );
}
