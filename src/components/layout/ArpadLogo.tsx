import { cn } from '@/lib/utils';
import Image from 'next/image';
import logo from './logo.svg'

// A simple placeholder for the logo. You can replace the `src` with your own image file.
export default function ArpadLogo({ className }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt='Arpad Logo'
      width={400}
      height={100}
      className={cn('h-full w-auto', className)}
      priority
      data-ai-hint="company logo"
    />
  );
}
