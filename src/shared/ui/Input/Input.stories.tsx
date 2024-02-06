// Input.stories.ts|tsx

import type { StoryObj, Meta } from '@storybook/react';

import { useTheme } from 'styled-components';
import { Typography } from '@/shared/ui'; import React from 'react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title:'Components/Input',
    tags: ['autodocs'],
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;


const PrimaryInput = () => {
    const theme = useTheme();
    return (
        <div>
            <Input
                placeholder='Enter your Username...'
                fontSize={theme.fontSizes.small}
                marginBottom='5px'
                display='block'
                padding='10px'
                height='46px'
            />
        </div>
    );
};
const NotValidUsernameInput = () => {
    const theme = useTheme();
    return (
        <div>
            <Input
                placeholder='Enter your Username...'
                fontSize={theme.fontSizes.small}
                marginBottom='5px'
                display='block'
                padding='10px'
                height='46px'
            />
			
            <Typography color={theme.critical} fontSize='12px'>
				Please enter an username for login.
            </Typography>
        </div>
    );
};
const NotValidLengthOfPasswordInput = () => {
    const theme = useTheme();
    return (
        <div>
            <Input
 				placeholder='Enter your password...'
                fontSize={theme.fontSizes.small}
                marginBottom='5px'
                display='block'
                padding='10px'
                height='46px'
            />
            <Input
                placeholder='Enter your password...'
                fontSize={theme.fontSizes.small}
                marginBottom='5px'
                display='block'
                padding='10px'
                height='46px'
            />
            <Typography color={theme.critical} fontSize='12px'>
				Length of password should be minimum 6 letters
            </Typography>
        </div>
    );
};
const NotValidEqualsOfPasswordInput = () => {
    const theme = useTheme();
    return (
        <div>
            <Input
                placeholder='Enter your password...'
                fontSize={theme.fontSizes.small}
                marginBottom='5px'
                display='block'
                padding='10px'
                height='46px'
            />
			
            <Typography color={theme.critical} fontSize='12px'>
				Passwords are not equals
            </Typography>
        </div>
    );
} ;
export const Primary: Story = {
    render: () => <PrimaryInput/>,
    name:'Input primary',
};
export const NotValidUsername: Story = {
    render: () => <NotValidUsernameInput/>,
    name:'Not Valid Username Input',
};
export const NotValidLengthOfPassword: Story = {
    render: () => <NotValidLengthOfPasswordInput/>,
    name:'Not Validі Length Of Password',
};
export const NotValidEqualsOfPassword: Story = {
    render: () => <NotValidEqualsOfPasswordInput/>,
    name:'Not valid equals of password',
};