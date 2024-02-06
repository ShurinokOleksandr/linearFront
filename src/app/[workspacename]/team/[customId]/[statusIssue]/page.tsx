import { requestAllWorkSpace } from '@/shared/utils/api/requests/workspace/all';
import { Logout } from '@/entities/logout/Logout';
import { queryClient } from '@/app/clientQuery';
import { cookies } from 'next/headers';
import React from 'react';

import { Wrapper } from './(components)/Wrapper';

export default async function Home() {
    const access_token = cookies().get('access_token');
    const refresh_token = cookies().get('refresh_token');

    await queryClient.prefetchQuery({
        queryFn: () =>
            requestAllWorkSpace(access_token?.value, refresh_token?.value),
        queryKey: ['workspace'],
    });

    return (
        <main>
            <Wrapper
                refresh_token={cookies().get('refresh_token')?.value}
                access_token={cookies().get('access_token')?.value}
            />

            <Logout />
        </main>
    );
}
