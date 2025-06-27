import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CtaButtonProps extends Omit<ButtonProps, 'variant' | 'color'> {
  href: string;
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
  colorVariant?: 'primary' | 'accent';
  className?: string;
  showArrow?: boolean;
  download?: boolean;
}

export default function CtaButton({
  href,
  children,
  variant = 'solid',
  colorVariant = 'accent',
  className,
  showArrow = false,
  download = false,
  ...props
}: CtaButtonProps) {
  const classes = {
    solid: {
      accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    },
    outline: {
      accent: 'border border-border bg-muted text-accent hover:bg-muted/80',
      primary: 'border border-border bg-muted text-primary hover:bg-muted/80',
    },
  };

  const buttonClasses = classes[variant][colorVariant];

  return (
    <Link href={href} passHref download={download}>
      <Button
        size="lg"
        className={cn(
          buttonClasses,
          'transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:-translate-y-px active:scale-[0.98]',
          className
        )}
        {...props}
      >
        {download && <Download className="mr-2" />}
        {children}
        {showArrow && !download && <ArrowRight className="ml-2" />}
      </Button>
    </Link>
  );
} 