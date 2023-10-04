'use client';
import { ThemeProvider } from 'styled-components';
import { api } from '@/utils/axiosInstance';
import { useRouter } from 'next/navigation';
import { theme } from '@/utils/theme';

export default function Auth() {
	const router = useRouter();
	const loginFn =  () => {
		api.post('/auth/login',{ email: 'bob@gmail.com', password: 'bobPass' })
			.then(response =>{
				localStorage.setItem('token',response.data.accessToken);
				localStorage.setItem('refresh',response.data.refreshToken);
				if(localStorage.getItem('token')) router.push('/');
			});
	};
	return (
		<ThemeProvider theme={theme}>
			<main>
				<button onClick={() => loginFn()}>Login</button>
			</main>
		</ThemeProvider>
	);
}
