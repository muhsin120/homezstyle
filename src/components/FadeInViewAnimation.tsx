'use client';
import { motion } from 'framer-motion';

export const FadeInViewAnimation = ({
    children,
    delay,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -30% 0px' }}
            transition={{ delay: delay, duration: 1, type: 'spring', ease: [0.76, 0, 0.24, 1] }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeInViewAnimation;
