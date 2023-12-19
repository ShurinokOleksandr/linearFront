import styled from 'styled-components';
import { Flex } from '@/shared/ui';
import * as CSS from 'csstype';

export const Center = styled(Flex).attrs({ as: 'div' })<CSS.Properties>`
  display: ${({ display }) =>   display || 'flex' } ;
  flex-direction:  ${({ flexDirection }) =>   flexDirection && flexDirection };
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  gap: ${({ gap }) => gap || '0'};
  // column-gap: ${({ columnGap }) => columnGap || '0'};
  // row-gap: ${({ rowGap }) => rowGap || '0'};
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'inherit'};
`;


