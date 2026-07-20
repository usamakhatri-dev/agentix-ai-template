import type { LucideIcon } from 'lucide-react';
import { Clock, DollarSign, Users, TrendingUp } from 'lucide-react';

export interface CaseStudyResult {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

export const caseStudyResults: CaseStudyResult[] = [
  { icon: Clock, value: '4,820', label: 'hours saved per quarter', color: 'text-primary' },
  { icon: DollarSign, value: '$214k', label: 'in operational savings', color: 'text-emerald-500' },
  { icon: Users, value: '3.2x', label: 'faster customer response', color: 'text-secondary' },
  { icon: TrendingUp, value: '+34%', label: 'revenue lift in 90 days', color: 'text-accent' },
];
