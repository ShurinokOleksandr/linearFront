// Flex.stories.ts|tsx

import type { StoryObj, Meta } from '@storybook/react';

import { useTheme } from 'styled-components';
import { Title,Box } from '@/Components/ui';
import React from 'react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
	title:'Components/Flex',
	component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;


const PrimaryFlex = ( ) => {
	const theme = useTheme();
	return <>
		<Title marginBottom='10px' color={theme.white} fontSize='16px'>Flex</Title>
		<Flex
			backgroundColor={theme.purple100}
			justifyContent='center'
			alignItems='center'
			padding='10px 20px'
			height='100px'
			color='black'
			width='350px'
			gap='20px'
		>
			<Box backgroundColor={theme.success} border='1px solid black' padding='10px 20px' textAlign='center'>1</Box>
			<Box backgroundColor={theme.success} border='1px solid black' padding='10px 20px' textAlign='center'>2</Box>
			<Box backgroundColor={theme.success} border='1px solid black' padding='10px 20px' textAlign='center'>3</Box>
		</Flex>
	</>;
};

export const Primary: Story = {
	render: () => <PrimaryFlex/>,
	name:'Default Flex',
};