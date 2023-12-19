'use client';
import { useRequestAllWorkSpaceQuery } from '@/shared/utils/api/hooks/useRequestAllWorkSpaceQuery';
import { Logout } from '@/entities/logout/Logout';
import Split from '@uiw/react-split';
import React from 'react';

export const Wrapper = ({ token }:{token?:string}) => {
	const workSpaces = useRequestAllWorkSpaceQuery(token);
	return (
		<div >
			<Split
				renderBar={({ onMouseDown, ...props }) => {
					return (
						<div {...props} style={{ backgroundColor: '#292B41', boxShadow: 'none', width:'1px' }}>
							<div style={{ backgroundColor: '#292B41' , boxShadow: 'none' }} onMouseDown={onMouseDown} />
						</div>
					);
				}}
				style={{ height:'100dvh', }}  >
				<div style={{ maxWidth: 320, minWidth: 60 }}>
					nav
					<Logout />
				</div>
				<div style={{  minWidth: 80,flex: 1 }}>{JSON.stringify(workSpaces.data)}</div>
			</Split>
		</div>
	);
};

  