import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function Hero() {
  const profilePhoto = PlaceHolderImages.find(p => p.id === 'profile-photo');

  return (
    <section id="hero" className="relative min-h-dvh flex items-center bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left animate-in fade-in slide-in-from-left-12 duration-500">
            <p className="font-semibold text-primary tracking-wider">
              DATA ANALYTICS ENTHUSIAST
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter font-headline">
              Mohammed Faraaz Ahmed
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              I turn raw data into actionable insights using Python, SQL, and interactive visualizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Let's Connect
                </Link>
              </Button>
            </div>
             <p className="text-sm text-muted-foreground">Python • SQL • Power BI • Tableau • Data Visualization</p>
          </div>
          <div className="flex justify-center animate-in fade-in slide-in-from-right-12 duration-500">
            {profilePhoto && (
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Image
                  src={profilePhoto.imageUrl}
                  alt={profilePhoto.description}
                  data-ai-hint={profilePhoto.imageHint}
                  width={400}
                  height={400}
                  className="relative rounded-full aspect-square object-cover border-4 border-background shadow-2xl"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
