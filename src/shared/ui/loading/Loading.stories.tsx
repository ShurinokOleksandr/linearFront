// Loading.stories.ts|tsx

import type { StoryObj, Meta } from '@storybook/react';

import { Loading } from '@/shared/ui';
import React from 'react';

const meta: Meta<typeof Loading> = {
    title:'Components/Loading',
    tags: ['autodocs'],
    component: Loading,
};

export default meta;
type Story = StoryObj<typeof Loading>;


export const Primary: Story = {
    render: () =>  <Loading/>,
    name:'Loading',
};
