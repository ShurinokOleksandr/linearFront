'use client';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/navigation';
import { api } from '@/utils/axiosInstance';
import { theme } from '@/utils/theme';
import { useEffect } from 'react';

export default function Home() {
	const router  = useRouter();
	useEffect(() => {
		if(!localStorage.getItem('token')){
			router.push('/auth');
		}
	}, []);
	const loadUsers = () => {
		api.get('').then(data => console.log(data));
	};
	return (
		<ThemeProvider theme={theme}>
			<main>
main
				<button onClick={loadUsers}>
					load users
				</button>
			</main>
		</ThemeProvider>
	);
}
