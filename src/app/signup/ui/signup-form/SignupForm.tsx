'use client';

import { Typography, Button, Input, Box } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import styled, { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import React from 'react';

import { signUpValidationType, signUpFormSchema } from '../../types';

type SignupFormProps = {
    onSubmit: (data: signUpValidationType) => void;
    errorMessage?: string;
    isLoading: boolean;
    isError: boolean;
};

export const SignUpForm = ({
    errorMessage,
    isLoading,
    onSubmit,
    isError,
}: SignupFormProps) => {
    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<signUpValidationType>({
        resolver: zodResolver(signUpFormSchema),
    });

    const theme = useTheme();
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Box width='100%'>
                <LoginInput
                    {...register('username')}
                    placeholder='Enter your Username...'
                    pattern='[^ ]+'
                />
                {isError && (
                    <Typography
                        data-testid='usernameError'
                        color={theme.critical}
                        fontSize='12px'
                    >
                        {errorMessage}
                    </Typography>
                )}
                {errors?.username?.message && (
                    <Typography
                        data-testid='usernameError'
                        color={theme.critical}
                        fontSize='12px'
                    >
                        {errors?.username?.message}
                    </Typography>
                )}
            </Box>
            <Box width='100%'>
                <LoginInput
                    {...register('password')}
                    placeholder='Enter your Password...'
                    type='password'
                />
                {errors?.password?.message ? (
                    <Typography
                        data-testid='passwordError'
                        color={theme.critical}
                        fontSize='12px'
                    >
                        {errors?.password?.message}
                    </Typography>
                ) : (
                    <></>
                )}
            </Box>
            <Box width='100%'>
                <LoginInput
                    {...register('repeatPassword')}
                    placeholder='Repeat your Password...'
                    fontSize={theme.fontSizes.small}
                    type='password'
                />
                {errors?.repeatPassword?.message ? (
                    <Typography
                        data-testid='passwordRepeatError'
                        color={theme.critical}
                        fontSize='12px'
                    >
                        {errors?.repeatPassword?.message}
                    </Typography>
                ) : (
                    <></>
                )}
            </Box>
            <ConfirmButton
                fontSize={theme.fontSizes.small}
                isLoading={isLoading}
                disabled={isLoading}
                type='submit'
            >
                Sign Up
            </ConfirmButton>
        </Form>
    );
};
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
`;
const ConfirmButton = styled(Button)`
    border-radius: 4px;
    text-align: center;
    display: block;
    height: 48px;
    width: 100%;
`;
const LoginInput = styled(Input)`
    height: 46px;
    width: 100%;
    margin-bottom: 7px;
    display: block;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSizes.small};
`;
