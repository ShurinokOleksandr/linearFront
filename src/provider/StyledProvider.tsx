'use client';

import { createGlobalStyle, StyleSheetManager, ServerStyleSheet } from 'styled-components';
import { useServerInsertedHTML } from 'next/navigation';
import { normalize } from 'styled-normalize';
import React, { useState } from 'react';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    padding: 0;
    box-sizing: border-box;
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
