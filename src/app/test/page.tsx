import { requestAllTeam } from '@/shared/utils/api/requests/team/all';
import { queryClient } from '@/app/clientQuery';
import { TestCom } from '@/app/test/testCom';
import { cookies } from 'next/headers';
import React from 'react';




export default async function  Home() {
    const access_token = cookies().get('access_token')?.value;
    const refresh_token = cookies().get('refresh_token')?.value;
    await queryClient.prefetchQuery({
        queryFn:() => requestAllTeam(access_token,refresh_token),
        queryKey:['team']
    });
	
    return (
        <main>
			test{access_token}
            <TestCom  refresh_token={refresh_token} access_token={access_token}/>
 		</main>
    );
}
