import type { LucideIcon } from 'lucide-react';
import { Plug, Zap, TrendingUp } from 'lucide-react';

export interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}

export const steps: Step[] = [
  {
    number: '01',
    icon: Plug,
    title: 'Connect',
    description:
      'Link your tools, data sources, and knowledge base in minutes. Agentix integrates with 200+ apps out of the box — no code, no headaches.',
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Automate',
    description:
      'Design workflows visually or let AI build them for you. Deploy agents that reason, act, and learn across every channel your team uses.',
    accent: 'from-violet-500 to-blue-500',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Scale',
    description:
      'Monitor performance, optimize costs, and expand automations across departments. Agentix grows with you — from one workflow to thousands.',
    accent: 'from-cyan-500 to-emerald-500',
  },
];
