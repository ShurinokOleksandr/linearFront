import { CommonProps } from '@/shared/ui/CommonProps/CommonProps';
import styled, { css } from 'styled-components';
import * as CSS from 'csstype';
export type TypographyVariants = 'primary' | 'error'
export type TypographyPropsType = {
	variant?:TypographyVariants
} & CSS.Properties



export const Typography = styled(CommonProps).attrs({ as: 'p' })<TypographyPropsType>`
    ${props => props.variant === 'error' && css`
        color: ${props.theme.critical};
        font-size:12px;
    `}
`;