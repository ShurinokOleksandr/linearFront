'use client';
import { Typography, Button, Input, Box } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import styled, { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import React from 'react';

import { ValidationLoginForm, schema } from '../../types';

type LoginFormProps = {
    onSubmit: (data: ValidationLoginForm) => void;
    errorMessage?: string;
    isLoading: boolean;
    isError: boolean;
};
export const LoginForm = ({
    errorMessage,
    isLoading,
    onSubmit,
    isError,
}: LoginFormProps) => {
    const theme = useTheme();
    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<ValidationLoginForm>({
        resolver: zodResolver(schema),
    });
    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Box marginBottom='7px' width='100%'>
                    <LoginInput
                        {...register('username')}
                        pointerEvents={isLoading ? 'none' : 'auto'}
                        placeholder='Enter your Name...'
                    />

                    {isError && errorMessage === 'Not Found User' && (
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
                <Box marginBottom='7px' width='100%'>
                    <LoginInput
                        {...register('password')}
                        pointerEvents={isLoading ? 'none' : 'auto'}
                        placeholder='Enter your Password...'
                        type='password'
                    />
                    {isError && errorMessage === 'Wrong password' && (
                        <Typography
                            data-testid='passwordError'
                            color={theme.critical}
                            fontSize='12px'
                        >
                            {errorMessage}
                        </Typography>
                    )}
                    {errors?.password?.message && (
                        <Typography
                            data-testid='usernameError'
                            color={theme.critical}
                            fontSize='12px'
                        >
                            {errors?.password?.message}
                        </Typography>
                    )}
                </Box>
                <ConfirmButton
                    cursor={isLoading ? 'auto' : 'pointer'}
                    fontSize={theme.fontSizes.small}
                    isLoading={isLoading}
                    disabled={isLoading}
                    type='submit'
                >
                    Login
                </ConfirmButton>
            </Form>
        </>
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
