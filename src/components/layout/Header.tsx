"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mountain } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container px-4 md:px-6 flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-primary font-headline">ARPAD</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-foreground/70"
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={kontaktLink}
            className="transition-colors hover:text-primary text-foreground/70"
          >
            Kontakt
          </a>
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
}
