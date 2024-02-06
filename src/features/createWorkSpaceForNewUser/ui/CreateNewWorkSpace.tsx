'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Box } from '@/shared/ui';
import React from 'react';

import { HeaderCreateNewWorkSpace } from './HeaderCreateNewWorkSpace';

export const CreateNewWorkSpace = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <AnimatedBlock
            initial={{ opacity: 0.5, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <Box maxWidth='460px'>
                <HeaderCreateNewWorkSpace />
                {children}
            </Box>
        </AnimatedBlock>
    );
};
const AnimatedBlock = styled(motion.div)``;
