export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
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

import type { LucideIcon } from 'lucide-react';
import { Twitter, Linkedin, Github, Youtube } from 'lucide-react';

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const socials: SocialLink[] = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/agentixai' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/agentixai' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/agentixai' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@agentixai' },
];
