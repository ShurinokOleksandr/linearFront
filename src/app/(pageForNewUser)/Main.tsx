'use client';
import { useRequestAllWorkSpaceQuery } from '@/shared/utils/api/hooks/useRequestAllWorkSpaceQuery';
import { Typography, Flex, Box } from '@/shared/ui';
import { Logout } from '@/entities/logout/Logout';
import React, { ComponentProps } from 'react';
import { useTheme } from 'styled-components';
import { useSession } from '@/shared/hooks';
import { useRouter } from 'next/navigation';

export type MainProps = {
	token?:string
} & ComponentProps<'div'>

export const Main = ({ children,token }:MainProps) => {
	const workSpaces = useRequestAllWorkSpaceQuery(token);
	const router = useRouter();
	const theme = useTheme();
	const session = useSession();
	if(workSpaces.data && workSpaces.data.length){
		router.replace(`/${workSpaces.data[0].url}/team/${workSpaces.data[0].teams[0].customId}/active`);
	}
	return (
		<Box
			backgroundColor={theme.background}
			borderRadius={theme.border.large}
			width='100%'
		>
			<Flex
				justifyContent='space-between'
				padding='32px 30px 0 30px'
				gap='50px'
			>
				<Logout />
				{children}
				<Box>
					<Typography
						fontSize={theme.fontSizes.mini}
						color={theme.color3}
						marginBottom='5px'
					>
						Logged in as:
					</Typography>
					<Typography
						fontSize={theme.fontSizes.small}
					>
						{session?.username}
					</Typography>
				</Box>
			</Flex>
		</Box>
	);
};
  