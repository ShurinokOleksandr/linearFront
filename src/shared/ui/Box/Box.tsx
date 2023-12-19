import { CommonProps } from '@/shared/ui/CommonProps/CommonProps';
import styled from 'styled-components';
import * as CSS from 'csstype';



export const Box = styled(CommonProps).attrs({ as: 'div' })<CSS.Properties>`
	background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor  };
`;