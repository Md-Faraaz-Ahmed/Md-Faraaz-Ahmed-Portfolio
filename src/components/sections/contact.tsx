'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import SectionHeading from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Mail, Send, Loader2 } from 'lucide-react';
import KaggleIcon from '@/components/icons/kaggle-icon';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';

const socialLinks = [
  { name: 'Email', icon: <Mail className="h-6 w-6" />, href: 'mailto:m.faraaz.ahmed01@gmail.com' },
  { name: 'LinkedIn', icon: <Linkedin className="h-6 w-6" />, href: 'https://www.linkedin.com/in/mfaraaz' },
  { name: 'GitHub', icon: <Github className="h-6 w-6" />, href: 'https://github.com/m-faraaz-ahmed' },
  { name: 'Kaggle', icon: <KaggleIcon className="h-6 w-6" />, href: 'https://www.kaggle.com/mohammedfaraazahmed' },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

export default function Contact() {
  const initialState = { message: '', errors: {}, type: '' };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.type === 'success') {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.type === 'error') {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);
  

  return (
    <section id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading>Get In Touch</SectionHeading>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Let's build something great.</h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex space-x-4 pt-4">
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
            </div>
            <form ref={formRef} action={dispatch} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required />
                {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                 {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message here..." rows={4} required />
                 {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
