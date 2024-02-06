// Button.stories.ts|tsx

import type { StoryObj, Meta } from '@storybook/react';

import { useTheme } from 'styled-components';
import React from 'react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title:'Components/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;


const PrimaryButton = ( ) => {
    const theme = useTheme();
    return <>
        <Button
            fontSize={theme.fontSizes.small}
 			borderRadius='4px'
            textAlign='center'
            display='block'
            height='48px'
            width='300px'
        >
			Sign Up
        </Button>
    </>;
};

export const Primary: Story = {
    render: () => <PrimaryButton/>,
    name:'Button primary',
};