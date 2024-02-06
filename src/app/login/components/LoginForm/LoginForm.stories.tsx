 
import type { StoryObj, Meta } from '@storybook/react';

import React from 'react';

import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title:'Widgets/EntryForm/LoginForm',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;



export const LoginForms: Story = {
    render: () => <LoginForm />,
    name:'Login Form ',
};