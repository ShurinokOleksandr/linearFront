'use client';
import { useQueryClient } from '@tanstack/react-query';
import { LoginStore } from '@/app/login/model/store';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import { Button } from '@/shared/ui';
import React from 'react';


export const Logout = observer(() => {
	const queryClient = useQueryClient();
	const router = useRouter();
	const logOut =  async () => {
		const res =  await fetch('/routes/logout');
		if(res.ok){
			LoginStore.setPassword('');
			LoginStore.setUsername('');
			router.refresh();
			router.push('/login');
			queryClient.clear();
		}

	};
	 
 	return (
		<div>
			<Button
				variant='primary'
				onClick={logOut}
			>
				Log out
			</Button>
		</div>
	);
});

