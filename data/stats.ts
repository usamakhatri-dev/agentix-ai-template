import type { LucideIcon } from 'lucide-react';
import { BadgeCheck, ShieldCheck, Lock, ServerCog } from 'lucide-react';

export interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export const stats: Stat[] = [
  { value: 50000, suffix: '+', label: 'Active Users' },
  { value: 99.9, suffix: '%', label: 'Platform Uptime', decimals: 1 },
  { value: 120, suffix: '+', label: 'Countries' },
  { value: 4.9, suffix: '/5', label: 'Average Rating', decimals: 1 },
];

export const companyLogos: string[] = [
  'Microsoft',
  'Stripe',
  'Shopify',
  'Notion',
  'Slack',
  'HubSpot',
];

export const featuredPress: string[] = [
  'TechCrunch',
  'Forbes',
  'Product Hunt',
  'Hacker News',
  'AI Weekly',
];

export interface TrustBadge {
  icon: LucideIcon;
  label: string;
}

export const trustBadges: TrustBadge[] = [
  { icon: BadgeCheck, label: 'GDPR Compliant' },
  { icon: ShieldCheck, label: 'SOC 2 Ready' },
  { icon: Lock, label: '256-bit SSL Encryption' },
  { icon: ServerCog, label: '99.9% Uptime' },
];
