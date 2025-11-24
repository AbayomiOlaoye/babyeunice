import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
};

export const MotionSection: React.FC<Props> = ({ children, className, stagger = 0 }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 36, scale: 0.995 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.68,
        ease: [0.22, 1, 0.36, 1],
        delay: stagger,
      }}
      style={{ transformOrigin: 'center top' }}
    >
      {children}
    </motion.section>
  );
};