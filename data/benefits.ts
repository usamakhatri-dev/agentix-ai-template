import type { LucideIcon } from 'lucide-react';
import { Clock, TrendingDown, Sparkles, Gauge } from 'lucide-react';

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
  label: string;
}

export const benefits: Benefit[] = [
  {
    icon: Clock,
    title: 'Save 40+ hours per week',
    description: 'Automate repetitive tasks so your team focuses on work that actually moves the needle.',
    metric: '40h+',
    label: 'saved weekly',
  },
  {
    icon: TrendingDown,
    title: 'Cut operational costs by 60%',
    description: 'Replace a stack of disconnected tools with one platform — and watch the bill shrink.',
    metric: '60%',
    label: 'cost reduction',
  },
  {
    icon: Sparkles,
    title: 'Boost productivity 3.5x',
    description: 'AI agents handle the busywork in seconds, letting your team ship outcomes faster.',
    metric: '3.5x',
    label: 'productivity gain',
  },
  {
    icon: Gauge,
    title: 'Improve ROI in 30 days',
    description: 'Most customers see measurable returns within the first month of going live.',
    metric: '30d',
    label: 'to ROI',
  },
];

export interface ImpactMetric {
  label: string;
  value: string;
  color: string;
}

export const impactMetrics: ImpactMetric[] = [
  { label: 'Hours Saved', value: '4,820', color: 'text-primary' },
  { label: 'Cost Reduced', value: '$214k', color: 'text-secondary' },
  { label: 'Tasks Automated', value: '128k', color: 'text-accent' },
  { label: 'Revenue Lift', value: '+34%', color: 'text-emerald-500' },
];
