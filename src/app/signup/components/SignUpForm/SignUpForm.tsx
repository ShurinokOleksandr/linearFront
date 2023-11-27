'use client';
import { CustomLink, Typography, LogoIcon, Button, Input, Title, Span, Box } from '@/shared/ui';
import styled, { useTheme } from 'styled-components';
import { signUpStore } from '@/app/signup/modal';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';

export const SignUpForm = observer(() => {
	const theme = useTheme();
	const router = useRouter();
	const signUpFn = async () =>  {
		const res = await signUpStore.submitSignUp();
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
				Sign up to Linear
			</Title>
			<Box>
				<Input
					onChange={(e:ChangeEvent<HTMLInputElement>) => signUpStore.setUsername(e.target.value)}
					placeholder='Enter your Username...'
					fontSize={theme.fontSizes.small}
					marginBottom='5px'
					display='block'
					pattern='[^ ]+'
					padding='10px'
					height='46px'
				/>
				{
					signUpStore.usernameValidationError
						? <Typography data-testid='usernameError' color={theme.critical} fontSize='12px'>
							{signUpStore.usernameValidationError}
						</Typography>
						: <></>
				}
			</Box>
			<Box>
				<Input
					onChange={(e:ChangeEvent<HTMLInputElement>) =>  signUpStore.setPassword(e.target.value)}
					placeholder='Enter your Password...'
					fontSize={theme.fontSizes.small}
					marginBottom='5px'
					display='block'
					type='password'
					padding='10px'
					height='46px'
				/>
				{
					signUpStore.passwordValidationError
						? <Typography data-testid='passwordError' color={theme.critical} fontSize='12px'>
							{signUpStore.passwordValidationError}
						</Typography>
						: <></>
				}
			</Box>
			<Box>
				<Input
					onChange={(e:ChangeEvent<HTMLInputElement>) => signUpStore.setRepeatPassword(e.target.value)}
					placeholder='Repeat your Password...'
					fontSize={theme.fontSizes.small}
					marginBottom='5px'
					display='block'
					type='password'
					padding='10px'
					height='46px'
				/>
				{
					signUpStore.repeatPasswordValidationError
						? <Typography data-testid='passwordRepeatError' color={theme.critical} fontSize='12px'>
							{signUpStore.repeatPasswordValidationError}
						</Typography>
						: <></>
				}
			</Box>
			<Button
				fontSize={theme.fontSizes.small}
				isLoading={signUpStore.loading}
				disabled={signUpStore.loading}
				onClick={signUpFn}
				borderRadius='4px'
				textAlign='center'
				display='block'
				height='48px'
				width='100%'
			>
				Sign Up
			</Button>
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