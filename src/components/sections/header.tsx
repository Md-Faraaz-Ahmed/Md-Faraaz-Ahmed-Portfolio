"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = ['hero', ...navLinks.map(link => link.id)];
      let currentSection = 'hero';

      for (const sectionId of sections) {
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl) {
          const rect = sectionEl.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#hero" className="flex items-center gap-2" aria-label="Homepage">
          <Code className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold tracking-wider">Md Faraaz Ahmed</span>
        </Link>
        
        <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
                <Link
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                    "transition-colors hover:text-primary",
                    activeSection === link.id ? "text-primary font-semibold" : "text-muted-foreground"
                )}
                >
                {link.label}
                </Link>
            ))}
            </nav>
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open navigation menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-8">
                    <Link href="#hero" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Code className="h-6 w-6 text-primary" />
                        <span className="text-lg font-semibold tracking-wider">MFA</span>
                        </Link>
                    </div>
                    <nav className="flex flex-col gap-6 text-lg font-medium">
                    {navLinks.map((link) => (
                        <Link
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                            "transition-colors hover:text-primary",
                            activeSection === link.id ? "text-primary" : "text-muted-foreground"
                        )}
                        >
                        {link.label}
                        </Link>
                    ))}
                    </nav>
                </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
