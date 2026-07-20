import type { LucideIcon } from 'lucide-react';
import { Workflow, BarChart3, Activity } from 'lucide-react';

export interface ShowcaseTab {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const showcaseTabs: ShowcaseTab[] = [
  { id: 'workflow', label: 'Workflow Builder', icon: Workflow },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'activity', label: 'Activity Feed', icon: Activity },
];
