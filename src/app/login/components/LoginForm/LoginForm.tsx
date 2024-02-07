'use client';
import {
    CustomLink,
    Typography,
    LogoIcon,
    Button,
    Center,
    Input,
    Title,
    Span,
    Box,
} from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import styled, { useTheme } from 'styled-components';
import { externalApi } from '@/shared/utils';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import * as z from 'zod';

const schema = z.object({
    password: z
        .string()
        .min(6, { message: 'Length of password should be minimum 6 letter.' }),
    username: z
        .string()
        .min(1, { message: 'Please enter an username for login.' }),
});
type ValidationLoginForm = z.infer<typeof schema>;

export const LoginForm = observer(() => {
    // const [isLoading, errors, handleSubmit, register, loginFn] = useLogin();
    const da = {};
    const {
        formState: { errors },
        handleSubmit,
        register,
        setError,
    } = useForm<ValidationLoginForm>({
        resolver: zodResolver(schema),
    });
    const [isLoading, setIsLoading] = useState(false);
    const theme = useTheme();

    const router = useRouter();

    const loginFn = async (data: ValidationLoginForm) => {
        setIsLoading(true);
        return await externalApi
            .url('auth/login')
            .options({
                next: {
                    revalidate: 0,
                },
            })
            .post({ username: data.username, password: data.password })
            .notFound((error) =>
                setError('username', {
                    message: JSON.parse(error.message).message,
                })
            )
            .forbidden((error) =>
                setError('password', {
                    message: JSON.parse(error.message).message,
                })
            )
            .res(async (response) => {
                const data = await response.json();
                localStorage.setItem('profile', JSON.stringify(data));
                router.refresh();
            })
            .catch(() =>
                setError('username', { message: 'Something got wrong' })
            )
            .finally(() => setIsLoading(false));
    };
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
                <Form onSubmit={handleSubmit(loginFn)}>
                    <Box marginBottom='7px' width='100%'>
                        <LoginInput
                            {...register('username')}
                            pointerEvents={isLoading ? 'none' : 'auto'}
                            placeholder='Enter your Name...'
                        />

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
                        {errors?.password?.message && (
                            <Typography
                                data-testid='passwordError'
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

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
`;
const Logo = styled.div`
    width: 84px;
    height: 84px;
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
