'use client';
import { CustomLink, Typography, LogoIcon, Button, Center, Input, Title, Span, Box } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import styled, { useTheme } from 'styled-components';
import { externalApi } from '@/shared/utils';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import * as z from 'zod';

const schema = z.object({
	password:z.string().min(6,{ message:'Length of password should be minimum 6 letter.' }),
	username:z.string().min(1,{ message:'Please enter an username for login.' })
});
type ValidationLoginForm = z.infer<typeof schema>

export const LoginForm =  observer(( ) => {
	const {
		formState: { errors },
		handleSubmit,
		register,
		setError,
	} = useForm<ValidationLoginForm>({
		resolver: zodResolver(schema),
	});
	const [isLoading,setIsLoading] = useState(false);
	const theme = useTheme();
	
	const router = useRouter();
	
	const loginFn = async (data:ValidationLoginForm) =>  {
		setIsLoading(true);
		const res = await externalApi
			.url('auth/login')
			.options({
				next: {
					revalidate: 0,
				},
			})
			.post({ username: data.username, password: data.password })
			.notFound(error =>setError('username', { message:JSON.parse(error.message).message }))
			.forbidden(error => setError('password', { message:JSON.parse(error.message).message }))
			.res(r => r.json())
			.catch(() => setError('username', { message:'Something got wrong' }))
			.finally(() => setIsLoading(false));
		if(res){
			localStorage.setItem('profile',JSON.stringify(res));
			router.refresh();
		}
	};
	return (
		<Center
			height='100%'
			width='100%'
		>
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
					<Box
						marginBottom='7px'
						width='100%'
					>
						<Input
							{...register('username')}
							pointerEvents={isLoading ? 'none' : 'auto'}
							placeholder='Enter your Name...'
							fontSize={theme.fontSizes.small}
							marginBottom='7px'
							display='block'
							padding='10px'
							height='46px'
							width='100%'
						/>
						
						{
							errors?.username?.message && <Typography
								data-testid='usernameError'
								color={theme.critical}
								fontSize='12px'
							>
								{errors?.username?.message}
							</Typography>
						}
					</Box>
					<Box
						marginBottom='7px'
						width='100%'
					>
						<Input
							{...register('password')}
							pointerEvents={isLoading ? 'none' : 'auto'}
							placeholder='Enter your Password...'
							fontSize={theme.fontSizes.small}
							marginBottom='7px'
							type='password'
							display='block'
							padding='10px'
							height='46px'
							
							width='100%'
						/>
						{
							errors?.password?.message && <Typography
								data-testid='passwordError'
								color={theme.critical}
								fontSize='12px'
							>
								{errors?.password?.message}
							</Typography>
						}
					</Box>
					<Button
						cursor={isLoading ? 'auto' : 'pointer' }
						fontSize={theme.fontSizes.small}
						isLoading={isLoading}
						disabled={isLoading }
						borderRadius='4px'
						textAlign='center'
						display='block'
						type='submit'
						height='48px'
						width='100%'
					>
						Login
					</Button>
				</Form>
				<Box
					fontSize='12px'
				>
					<Span marginRight='5px'>
						Do you have not an account?
					</Span>
					<CustomLink color={theme.purple300} href='/signup'>
						Sign Up
					</CustomLink>
				</Box>
			</Wrapper>
		</Center>
		
	);
});
const Wrapper  = styled.div`
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
