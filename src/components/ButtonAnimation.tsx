'use client';
import type { MouseEventHandler } from 'react';

import { motion } from 'framer-motion';

export const ButtonAnimation = ({
    children,
    className,
    onClick,
    type,
    disabled,
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    type?: "button" | "reset" | "submit" | undefined;
    disabled?: boolean;
}) => {
    return (
        <motion.button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={className ?? ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
        >
            {children}
        </motion.button>
    );
};