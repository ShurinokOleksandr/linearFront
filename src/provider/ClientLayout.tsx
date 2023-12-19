'use client';

import ReactQueryProvider from '@/provider/reactQueryProvider/ReactQueryProvider';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/shared/theme/colors';
import React from 'react';

export const  ClientLayout = ({ children,token }: { children: React.ReactNode ,token?:any}) => {
	
	
	return (
		<ReactQueryProvider token={token}>
			<ThemeProvider theme={darkTheme}>
				{ children }
			</ThemeProvider>
		</ReactQueryProvider>
	);
};

