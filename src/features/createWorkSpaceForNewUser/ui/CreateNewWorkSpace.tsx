'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Box } from '@/shared/ui';
import React from 'react';

import { HeaderCreateNewWorkSpace } from './HeaderCreateNewWorkSpace';
import { CreateWorkSpaceForm } from './CreateWorkSpaceForm';

export const CreateNewWorkSpace = ({ token }:{token?:string}) => {
	
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
				 <CreateWorkSpaceForm token={token}/>
			 </Box>
		 </AnimatedBlock>
	);
};
const AnimatedBlock = styled(motion.div)`

`;

  