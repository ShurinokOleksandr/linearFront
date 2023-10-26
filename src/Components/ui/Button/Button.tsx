import type * as CSS from 'csstype';

import { CommonProps } from '@/Components/ui/CommonProps/CommonProps';
import styled from 'styled-components';

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
export const Button = styled(CommonProps).attrs({ as: 'button' })<CSS.Properties>`
  background: ${({ background, theme }) => background ? background : theme.gray800};
  border-radius: ${({  borderRadius }) => borderRadius ? borderRadius : '0'};

  &:hover {
    background: ${({ background, theme }) => background ? background : theme.gray950};
    color: ${({ theme, color }) => color ? color :  theme.white};
  }
`;
