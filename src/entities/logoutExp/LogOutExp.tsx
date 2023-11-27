'use client';
import { WorkSpaceTypeArray } from '@/app/actions/types';
import { useRouter } from 'next/navigation';
import React from 'react';

export const LogOutExp = ({ workSpaces }: { workSpaces:WorkSpaceTypeArray } ) => {
  
	const router = useRouter();
	const logOut = async () => {
		const res = await fetch('/routes/logout',{
			method:'POST'
		});
		if(res.ok){
			router.push(('/login'));
		}
		
	};
	if(workSpaces.length){
	    router.push((`${workSpaces[0].name}/${workSpaces[0]}`));
	}
	
	return (
		<div>
 			{JSON.stringify(workSpaces)}
	        <div>main</div>
	        <button onClick={logOut}>log out</button>
		</div>
	);
};

