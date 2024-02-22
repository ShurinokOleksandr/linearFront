'use client';

import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/shared/theme/colors';
import React from 'react';

import ReactQueryProvider from './react-query-provider/ReactQueryProvider';

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactQueryProvider>
            <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
        </ReactQueryProvider>
    );
};
