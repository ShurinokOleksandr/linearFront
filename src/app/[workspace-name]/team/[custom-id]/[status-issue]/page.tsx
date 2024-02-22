import { requestAllWorkSpace } from '@/shared/utils/api';
import { queryClient } from '@/app/clientQuery';
import { cookies } from 'next/headers';
import React from 'react';

import { ClientWrapper } from './(ui)/ClientWrapper';

export default async function Home() {
    const access_token = cookies().get('access_token');

    await queryClient.prefetchQuery({
        queryFn: () => requestAllWorkSpace(access_token?.value),
        queryKey: ['workspace'],
    });

    return (
        <>
            <ClientWrapper access_token={access_token?.value}/>
        </>
    );
}
