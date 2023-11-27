'use client';
import Split from '@uiw/react-split';
import React from 'react';



export default function Home() {
	
	
	return (
		<main>
			<Split style={{ border: '1px solid #d5d5d5', borderRadius: 3, height: 100 }}  lineBar>
				<div style={{ minWidth: 60,maxWidth:320 }}>nav</div>
				<div style={{ minWidth: 80, flex: 1 }}>div</div>
			</Split>
		</main>
	);
}
