import type * as CSS from 'csstype';

import styled from 'styled-components';

import { CommonProps } from '../CommonProps/CommonProps';

export interface DefaultButtonProps extends CSS.PropertiesFallback {
	transitionTimingFunction?: string;
	transitionDuration?: string;
	transitionProperty?: string;
	placeholderColor?:string
	paddingBottom?:string;
	textDecoration?:string
	paddingRight?:string;
	marginBottom?:string;
	paddingLeft?:string;
	marginRight?:string;
	borderRadius?:string
	paddingTop?:string;
	marginLeft?:string;
	marginTop?:string;
	fontSize?: string;
	outline?: string;
	padding?: string;
	border?: string;
	margin?: string;
	cursor?: string;
  	height?:string
	width?:string
	color?:string
	bg?:string
	
}
export const Button = styled(CommonProps).withConfig({
	shouldForwardProp: (prop) => !['borderRadius'].includes(prop),
}).attrs({ as: 'button' })<CSS.Properties>`
  background: ${({ background, theme }) => background ? background : theme.gray800};
  
  border-radius: ${({  borderRadius }) => borderRadius ? borderRadius : '0px'};
  text-align: ${({ textAlign }) => textAlign ? textAlign : 'inline'} ;
  cursor: ${({  cursor }) => cursor ? cursor : 'pointer'};
  &:hover {
    background: ${({ background, theme }) => background ? background : theme.gray950};
    color: ${({ theme, color }) => color ? color :  theme.white};
  }
`;
