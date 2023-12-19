'use client';

import { createGlobalStyle, StyleSheetManager, ServerStyleSheet } from 'styled-components';
import { useServerInsertedHTML } from 'next/navigation';
import { normalize } from 'styled-normalize';
import React, { useState } from 'react';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${normalize},
    ${reset}
    * {
        padding: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #2b3757;
            border-radius: 15px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #384870;
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
