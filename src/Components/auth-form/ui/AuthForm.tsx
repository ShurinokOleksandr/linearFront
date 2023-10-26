'use client';

import styled, { ThemeProvider, useTheme } from 'styled-components';
import { Button } from '@/Components/ui/Button/Button';
import { Input } from '@/Components/ui/Input/Input';
import { LogoIcon } from '@/Components/ui';
import { darkTheme } from '@/theme/colors';
import React from 'react';

export const AuthForm = () => {
	const theme = useTheme();
	console.log(theme);
	return (
		<ThemeProvider theme={darkTheme}>
			<Wrapper>
				<Logo>
					<LogoIcon />
				</Logo>
				<Title>
				Log in to Linear
				</Title>
				<Input
 				placeholder='Enter your Name...'
					fontSize={theme.fontSizes.small}
			    display='block'
			    height='46px'
			    width='100%'
				/>
				<Input
					placeholder='Enter your Password...'
					fontSize={theme.fontSizes.small}
					display='block'
					height='46px'
					width='100%'
				/>
				<Button
					fontSize={theme.fontSizes.small}
					display='block'
					height='48px'
					width='100%'
 			>
	            Login
				</Button>
			</Wrapper>
		</ThemeProvider>
	);
};
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
const Title = styled.p`
  font-weight: 500;
  font-size: 20px;
`;
// const Form = styled.form`
//
// `;
  