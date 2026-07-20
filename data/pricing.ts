import type { LucideIcon } from 'lucide-react';
import {
  Bot,
  FolderKanban,
  Users,
  Code2,
  BarChart3,
  LifeBuoy,
  Plug,
  Lock,
  Headphones,
  KeyRound,
  FileCheck,
  Cpu,
} from 'lucide-react';

export type FeatureKey =
  | 'aiAutomation'
  | 'unlimitedProjects'
  | 'teamCollab'
  | 'apiAccess'
  | 'analytics'
  | 'prioritySupport'
  | 'customIntegrations'
  | 'advancedSecurity'
  | 'dedicatedCSM'
  | 'sso'
  | 'sla'
  | 'customModels';

export interface PlanFeature {
  key: FeatureKey;
  label: string;
}

export interface Plan {
  name: string;
  description: string;
  monthly: number | null;
  yearly: number | null;
  cta: string;
  ctaHref: string;
  highlighted: boolean;
  features: PlanFeature[];
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    description: 'For small teams getting started with automation.',
    monthly: 29,
    yearly: 23,
    cta: 'Get Started',
    ctaHref: '#cta',
    highlighted: false,
    features: [
      { key: 'aiAutomation', label: 'AI Automation' },
      { key: 'unlimitedProjects', label: 'Unlimited Projects' },
      { key: 'teamCollab', label: 'Team Collaboration' },
      { key: 'apiAccess', label: 'API Access' },
      { key: 'analytics', label: 'Analytics Dashboard' },
    ],
  },
  {
    name: 'Professional',
    description: 'For growing teams that need power and scale.',
    monthly: 89,
    yearly: 71,
    cta: 'Start Free Trial',
    ctaHref: '#cta',
    highlighted: true,
    features: [
      { key: 'aiAutomation', label: 'AI Automation' },
      { key: 'unlimitedProjects', label: 'Unlimited Projects' },
      { key: 'teamCollab', label: 'Team Collaboration' },
      { key: 'apiAccess', label: 'API Access' },
      { key: 'analytics', label: 'Advanced Analytics Dashboard' },
      { key: 'prioritySupport', label: 'Priority Support' },
      { key: 'customIntegrations', label: 'Custom Integrations' },
      { key: 'advancedSecurity', label: 'Advanced Security' },
    ],
  },
  {
    name: 'Enterprise',
    description: 'For organizations with advanced requirements.',
    monthly: null,
    yearly: null,
    cta: 'Contact Sales',
    ctaHref: '#enterprise',
    highlighted: false,
    features: [
      { key: 'aiAutomation', label: 'AI Automation' },
      { key: 'unlimitedProjects', label: 'Unlimited Projects' },
      { key: 'teamCollab', label: 'Team Collaboration' },
      { key: 'apiAccess', label: 'API Access' },
      { key: 'analytics', label: 'Advanced Analytics Dashboard' },
      { key: 'prioritySupport', label: 'Priority Support' },
      { key: 'customIntegrations', label: 'Custom Integrations' },
      { key: 'advancedSecurity', label: 'Advanced Security' },
      { key: 'dedicatedCSM', label: 'Dedicated Success Manager' },
      { key: 'sso', label: 'SSO & SAML' },
      { key: 'sla', label: 'Custom SLA' },
      { key: 'customModels', label: 'Custom AI Models' },
    ],
  },
];

export const featureIcons: Record<FeatureKey, LucideIcon> = {
  aiAutomation: Bot,
  unlimitedProjects: FolderKanban,
  teamCollab: Users,
  apiAccess: Code2,
  analytics: BarChart3,
  prioritySupport: LifeBuoy,
  customIntegrations: Plug,
  advancedSecurity: Lock,
  dedicatedCSM: Headphones,
  sso: KeyRound,
  sla: FileCheck,
  customModels: Cpu,
};

export const planAvailability: Record<FeatureKey, [boolean, boolean, boolean]> = {
  aiAutomation: [true, true, true],
  unlimitedProjects: [true, true, true],
  teamCollab: [true, true, true],
  apiAccess: [false, true, true],
  analytics: [true, true, true],
  prioritySupport: [false, true, true],
  customIntegrations: [false, true, true],
  advancedSecurity: [false, true, true],
  dedicatedCSM: [false, false, true],
  sso: [false, false, true],
  sla: [false, false, true],
  customModels: [false, false, true],
};

export const comparisonRows: PlanFeature[] = [
  { key: 'aiAutomation', label: 'AI Automation' },
  { key: 'unlimitedProjects', label: 'Unlimited Projects' },
  { key: 'teamCollab', label: 'Team Collaboration' },
  { key: 'apiAccess', label: 'API Access' },
  { key: 'analytics', label: 'Analytics Dashboard' },
  { key: 'prioritySupport', label: 'Priority Support' },
  { key: 'customIntegrations', label: 'Custom Integrations' },
  { key: 'advancedSecurity', label: 'Advanced Security' },
  { key: 'dedicatedCSM', label: 'Dedicated Success Manager' },
  { key: 'sso', label: 'SSO & SAML' },
  { key: 'sla', label: 'Custom SLA' },
  { key: 'customModels', label: 'Custom AI Models' },
];
