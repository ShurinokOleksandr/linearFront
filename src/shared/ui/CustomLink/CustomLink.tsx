import { CommonProps } from '@/shared/ui/CommonProps/CommonProps';
import styled from 'styled-components';
import * as CSS from 'csstype';

export const CustomLink = styled(CommonProps).attrs({ as: 'a' })<CSS.Properties>`
  display: ${({ display }) => display ? display : 'inline'} ;

  &:hover {
    color: ${({ color, theme }) => color ? color : theme.white};
   }
`;
