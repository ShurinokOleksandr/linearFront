import { CommonProps } from '@/shared/ui/Common-props/CommonProps';
import styled from 'styled-components';
import * as CSS from 'csstype';

export const Input = styled(CommonProps).attrs({ as: 'input' })<CSS.Properties>`
    height: ${({ height }) => (height ? height : '50px')};
    width: ${({ width }) => (width ? width : '100%')};

    display: ${({ display }) => (display ? display : 'inline')};
    background: ${({ background, theme }) =>
        background ? background : theme.purple900};
    border: ${({ border, theme }) => (border ? border : theme.gray700)} 1px
        solid;
    pointer-events: ${({ pointerEvents }) =>
        pointerEvents ? pointerEvents : 'auto'};
    &::placeholder {
        color: ${(props) => props.theme.gray500};
    }
    &:focus {
        outline: none;
        border: ${({ theme }) => theme.purple350} 1px solid;
    }
    &:active {
        outline: none;
        border: ${({ theme }) => theme.purple350} 1px solid;
    }
    &:hover {
        border: ${({ theme }) => theme.purple250} 1px solid;

        color: ${({ theme, color }) => (color ? color : theme.white)};
    }
    border-radius: 4px;
`;
