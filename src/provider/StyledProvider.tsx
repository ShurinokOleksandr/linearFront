'use client';

import { createGlobalStyle, StyleSheetManager, ServerStyleSheet } from 'styled-components';
import { useServerInsertedHTML } from 'next/navigation';
import { normalize } from 'styled-normalize';
import React, { useState } from 'react';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${normalize},
    ${reset}
    a {
        color: inherit;  
        text-decoration: inherit;  
    }
    * {
        padding: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: #35364d;
            border-radius: 1px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: rgba(53, 54, 77, 0.6);
        }
    }
`;
export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
	
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
	
    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });
	
    if (typeof window !== 'undefined') return <>{children}</>;
	
    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            <GlobalStyle />
            {children}
        </StyleSheetManager>
    );
}
