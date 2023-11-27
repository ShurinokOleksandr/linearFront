import { LoadingIcon, Span } from '@/shared/ui';
import styled from 'styled-components';
import { HTMLAttributes } from 'react';
import * as CSS from 'csstype';

import { CommonProps } from '../CommonProps/CommonProps';

export type DefaultButtonProps = {
	isLoading?: boolean
	disabled?: boolean;
} & HTMLAttributes<HTMLButtonElement> & CSS.Properties

export const DefaultButton = styled(CommonProps).withConfig({
	shouldForwardProp: (prop) => !['borderRadius'].includes(prop),
}).attrs({ as: 'button' })`
  background: ${({ background, theme }) => background ? background : theme.gray800};
  
  border-radius: ${({  borderRadius }) => borderRadius ? borderRadius : '0px'};
  text-align: ${({ textAlign }) => textAlign ? textAlign : 'inline'} ;
  cursor: ${({  cursor }) => cursor ? cursor : 'pointer'};
  &:hover {
    background: ${({ background, theme }) => background ? background : theme.gray950};
    color: ${({ theme, color }) => color ? color :  theme.white};
  }
`;

export const Button = ({  isLoading,children, ...props }:DefaultButtonProps) => {
 	return (
		<DefaultButton {...props}>
			{isLoading ? <Span marginRight='5px'><LoadingIcon height='50' width='50'/></Span> : children}
		</DefaultButton>
	);
};