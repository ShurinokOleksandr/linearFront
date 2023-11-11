import { CommonProps } from '@/Components/ui/CommonProps/CommonProps';
import styled from 'styled-components';
import * as CSS from 'csstype';

 
export const Title = styled(CommonProps).attrs({ as: 'h1' })<CSS.Properties>`

 text-align: ${({ textAlign }) => textAlign ? textAlign : 'inline'} ;
`;

