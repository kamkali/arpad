"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type OnScrollAnimatorProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function OnScrollAnimator({ children, className, delay = 0 }: OnScrollAnimatorProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fallback for SSR/static export - show content immediately with CSS animation
  if (!isClient) {
    return (
      <div 
        className={`animate-fade-in-up ${className}`}
        style={{ 
          animationDelay: `${delay}s`,
          animationFillMode: 'both'
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
