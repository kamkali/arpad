import { cn } from '@/lib/utils';
import Image from 'next/image';
import logo from '@/public/logo.svg';

export default function ArpadLogo({ className }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt='Arpad Logo'
      width={2048}
      height={2048}
      className={cn('h-32 w-auto', className)}
      priority
      data-ai-hint="company logo"
    />
  );
}
