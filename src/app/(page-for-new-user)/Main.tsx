'use client';
import { useSessionState } from '@/provider/ContextAuthProvider';
import { useRequestAllWorkSpaceQuery } from '@/shared/utils/api';
import { Typography, Loading, Flex, Box } from '@/shared/ui';
import React, { ComponentProps } from 'react';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/navigation';
import { Logout } from '@/entities';

export type MainProps = NonNullable<unknown> & ComponentProps<'div'>;

export const UserBlock = () => {
    const theme = useTheme();
    const session = useSessionState();

    return (
        <Box>
            <Typography
                fontSize={theme.fontSizes.mini}
                color={theme.color3}
                marginBottom='5px'
            >
                Logged in as:
            </Typography>
            <Typography fontSize={theme.fontSizes.small}>
                {session.user?.username}
            </Typography>
        </Box>
    );
};
export const Main = ({ children }: MainProps) => {
    const workSpaces = useRequestAllWorkSpaceQuery();
    const router = useRouter();
    const theme = useTheme();

    if (workSpaces.isLoading) {
        return <Loading/>;
    }
    if (workSpaces.data && workSpaces.data.length) {
        router.replace(
            `/${workSpaces.data[0].url}/team/${workSpaces.data[0].teams[0].customId}/active`
        );
        router.refresh();
        return <></>;
    }
    return (
        <Box
            backgroundColor={theme.background}
            borderRadius={theme.border.large}
            width='100%'
        >
            <Flex
                justifyContent='space-between'
                padding='32px 30px 0 30px'
                gap='50px'
            >
                <Logout />
                {children}
                <UserBlock />
            </Flex>
        </Box>
    );
};
