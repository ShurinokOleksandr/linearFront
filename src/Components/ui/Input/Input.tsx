import { CommonProps } from '@/Components/ui/CommonProps/CommonProps';
import styled from 'styled-components';
import * as CSS from 'csstype';


export const Input = styled(CommonProps).attrs({ as: 'input' })<CSS.Properties>`
  height:${({ height }) => height ?  height   : '50px'};
  display: ${({ display }) => display ? display : 'inline'};
  background: ${({ background, theme }) => background ? background : theme.purple900};
   border:${({ border, theme }) => border ? border : theme.gray700} 1px solid ;
  
  &::placeholder{
    color: ${({ theme }) => theme.gray500};
  }
  &:focus{
    outline: none;
    border:${({ theme }) => theme.purple350} 1px solid ;
  }
  &:active{
    outline: none;
    border:${({ theme }) => theme.purple350} 1px solid ;
  }
  &:hover {
    border:${({ theme }) => theme.purple250} 1px solid ;

    color: ${({ theme, color }) => color ? color :  theme.white};
  }
   border-radius: 4px;
`;
