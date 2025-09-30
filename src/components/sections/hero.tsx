import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'Email', icon: <Mail className="h-6 w-6" />, href: 'mailto:m.faraaz.ahmed01@gmail.com' },
  { name: 'LinkedIn', icon: <Linkedin className="h-6 w-6" />, href: 'https://www.linkedin.com/in/mfaraaz' },
  { name: 'GitHub', icon: <Github className="h-6 w-6" />, href: 'https://github.com/m-faraaz-ahmed' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-dvh flex items-center bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div className="space-y-6 text-center animate-in fade-in slide-in-from-bottom-12 duration-500">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter font-headline">
              Hi, I'm Mohammed Faraaz Ahmed
            </h1>
            <p className="font-semibold text-primary tracking-wider text-lg">
              DATA ANALYTICS ENTHUSIAST
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I turn raw data into actionable insights using Python, SQL, and interactive visualizations.
            </p>
            <div className="flex flex-row gap-6 justify-center pt-4">
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
             <p className="text-sm text-muted-foreground">Python • SQL • Power BI • Tableau • Data Visualization</p>
          </div>
        </div>
      </div>
    </section>
  );
}
