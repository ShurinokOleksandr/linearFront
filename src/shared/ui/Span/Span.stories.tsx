// Span.stories.ts|tsx

import type { StoryObj, Meta } from '@storybook/react';

import { useTheme } from 'styled-components';
import React from 'react';

import { Span } from './Span';

const meta: Meta<typeof Span> = {
    title:'Components/Span',
    component: Span,
};

export default meta;
type Story = StoryObj<typeof Span>;


export const PrimarySpan = ( ) => {
    const theme = useTheme();
    return <>
        <Span
            backgroundColor={theme.purple100}
 			textAlign='center'
            color='black'
            height='50px'
            width='150px'
        >
			Span
        </Span>
    </>;
};

export const Primary: Story = {
    render: () =>
        <Span marginRight='5px'>
		Do you have an account?
        </Span>,
    name:'Default Span',
};