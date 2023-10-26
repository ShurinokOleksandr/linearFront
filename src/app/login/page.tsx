'use client';
import { LoginForm } from '@/app/login/components/LoginForm/LoginForm';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/theme/colors';
import React from 'react';

export default function Auth() {
	
	return (
		<ThemeProvider theme={darkTheme}>
			<LoginForm />
		</ThemeProvider>
	);
}

 
