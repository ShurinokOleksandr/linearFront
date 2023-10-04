'use client';
import { ErrorBoundary } from 'react-error-boundary';
import { Flex } from '@/Components/ui/Flex/Flex';
import React from 'react';

export const Navbar = () => {

 
	return (
		<ErrorBoundary   fallback={<div>Something went wrong</div>}>
			<Flex >
				<div>sadasd</div>
				<div>sadasd</div>

			</Flex>
		</ErrorBoundary >
	);
};

