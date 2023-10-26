import { Button } from '@/Components/ui/Button/Button';
import { CustomLink, LogoIcon } from '@/Components/ui';
import styled, { useTheme } from 'styled-components';
import { Input } from '@/Components/ui/Input/Input';
import { Title } from '@/Components/ui/Title/Title';
import { Span } from '@/Components/ui/Span/Span';
import React from 'react';

export const LoginForm = () => {
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
			    Log in to Linear
		    </Title>
		    <Input
			    placeholder='Enter your Name...'
			    fontSize={theme.fontSizes.small}
			    display='block'
			    padding='10px'
			    height='46px'
		    />
		    <Input
			    placeholder='Enter your Password...'
			    fontSize={theme.fontSizes.small}
			    display='block'
			    padding='10px'
			    height='46px'
		    />
		    <Button
			    fontSize={theme.fontSizes.small}
			    borderRadius='4px'
			    textAlign='center'
			    display='block'
			    height='48px'
			    width='100%'
		    >
			    Login
		    </Button>
		    <Title
		        fontSize='12px'
		    ><Span marginRight='5px'>
			    Do you have not an account?
		    </Span>
			    <CustomLink color={theme.purple300} href='/signup'>
				    Sign Up
			    </CustomLink>
			</Title>
	    </Wrapper>
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

