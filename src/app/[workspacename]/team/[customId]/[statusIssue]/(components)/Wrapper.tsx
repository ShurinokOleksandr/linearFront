'use client';
import { useRequestAllWorkSpaceQuery } from '@/shared/utils/api/hooks/useRequestAllWorkSpaceQuery';
import { Logout } from '@/entities/logout/Logout';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import Split from '@uiw/react-split';

export const Wrapper = ({ refresh_token,access_token }:{refresh_token?:string,access_token?:string}) => {
	const workSpaces = useRequestAllWorkSpaceQuery(access_token,refresh_token);
	const router = useRouter();
	useEffect(() => {
		router.refresh();
	}, []);
	if(workSpaces.isLoading){
		return <div>Loading....</div>;
	}
	return (
		<div>
			<Split
				renderBar={({ onMouseDown, ...props }) => {
					return (
						<div {...props} style={{ backgroundColor: '#292B41', boxShadow: 'none', width: '1px' }}>
							<div style={{ backgroundColor: '#292B41', boxShadow: 'none' }} onMouseDown={onMouseDown}/>
						</div>
					);
				}}
				style={{ height: '100dvh', }}>
				<div style={{ maxWidth: 320, minWidth: 60 }}>
					nav
					<Logout/>
				</div>
				<div style={{ minWidth: 80, flex: 1 }}>{JSON.stringify(workSpaces.data)}</div>
				<button onClick={() => {
					
					router.push('/test');
					router.refresh();
				}}>test
				</button>
			</Split>
		</div>
	);
};

  