"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

// Custom SVG Logo component
const ArpadLogo = () => (
    <svg width="120" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.0132 35.5L14.7132 10.3H19.7132L25.3132 28.1L30.9132 10.3H35.8132L27.5132 35.5H23.0132Z" fill="#2E3A59"/>
        <path d="M0 35.5V5.5H5V35.5H0Z" fill="#F44336"/>
        <path d="M0 5.5C0 2.46243 2.46243 0 5.5 0H33.5C36.5376 0 39 2.46243 39 5.5V8.5H34V5.5C34 5.23478 33.8946 4.98043 33.7071 4.79289C33.5196 4.60536 33.2652 4.5 33 4.5H6C5.73478 4.5 5.48043 4.60536 5.29289 4.79289C5.10536 4.98043 5 5.23478 5 5.5V35.5H0V5.5Z" fill="#F44336"/>
        <text x="45" y="28" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="#2E3A59">ARPAD</text>
    </svg>
);


export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const navItems = [
    { href: '/o-firmie', label: 'O firmie' },
    { href: '/oferta-2', label: 'Oferta' },
    { href: '/galeria', label: 'Galeria' },
  ];

  const kontaktLink = isHomepage ? '#kontakt' : '/#kontakt';

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container px-4 md:px-6 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <ArpadLogo />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href ? "text-primary font-semibold" : "text-foreground/80"
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={kontaktLink}
            className="transition-colors hover:text-primary text-foreground/80"
          >
            Kontakt
          </a>
        </nav>
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <nav className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                        <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "text-lg transition-colors hover:text-primary",
                            pathname === item.href ? "text-primary font-semibold" : "text-foreground"
                        )}
                        >
                        {item.label}
                        </Link>
                    ))}
                    <a
                        href={kontaktLink}
                        className="text-lg transition-colors hover:text-primary text-foreground"
                    >
                        Kontakt
                    </a>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
