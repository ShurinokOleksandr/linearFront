'use client';
import { CustomLink, Typography, LogoIcon, Button, Input, Title, Span, Box } from '@/shared/ui';
import { externalApi } from '@/shared/utils/api/wretchInstance';
import { zodResolver } from '@hookform/resolvers/zod';
import styled, { useTheme } from 'styled-components';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import * as z from 'zod';

const signUpFromSchema = z
	.object({
		password: z.string().min(6,{ message: 'Length of password should be minimum 6 letters.' }),
		username: z.string().min(1,{ message:'Please enter an username for login.' }),
		repeatPassword: z.string().min(1,{ message:'Confirm Password is required' }) })
	.refine(({ repeatPassword,password }) => password === repeatPassword,{
		message:'Password don\'t match',
		path:['repeatPassword']
	});
type signUpValidationType = z.infer<typeof signUpFromSchema>

export const SignUpForm = observer(() => {
	const {
		formState: { errors },
		handleSubmit,
		register,
		setError,
	} = useForm<signUpValidationType>({
		resolver: zodResolver(signUpFromSchema),
	});
	const [isLoading,setIsLoading] = useState(false);
	const theme = useTheme();
	const router = useRouter();
	const signUpFn = async (data:signUpValidationType) =>  {
		setIsLoading(true);
		// const res = await SignUpStore.submitSignUp();
		const response = await externalApi
			.url('auth/create')
			.post({ repeatPassword:data.repeatPassword, username: data.username, password: data.password })
			.error(405,error =>setError('username',{ message: JSON.parse(error.message).message }))
			.forbidden(error => setError('password',{ message: JSON.parse(error.message).message }))
			.res(r => r.json())
			.catch(() => setError('password', { message:'Something got wrong' }))
			.finally(() => setIsLoading(false));
		if(response){
			router.push('/');
		}else{
			return null;
		}
	};
	return (
		<Wrapper>
			<Logo>
				<LogoIcon />
			</Logo>
			<Title
				data-testid='titleForm'
				textAlign='center'
				fontSize='20px'
			>
				Sign up to Linear
			</Title>
			<Form onSubmit={handleSubmit(signUpFn)}>
				<Box width='100%'>
					<Input
						{...register('username')}
						placeholder='Enter your Username...'
						fontSize={theme.fontSizes.small}
						marginBottom='5px'
						display='block'
						pattern='[^ ]+'
						padding='10px'
						height='46px'
					/>
					{
						errors?.username?.message
							? <Typography data-testid='usernameError' color={theme.critical} fontSize='12px'>
								{errors?.username?.message}
							</Typography>
							: <></>
					}
				</Box>
				<Box  width='100%'>
					<Input
						{...register('password')}
						placeholder='Enter your Password...'
						fontSize={theme.fontSizes.small}
						marginBottom='5px'
						display='block'
						type='password'
						padding='10px'
						height='46px'
					/>
					{
						errors?.password?.message
							? <Typography data-testid='passwordError' color={theme.critical} fontSize='12px'>
								{errors?.password?.message}
							</Typography>
							: <></>
					}
				</Box>
				<Box  width='100%'>
					<Input
						width='100%'
						{...register('repeatPassword')}
						placeholder='Repeat your Password...'
						fontSize={theme.fontSizes.small}
						marginBottom='5px'
						display='block'
						type='password'
						padding='10px'
						height='46px'
					/>
					{
						errors?.repeatPassword?.message
							? <Typography data-testid='passwordRepeatError' color={theme.critical} fontSize='12px'>
								{errors?.repeatPassword?.message}
							</Typography>
							: <></>
					}
				</Box>
				<Button
					fontSize={theme.fontSizes.small}
					isLoading={isLoading}
					disabled={isLoading}
					borderRadius='4px'
					textAlign='center'
					display='block'
					type='submit'
					height='48px'
					width='100%'
				>
					Sign Up
				</Button>
			</Form>
			<Typography
				fontSize='12px'
			>
				<Span marginRight='5px'>
					Do you have an account?
				</Span>
				<CustomLink color={theme.purple300} href='/login'>
					Log in
				</CustomLink>
			</Typography>
		</Wrapper>
	);
});
const Wrapper  = styled.main`
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
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;