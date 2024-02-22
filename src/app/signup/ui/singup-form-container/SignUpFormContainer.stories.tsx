import type { StoryObj, Meta } from '@storybook/react';

import React from 'react';

import { SignUpForm } from './SignUpFormContainer';

const meta: Meta<typeof SignUpForm> = {
    title: 'Widgets/EntryForm/singup-form-container',
    component: SignUpForm,
};

export default meta;
type Story = StoryObj<typeof SignUpForm>;

export const SignUpForms: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    render: () => <SignUpForm />,
    name: 'Sign Up Form ',
};
