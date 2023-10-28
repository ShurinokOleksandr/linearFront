import { CustomLink, Typography, LogoIcon, Button, Title, Input, Span, Box } from '@/Components/ui';
import styled, { useTheme } from 'styled-components';
import { signUpStore } from '@/app/signup/modal';
import React, { ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';

export const SignUpForm = observer(() => {
	const theme = useTheme();
	
	return (
		<Wrapper>
			<Logo>
				<LogoIcon />
			</Logo>
			<Title
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
						? <Typography color={theme.critical} fontSize='12px'>
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
						? <Typography color={theme.critical} fontSize='12px'>
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
						? <Typography color={theme.critical} fontSize='12px'>
							{signUpStore.repeatPasswordValidationError}
						</Typography>
						: <></>
				}
			</Box>
			<Button
				onClick={() => signUpStore.submitSignUp()}
				fontSize={theme.fontSizes.small}
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
			><Span marginRight='5px'>
				Do you have an account?
				</Span>
				<CustomLink color={theme.purple300} href='/login'>
					Log in
				</CustomLink>
			</Typography>
		</Wrapper>
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