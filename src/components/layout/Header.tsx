"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowRight } from 'lucide-react';
import React from 'react';

const ArpadLogo = () => (
  <svg width="240" height="50" viewBox="0 0 240 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* Icon Part */}
      <g transform="skewX(-10)">
        {/* Dark blue bar */}
        <path d="M0 0 H 20 V 45 H 0 Z" fill="hsl(var(--primary))" />
        {/* Light separator bar */}
        <path d="M24 0 H 32 V 45 H 24 Z" fill="hsl(var(--muted))" />
        {/* Teal background for 'A' with negative space cutout */}
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M36,0 H67 C72.5,0 77,4.5 77,10 V 35 C77,40.5 72.5,45 67,45 H 36 V 0 Z M56.5,13 L46.5,35 H50.5 L53,28 H60 L62.5,35 H66.5 L56.5,13 Z M54.5,24 L56.5,20 L58.5,24 H 54.5 Z"
          fill="hsl(var(--accent))"
        />
      </g>

      {/* Text Part */}
      <g transform="translate(98, 2)">
        <text x="0" y="28" fontFamily="Poppins, sans-serif" fontSize="30" fontWeight="600" fill="hsl(var(--primary))">
          ARPAD
        </text>
        <line x1="0" y1="36" x2="115" y2="36" stroke="hsl(var(--secondary))" strokeWidth="1"/>
        <text x="0" y="48" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="400" fill="hsl(var(--secondary))">
          sp. z o.o.
        </text>
      </g>
    </g>
  </svg>
);


export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Strona Główna' },
    { href: '/o-firmie', label: 'O firmie' },
    { href: '/oferta-2', label: 'Oferta' },
    { href: '/galeria', label: 'Galeria' },
  ];

  const kontaktLink = '/#kontakt';

  const [scrolled, setScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
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
                "transition-colors hover:text-accent",
                pathname === item.href ? "text-accent font-semibold" : (scrolled ? "text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground")
              )}
            >
              {item.label}
            </Link>
          ))}
           <Link href={kontaktLink} className={cn("transition-colors hover:text-accent", scrolled ? "text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground")}>
              Kontakt
            </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
                 <Link href={kontaktLink}>
                    Uzyskaj wycenę
                    <ArrowRight className="ml-2 h-4 w-4"/>
                </Link>
            </Button>
        </div>
        <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className={cn(scrolled ? "text-foreground" : "text-primary-foreground hover:bg-white/20")}>
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background">
                    <nav className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                        <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={cn(
                            "text-lg transition-colors hover:text-accent font-medium",
                            pathname === item.href ? "text-accent" : "text-foreground"
                        )}
                        >
                        {item.label}
                        </Link>
                    ))}
                    <Link
                        href={kontaktLink}
                        onClick={closeMobileMenu}
                        className="text-lg transition-colors hover:text-accent font-medium text-foreground"
                    >
                        Kontakt
                    </Link>
                    <Button asChild size="lg" className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                         <Link href={kontaktLink} onClick={closeMobileMenu}>
                            Bezpłatna wycena
                        </Link>
                    </Button>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
