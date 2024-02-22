import type * as CSS from 'csstype';

import { CommonProps } from '@/shared/ui/Common-props/CommonProps';
import styled from 'styled-components';

export const Span = styled(CommonProps).attrs({ as: 'span' })<CSS.Properties>`
    display: ${({ display }) => (display ? display : 'inline')};
    user-select: none;
`;
