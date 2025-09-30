"use client";

import Link from 'next/link';
import { ArrowUp, Code, Linkedin, Github, Mail } from 'lucide-react';
import KaggleIcon from '@/components/icons/kaggle-icon';

const socialLinks = [
  { name: 'Email', icon: <Mail className="h-5 w-5" />, href: 'mailto:m.faraaz.ahmed01@gmail.com' },
  { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/mfaraaz' },
  { name: 'GitHub', icon: <Github className="h-5 w-5" />, href: 'https://github.com/m-faraaz-ahmed' },
  { name: 'Kaggle', icon: <KaggleIcon className="h-5 w-5" />, href: 'https://www.kaggle.com/mohammedfaraazahmed' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary/30 dark:bg-secondary/10 border-t">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Mohammed Faraaz Ahmed. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={link.name}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
