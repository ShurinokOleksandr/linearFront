'use client';
import { CustomLink, Typography, LogoIcon, Title, Span } from '@/shared/ui';
import styled, { useTheme } from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { signupRequest } from '@/shared/utils';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { signUpValidationType } from '../../types/index';
import { SignUpForm } from '../signup-form';

export const SignupContainer = observer(() => {
    const theme = useTheme();
    const router = useRouter();
    const signUpFn = useMutation({
        onSuccess: router.refresh,
        mutationFn: signupRequest,
    });
    return (
        <Wrapper>
            <Logo>
                <LogoIcon />
            </Logo>
            <Title data-testid='titleForm' textAlign='center' fontSize='20px'>
                Sign up to Linear
            </Title>
            <SignUpForm
                onSubmit={async (data: signUpValidationType) =>
                    signUpFn.mutate(data)
                }
                errorMessage={signUpFn?.error?.message}
                isLoading={signUpFn.isPending}
                isError={signUpFn.isError}
            />
            <Typography fontSize='12px'>
                <Span marginRight='5px'>Do you have an account?</Span>
                <CustomLink color={theme.purple300} href='/login'>
                    Log in
                </CustomLink>
            </Typography>
        </Wrapper>
    );
});
const Wrapper = styled.main`
    color: ${({ theme }) => theme.gray200};
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
