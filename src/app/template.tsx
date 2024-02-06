'use client';
import { motion } from 'framer-motion';


export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.main
            transition={{ duration: 0.7 }}
            style={{ height:'100%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {children}
        </motion.main>
    );
}