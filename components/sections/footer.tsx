'use client';

import * as React from 'react';
import Link from 'next/link';
import { Sparkles, Twitter, Linkedin, Github, Youtube, ArrowRight, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { Container } from '@/components/container';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#features' },
      { label: 'Changelog', href: '#' },
      { label: 'API Docs', href: '/docs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Customers', href: '#testimonials' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#resources' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Guides', href: '#resources' },
      { label: 'Tutorials', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'Status', href: '/status' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Security', href: '/security' },
      { label: 'DPA', href: '/dpa' },
      { label: 'Support', href: '/support' },
    ],
  },
];

const socials = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/agentixai' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/agentixai' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/agentixai' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@agentixai' },
];

type Status = 'idle' | 'success' | 'error';

export function Footer() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<Status>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <footer id="contact" className="relative border-t border-border/60 bg-card/30">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand + newsletter */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="#" className="flex items-center gap-2.5" aria-label="Agentix AI home">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-glow">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Agentix<span className="text-primary"> AI</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The future of AI automation for modern businesses. Build, deploy, and scale intelligent agents — all in one platform.
            </p>
            <form className="mt-6 max-w-sm" onSubmit={handleSubmit} noValidate>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Mail aria-hidden className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status !== 'idle') setStatus('idle');
                    }}
                    placeholder="Enter your email"
                    aria-label="Email address"
                    aria-invalid={status === 'error'}
                    aria-describedby="newsletter-status"
                    className="h-10 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="flex h-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-secondary px-3.5 text-white shadow-glow transition-all hover:shadow-premium hover:brightness-110 active:scale-95"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div id="newsletter-status" aria-live="polite" className="mt-2 min-h-[1.25rem]">
                {status === 'success' && (
                  <p className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Subscribed! Check your inbox to confirm.
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-1.5 text-xs font-medium text-destructive">
                    <AlertCircle className="h-3.5 w-3.5" />
                    Please enter a valid email address.
                  </p>
                )}
                {status === 'idle' && (
                  <p className="text-xs text-muted-foreground">Get product updates and AI tips. No spam.</p>
                )}
              </div>
            </form>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Agentix AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-soft"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
