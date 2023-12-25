'use client';
import { useRequestAllTeamQuery } from '@/shared/utils/api/hooks/useRequestAllTeamQuery';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export const TestCom = ({ refresh_token,access_token }:{refresh_token?:string,access_token?:string}) => {
	const router = useRouter();
	const response = useRequestAllTeamQuery(access_token,refresh_token);
	useEffect(() => {
		router.refresh();
	}, []);
	if (response.isLoading){
		return <div>Loading....</div>;
	}
	return (
		<div>
			{JSON.stringify(response.data)}
			<button onClick={() => {
				
				router.back();
				router.refresh();
			}}>back</button>
		</div>
	);
};

