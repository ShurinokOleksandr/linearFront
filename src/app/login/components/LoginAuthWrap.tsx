'use client';
import { LoginForm } from '@/app/login/components/LoginForm/LoginForm';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/theme/colors';
import React from 'react';

export const LoginAuthWrap  = () => {
	return (
	    <ThemeProvider theme={darkTheme}>
		    <LoginForm />
	    </ThemeProvider>
	);
};

