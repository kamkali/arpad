import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';

interface PrimaryLinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryLinkButton({ href, children, className }: PrimaryLinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-block bg-accent text-accent-foreground py-6 px-12 text-2xl font-bold font-headline rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:-translate-y-1 transform active:scale-[0.98] active:shadow-md',
        className
      )}
    >
      {children}
    </Link>
  );
} 