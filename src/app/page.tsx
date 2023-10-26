'use client';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/theme/colors';


export default function Home() {
	
	return (
		<ThemeProvider theme={darkTheme}>
			<main>
			
			</main>
		</ThemeProvider>
	);
}
