import type { StoryObj, Meta } from '@storybook/react';

import React from 'react';

import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'Widgets/EntryForm/login-form',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const LoginForms: Story = {
    render: () => (
        <LoginForm onSubmit={() => null} isLoading={false} isError={false} />
    ),
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    name: 'Login Form ',
};
