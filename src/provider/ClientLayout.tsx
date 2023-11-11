'use client';

import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/theme/colors';
import React from 'react';

export const  ClientLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		
		<ThemeProvider theme={darkTheme}>
			{ children }
		</ThemeProvider>
	);
};

