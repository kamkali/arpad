import { cn } from '@/lib/utils';
import Image from 'next/image';

// A simple placeholder for the logo. You can replace the `src` with your own image file.
export default function ArpadLogo({ className }: { className?: string }) {
  return (
    <Image
      src="https://placehold.co/400x100.png"
      alt='Arpad Logo Placeholder'
      width={400}
      height={100}
      className={cn('h-10 w-auto', className)}
      priority
      data-ai-hint="company logo"
    />
  );
}
