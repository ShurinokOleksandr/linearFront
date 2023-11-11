 
import type { StoryObj, Meta } from '@storybook/react';

import React from 'react';

import { SignUpForm } from './SignUpForm';

const meta: Meta<typeof SignUpForm> = {
	title:'Widgets/EntryForm/SignUpForm',
	component: SignUpForm,
};

export default meta;
type Story = StoryObj<typeof SignUpForm>;



export const SignUpForms: Story = {
	render: () => <SignUpForm />,
	name:'Sign Up Form ',
};