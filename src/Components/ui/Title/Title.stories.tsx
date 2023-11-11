// Title.stories.ts|tsx

import type { StoryObj, Meta } from '@storybook/react';

import { useTheme } from 'styled-components';
import React from 'react';

import { Title } from './Title';

const meta: Meta<typeof Title> = {
	title:'Components/Title',
	component: Title,
};

export default meta;
type Story = StoryObj<typeof Title>;


export const PrimaryTitle = ( ) => {
	const theme = useTheme();
	return <>
		<Title
			backgroundColor={theme.purple100}
 			textAlign='center'
			color='black'
			height='50px'
			width='150px'
		>
			Title
		</Title>
	</>;
};

export const Primary: Story = {
	render: () =>
		<Title
			textAlign='center'
			fontSize='20px'
		>
			Log in to Linear
		</Title>,
	name:'Default Title',
};