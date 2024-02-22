'use client';
import { useInteractions } from '@floating-ui/react';
import { createContext } from 'react';

export interface SelectContextValue {
	getItemProps: ReturnType<typeof useInteractions>['getItemProps'];
	handleSelect: (index: number | null) => void;
	selectedIndex: number | null;
	activeIndex: number | null;
}

export const SelectContext = createContext<SelectContextValue>(
	{} as SelectContextValue
);