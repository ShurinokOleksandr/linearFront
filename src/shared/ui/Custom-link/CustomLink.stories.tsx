// Custom-link.stories.ts|tsx

import type { StoryObj, Meta } from '@storybook/react';

import { useTheme } from 'styled-components';
import React from 'react';

import { CustomLink } from './CustomLink';

const meta: Meta<typeof CustomLink> = {
    title: 'Components/Custom-link',
    component: CustomLink,
};

export default meta;
type Story = StoryObj<typeof CustomLink>;

const PrimaryCustomLink = () => {
    const theme = useTheme();
    return (
        <>
            <CustomLink color={theme.purple300} href='/login'>
                Log in
            </CustomLink>
            ,
        </>
    );
};

export const Primary: Story = {
    render: () => <PrimaryCustomLink />,
    name: 'Default CustomLink',
};
