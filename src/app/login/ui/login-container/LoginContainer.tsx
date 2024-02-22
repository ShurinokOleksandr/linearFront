'use client';
import { CustomLink, LogoIcon, Center, Title, Span, Box } from '@/shared/ui';
import styled, { useTheme } from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { loginRequest } from '@/shared/utils/api';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { ValidationLoginForm } from '../../types/index';
import { LoginForm } from '../login-form/LoginForm';

export const LoginContainer = observer(() => {
    const router = useRouter();
    const loginSubmit = useMutation({
        onSuccess: router.refresh,
        mutationFn: loginRequest,
    });
    const theme = useTheme();
    return (
        <Center height='100%' width='100%'>
            <Wrapper>
                <Logo>
                    <LogoIcon />
                </Logo>
                <Title
                    data-testid='titleForm'
                    textAlign='center'
                    fontSize='20px'
                >
                    Log in to Linear
                </Title>
                <LoginForm
                    onSubmit={async (data: ValidationLoginForm) =>
                        loginSubmit.mutate(data)
                    }
                    errorMessage={loginSubmit?.error?.message}
                    isLoading={loginSubmit.isPending}
                    isError={loginSubmit.isError}
                />
                <Box fontSize='12px'>
                    <Span marginRight='5px'>Do you have not an account?</Span>
                    <CustomLink color={theme.purple300} href='/signup'>
                        Sign Up
                    </CustomLink>
                </Box>
            </Wrapper>
        </Center>
    );
});
const Wrapper = styled.div`
    color: ${({ theme }) => theme.color2};
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
    width: 336px;
`;

const Logo = styled.div`
    width: 84px;
    height: 84px;
`;
