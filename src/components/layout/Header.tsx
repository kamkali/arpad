"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowRight } from 'lucide-react';
import React from 'react';

const ArpadLogo = () => (
    <svg width="220" height="50" viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 2)">
        {/* Icon */}
        <g transform="skewX(-15)">
          {/* Back folder */}
          <path d="M5 45 L 30 0 H 45 L 20 45 H 5 Z" fill="hsl(var(--primary))"/>
          {/* Paper stack */}
          <path d="M22 41 L 42 0 H 52 L 32 41 H 22 Z" fill="hsl(var(--muted))" opacity="0.5" transform="translate(3,0)"/>
          {/* Main Accent Shape with 'A' cutout */}
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M35 41L55 0H78C80.2091 0 82 1.79086 82 4V37C82 39.2091 80.2091 41 78 41H35ZM67 12L60 35H65L67 29L69 35H74L67 12Z" 
            fill="hsl(var(--accent))"
          />
        </g>
        {/* Text */}
        <g transform="translate(95, 0)">
          <text x="0" y="24" fontFamily="Poppins, sans-serif" fontSize="26" fontWeight="600" fill="hsl(var(--foreground))" letterSpacing="-0.5" style={{fontStyle: 'italic'}}>
            ARPAD
          </text>
          <line x1="0" y1="30" x2="120" y2="30" stroke="hsl(var(--secondary))" strokeWidth="1.5"/>
          <text x="0" y="44" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="500" fill="hsl(var(--secondary))">
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
        </nav>
        <div className="hidden md:flex items-center gap-4">
             <Button asChild variant="ghost" className={cn("transition-colors hover:text-accent", scrolled ? "text-foreground hover:bg-accent/10" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-transparent/20")}>
                <Link href={kontaktLink}>Kontakt</Link>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
                 <Link href={kontaktLink}>
                    Wyceń projekt
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
