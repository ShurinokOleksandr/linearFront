'use client';
import { Typography, Box } from '@/shared/ui';
import { useTheme } from 'styled-components';
import React from 'react';

export const HeaderCreateNewWorkSpace = () => {
	const theme = useTheme();
	return (
		<Box>
			<Typography
				fontSize={theme.fontSizes.title2}
				color={theme.color1}
				marginBottom='24px'
				textAlign='center'
			>
				Create a new workspace
			</Typography>
			<Typography
				fontSize={theme.fontSizes.regular}
				color={theme.color3}
				marginBottom='34px'
				textAlign='center'
			>
				Workspaces are shared environments where teams can work on projects, cycles and tasks.
			</Typography>
		</Box>
	);
};

