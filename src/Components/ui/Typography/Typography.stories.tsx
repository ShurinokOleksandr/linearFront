// Typography.stories.ts|tsx

import type { StoryObj, Meta } from '@storybook/react';

import { CustomLink, Span } from '@/Components/ui';
import { useTheme } from 'styled-components';
import React from 'react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
	title:'Components/Typography',
	component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;


const PrimaryTypography = ( ) => {
	const theme = useTheme();
	return <>
		<Typography
			fontSize='12px'
		>
			<Span marginRight='5px'>
				Do you have not an account?
			</Span>
			<CustomLink color={theme.purple300} href='/signup'>
				Sign Up
			</CustomLink>
		</Typography>
	</>;
};

export const Primary: Story = {
	render: () => <PrimaryTypography /> ,
	name:'Default Typography',
};