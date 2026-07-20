import type { LucideIcon } from 'lucide-react';
import {
  HeartPulse,
  Landmark,
  GraduationCap,
  Megaphone,
  ShoppingBag,
  Users,
  Scale,
  Truck,
} from 'lucide-react';

export interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
  color: string;
}

export const industries: Industry[] = [
  { icon: HeartPulse, name: 'Healthcare', description: 'Automate patient intake, scheduling, and follow-ups while staying HIPAA-compliant.', color: 'from-rose-500 to-rose-600' },
  { icon: Landmark, name: 'Finance', description: 'Streamline compliance, reporting, and customer onboarding with secure AI agents.', color: 'from-blue-500 to-blue-600' },
  { icon: GraduationCap, name: 'Education', description: 'Personalize learning, automate admin, and support students around the clock.', color: 'from-amber-500 to-amber-600' },
  { icon: Megaphone, name: 'Marketing', description: 'Generate, schedule, and optimize campaigns across every channel automatically.', color: 'from-violet-500 to-violet-600' },
  { icon: ShoppingBag, name: 'Retail', description: 'Power product recommendations, inventory alerts, and 24/7 shopper support.', color: 'from-cyan-500 to-cyan-600' },
  { icon: Users, name: 'HR', description: 'Automate recruiting, onboarding, and employee FAQs so your team can focus on people.', color: 'from-emerald-500 to-emerald-600' },
  { icon: Scale, name: 'Legal', description: 'Draft, review, and summarize documents with AI grounded in your firm knowledge.', color: 'from-slate-500 to-slate-600' },
  { icon: Truck, name: 'Logistics', description: 'Optimize routes, track shipments, and automate customer updates in real time.', color: 'from-orange-500 to-orange-600' },
];
