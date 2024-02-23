import { CreateWorkSpace } from '@/features/create-workspace-for-new-user';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { Main } from '@/app/(page-for-new-user)/Main';
import { requestAllWorkSpace } from '@/shared/utils';
import { queryClient } from '@/app/clientQuery';
import React from 'react';


export default async function Home() {

    await queryClient.prefetchQuery({
        queryFn: requestAllWorkSpace,
        queryKey: ['workspace'],
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Main>
                <CreateWorkSpace />
            </Main>
        </HydrationBoundary>
    );
}
