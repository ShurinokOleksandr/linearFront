import { queryClient } from '@/app/clientQuery';
import { requestAllTeam } from '@/shared/utils';
import { TestCom } from '@/app/test/testCom';
import { cookies } from 'next/headers';
import React from 'react';

export default async function Home() {
    const access_token = cookies().get('access_token')?.value;
    const refresh_token = cookies().get('refresh_token')?.value;
    await queryClient.prefetchQuery({
        queryFn: () =>
            requestAllTeam(
                cookies().get('access_token')?.value,
                cookies().get('refresh_token')?.value
            ),
        queryKey: ['team'],
    });

    return (
        <main>
            test{access_token}
            <TestCom
                refresh_token={refresh_token}
                access_token={access_token}
            />
        </main>
    );
}
