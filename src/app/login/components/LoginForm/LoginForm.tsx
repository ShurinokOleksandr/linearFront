'use client';
import { CustomLink, Typography, LogoIcon, Button, Input, Title, Span, Box } from '@/Components/ui';
import styled, { useTheme } from 'styled-components';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import React from 'react';

import loginFormStore from '../../model/store';

export const LoginForm =  observer(() => {
	 
 	const theme = useTheme();
	 
	const router = useRouter();
	 
	const loginFn = async () =>  {
		const res = await loginFormStore.submitLogin();
 		if(res){
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
				Log in to Linear
			</Title>
			<Box >
				<Input
					onChange={(e:React.ChangeEvent<HTMLInputElement>) => loginFormStore.setUsername(e.target.value)}
					pointerEvents={loginFormStore.loading ? 'none' : 'auto'}
					placeholder='Enter your Name...'
					fontSize={theme.fontSizes.small}
					marginBottom='7px'
					display='block'
					padding='10px'
					height='46px'
				/>
				{
					loginFormStore.usernameValidationError && <Typography
						color={theme.critical}
						fontSize='12px'
					>
						{loginFormStore.usernameValidationError}
					</Typography>
				}
			</Box>
			<Box>
				<Input
					onChange={(e:React.ChangeEvent<HTMLInputElement>) => loginFormStore.setPassword(e.target.value)}
					pointerEvents={loginFormStore.loading ? 'none' : 'auto'}
 					placeholder='Enter your Password...'
					fontSize={theme.fontSizes.small}
					marginBottom='7px'
					type='password'
					display='block'
					padding='10px'
					height='46px'
				/>
				{
					loginFormStore.usernameValidationError && <Typography
						color={theme.critical}
						fontSize='12px'
					>
						{loginFormStore.passwordValidationError}
					</Typography>
				}
			</Box>
			<Button
 				cursor={loginFormStore.loading ? 'auto' : 'pointer' }
				disabled={loginFormStore.loading}
				fontSize={theme.fontSizes.small}
				borderRadius='4px'
				textAlign='center'
				onClick={loginFn}
				display='block'
				height='48px'
				width='100%'
			>
				Login
			</Button>
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

