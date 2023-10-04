import styled from 'styled-components';
import React from 'react';
interface StyledFlexType {
	justify?:  'center' | 'start' | 'end';
	items?: 'center' | 'start' | 'end';
	children?: React.ReactNode;
}

const StyledFlex = styled.div<StyledFlexType>`
	display: flex;
	align-items: ${props => props.items || 'start'};
	justify-content: ${props => props.justify || 'start'};
`;
export const  Flex = (props:StyledFlexType) => {
	return <StyledFlex {...props}>{props.children}</StyledFlex>;
};

