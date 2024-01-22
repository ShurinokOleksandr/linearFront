'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Box } from '@/shared/ui';
import React from 'react';

import { HeaderCreateNewWorkSpace } from './HeaderCreateNewWorkSpace';
import { CreateWorkSpaceForm } from './CreateWorkSpaceForm';

export const CreateNewWorkSpace = ({ refresh_token,access_token }:{refresh_token?:string,access_token?:string}) => {
	
	return (
		 <AnimatedBlock
			 initial={{ opacity: 0.5, scale: 0.1 }}
			 animate={{ opacity: 1, scale: 1 }}
			 transition={{ duration: 1 }}
		 >
			 <Box
				 maxWidth='460px'
			 >
				 <HeaderCreateNewWorkSpace/>
				 <CreateWorkSpaceForm refresh_token={refresh_token} access_token={access_token}/>
			 </Box>
		 </AnimatedBlock>
	);
};
const AnimatedBlock = styled(motion.div)`

`;

  