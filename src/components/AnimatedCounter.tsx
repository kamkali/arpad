"use client";

import { useEffect, useRef, useState } from "react";

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
  const [displayValue, setDisplayValue] = useState(to); // Always start with final value
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Simple intersection observer without framer-motion
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Simple animation
            let start = from;
            const increment = (to - from) / (duration * 60); // Assuming 60fps
            
            const animate = () => {
              start += increment;
              if (start < to) {
                setDisplayValue(Math.round(start));
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(to);
              }
            };
            
            if (from !== to) {
              requestAnimationFrame(animate);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [from, to, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
