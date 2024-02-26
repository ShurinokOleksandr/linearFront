import { requestAllWorkSpace } from '@/shared/utils/api';
import { queryClient } from '@/app/clientQuery';
import React from 'react';

import { ClientWrapper } from './(ui)/ClientWrapper';

export default async function Home() {

    await queryClient.prefetchQuery({
        queryFn: () => requestAllWorkSpace(),
        queryKey: ['workspace'],
    });

    return (
        <>
            <ClientWrapper />
        </>
    );
}
