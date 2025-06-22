"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowRight } from 'lucide-react';
import React from 'react';

const ArpadLogo = () => (
    <svg width="130" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.6667 0L0 40H8.55556L30.3333 6.66667L25.6667 0Z" fill="#219EBC"/>
        <path d="M17.1111 0L42.7778 40H34.2222L12.4444 6.66667L17.1111 0Z" fill="#023047" fillOpacity="0.9"/>
        <text x="50" y="28" fontFamily="Poppins, sans-serif" fontSize="24" fontWeight="bold" fill="#023047">ARPAD</text>
    </svg>
);


export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/o-firmie', label: 'O firmie' },
    { href: '/oferta-2', label: 'Oferta' },
    { href: '/galeria', label: 'Galeria' },
  ];

  const kontaktLink = pathname === '/' ? '#kontakt' : '/#kontakt';

  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                <a href={kontaktLink}>Kontakt</a>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
                 <a href={kontaktLink}>
                    Wyceń projekt
                    <ArrowRight className="ml-2 h-4 w-4"/>
                </a>
            </Button>
        </div>
        <div className="md:hidden">
            <Sheet>
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
                        className={cn(
                            "text-lg transition-colors hover:text-accent font-medium",
                            pathname === item.href ? "text-accent" : "text-foreground"
                        )}
                        >
                        {item.label}
                        </Link>
                    ))}
                    <a
                        href={kontaktLink}
                        className="text-lg transition-colors hover:text-accent font-medium text-foreground"
                    >
                        Kontakt
                    </a>
                    <Button asChild size="lg" className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                         <a href={kontaktLink}>
                            Bezpłatna wycena
                        </a>
                    </Button>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
