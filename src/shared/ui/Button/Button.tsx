import styled, { CSSProperties,css } from 'styled-components';
import { ButtonHTMLAttributes, ComponentProps } from 'react';
import { LoadingIcon, Span } from '@/shared/ui';
import * as CSS from 'csstype';

import { CommonProps, KebabKeys } from '../CommonProps/CommonProps';

export type ButtonVariants = 'secondary' | 'primary' | 'third'
export type DefaultButtonProps = {
	_hover?: KebabKeys<CSSProperties>
	variant?: ButtonVariants;
	isLoading?: boolean;
	disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> & CSS.Properties & ComponentProps<'button'>

export const DefaultButton = styled(CommonProps).withConfig({
	shouldForwardProp: (prop) => !['borderRadius'].includes(prop),
}).attrs({ as: 'button' })<DefaultButtonProps>`
    background: ${({ background, theme }) => background ? background : theme.gray800};
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    white-space: nowrap;
    border-radius: ${({  borderRadius }) => borderRadius ? borderRadius : '4px'};
    text-align: ${({ textAlign }) => textAlign ? textAlign : 'inline'} ;
    font-size:  ${({ fontSize, theme }) => fontSize ? fontSize : theme.fontSizes.small};
    cursor: ${({  cursor }) => cursor ? cursor : 'pointer'};
    &:hover {
        background: ${({ background, theme }) => background ? background : theme.gray950};
        color: ${({ theme, color }) => color ? color :  theme.white};
    }
    ${props => props.variant === 'primary' && css`
        background: ${props.background ? props.background : 'transparent'};
        color: ${ props.color ? props.color :  props.theme.color2};
        padding: 0 12px;
        min-width: 32px;
        height: 32px;
        &:hover {
            color: ${ props?._hover?.color ? props._hover.color :  props.theme.color1};
            background: ${props?._hover?.background ? props._hover.background : props.theme.surface2};
        }
    `}
    ${props => props.variant === 'secondary' && css`
        background: ${props.background ? props.background : props.theme.secondaryBg};
        color: ${ props.color ? props.color :  props.theme.white};
        width: 340px;
        margin: ${ props.margin && props.margin};

        max-width: 90vw;
        height: 48px;
        &:hover{
            background: ${({ theme }) => theme.secondaryBgHover};
    `}
`;

export const Button = ({  isLoading,children, ...props }:DefaultButtonProps) => {
	return (
		<DefaultButton  {...props}>
			{isLoading ? <Span marginRight='5px'><LoadingIcon height='50' width='50'/></Span> : children}
		</DefaultButton>
	);
};