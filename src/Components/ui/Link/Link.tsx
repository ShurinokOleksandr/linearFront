import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';
import React from 'react';

export const CustomLink = styled(Link)`
color: red;
`;


export const MyLink = (props:LinkProps) => {
	return (
		<CustomLink {...props}>
            children
		</CustomLink>
	);
};

  