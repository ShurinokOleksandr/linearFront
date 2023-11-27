import { CommonProps } from '@/shared/ui/CommonProps/CommonProps';
import styled from 'styled-components';
import * as CSS from 'csstype';

export const Flex = styled(CommonProps).attrs({ as: 'div' })<CSS.Properties>`
  display: ${({ display }) =>   display || 'flex' } ;
  align-items: ${({ alignItems }) => alignItems || 'start'};
  justify-content: ${({ justifyContent }) => justifyContent || 'start'};
  gap: ${({ gap }) => gap || '0'};
  // column-gap: ${({ columnGap }) => columnGap || '0'};
  // row-gap: ${({ rowGap }) => rowGap || '0'};
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'inherit'};
`;
// export const  Flex = (props:StyledFlexType) => {
// 	return <StyledFlex {...props}>{props.children}</StyledFlex>;
// };

