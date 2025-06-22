"use client";

import { motion } from "framer-motion";

type OnScrollAnimatorProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function OnScrollAnimator({ children, className, delay = 0 }: OnScrollAnimatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
