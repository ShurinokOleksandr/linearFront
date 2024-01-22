'use client';
import { useRequestAllWorkSpaceQuery } from '@/shared/utils/api/hooks/useRequestAllWorkSpaceQuery';
import { useSessionState } from '@/provider/ContextAuthProvider';
import { Logout } from '@/entities/logout/Logout';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Split from '@uiw/react-split';

export const Wrapper = ({ refresh_token,access_token }:{refresh_token?:string,access_token?:string}) => {
	const workSpaces = useRequestAllWorkSpaceQuery(access_token,refresh_token);
	const router = useRouter();
	const session = useSessionState();
	
	const refSplit = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		router.refresh();
	}, []);
	if(workSpaces.isLoading){
		return <div>Loading....</div>;
	}
	console.log(session);
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
				// onDragEnd={() => localStorage.setItem('split',JSON.stringify({ width:refSplit.current }))}
				style={{ height: '100dvh', }}
				
			>
				<div style={{ maxWidth: 320, minWidth: 60 }} ref={refSplit}>
					nav
					<div>name: {session.user?.username}</div>
					<Logout/>
				</div>
				<div style={{ minWidth: 80, flex: 1 }}>
					{JSON.stringify(workSpaces.data)}
					<div>
						<button onClick={() => {
							
							router.push('/test');
							router.refresh();
						}}>test
						</button>
					</div>
				</div>
			</Split>
		</div>
	);
};

  