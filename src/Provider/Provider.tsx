'use client';

import { StyleSheetManager, ServerStyleSheet } from 'styled-components';
import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {

	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.clearTag();
		return styles;
	});

	if (typeof window !== 'undefined') return <>{children}</>;

	return (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
			{children}
		</StyleSheetManager>
	);
}
