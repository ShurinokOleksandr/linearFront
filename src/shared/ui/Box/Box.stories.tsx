// Box.stories.ts|tsx

import type { StoryObj, Meta } from '@storybook/react';

import { useTheme } from 'styled-components';
import React from 'react';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
    title:'Components/Box',
    component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;


const PrimaryBox = ( ) => {
    const theme = useTheme();
    return <>
        <Box
            backgroundColor={theme.purple100}
 			textAlign='center'
            color='black'
            height='50px'
            width='150px'
        >
			Box
        </Box>
    </>;
};

export const Primary: Story = {
    render: () => <PrimaryBox/>,
    name:'Purple light Box',
};