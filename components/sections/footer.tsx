import { Sparkles, Twitter, Linkedin, Github, Youtube } from 'lucide-react';
import { Container } from '@/components/container';

const navColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Showcase', href: '#showcase' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Guides', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'GDPR', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <Container>
        <div className="py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <a href="#" className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary shadow-glow">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="font-display text-lg font-semibold tracking-tight">
                  Agentix AI
                </span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                The platform for building and deploying autonomous AI agents
                that automate complex business workflows.
              </p>

              {/* Social links */}
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
              {navColumns.map((column) => (
                <div key={column.title}>
                  <h4 className="text-sm font-semibold text-foreground">{column.title}</h4>
                  <ul className="mt-4 space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Agentix AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs text-muted-foreground">All systems operational</span>
            </div>
            <span className="text-xs text-muted-foreground">v1.0.0</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
