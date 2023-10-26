'use client';
import { SignUpForm } from '@/app/signup/components/SignUpForm/SignUpForm';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/theme/colors';
import React from 'react';

export default function Auth() {
 	return (
		<ThemeProvider theme={darkTheme}>
			<SignUpForm/>
		</ThemeProvider>
	);
}
