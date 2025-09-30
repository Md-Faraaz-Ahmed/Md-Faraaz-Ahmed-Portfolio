import Image from 'next/image';
import { Mail, Linkedin, Github } from 'lucide-react';

const socialLinks = [
  { name: 'Email', icon: <Mail className="h-6 w-6" />, href: 'mailto:m.faraaz.ahmed01@gmail.com' },
  { name: 'LinkedIn', icon: <Linkedin className="h-6 w-6" />, href: 'https://www.linkedin.com/in/mohammed-faraaz-ahmed-69739b258' },
  { name: 'GitHub', icon: <Github className="h-6 w-6" />, href: 'https://github.com/Md-Faraaz-Ahmed' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-dvh flex items-center bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left animate-in fade-in slide-in-from-bottom-12 duration-500">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter font-headline">
              Hi, I'm Mohammed Faraaz Ahmed
            </h1>
            <p className="font-semibold text-primary tracking-wider text-lg">
              DATA ANALYTICS ENTHUSIAST
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl md:mx-0 mx-auto">
              I turn raw data into actionable insights using Python, SQL, and interactive visualizations.
            </p>
            <div className="flex flex-row gap-6 justify-center md:justify-start pt-4">
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
          <div className="relative h-80 w-80 lg:h-96 lg:w-96 mx-auto md:mx-0 animate-in fade-in zoom-in-50 duration-500">
            <Image 
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTc2MDM5NTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Data Analytics"
                data-ai-hint="data analytics"
                fill
                className="object-cover rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
