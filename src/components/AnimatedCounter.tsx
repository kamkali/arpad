"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

type AnimatedCounterProps = {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
};

export default function AnimatedCounter({ from = 0, to, duration = 1.5, className, prefix = "", suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [displayValue, setDisplayValue] = useState(to); // Start with final value for SSR
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && isInView && ref.current) {
      const node = ref.current;
      setDisplayValue(from); // Reset to start value before animating
      
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          const roundedValue = Math.round(value);
          setDisplayValue(roundedValue);
          node.textContent = prefix + roundedValue.toString() + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [isClient, isInView, from, to, duration, prefix, suffix]);

  // For SSR/static export, show final value immediately
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = prefix + displayValue.toString() + suffix;
    }
  }, [displayValue, prefix, suffix]);

  return <span ref={ref} className={className} />;
}
