import type { LucideIcon } from 'lucide-react';
import {
  Bot,
  Workflow,
  MessageSquare,
  BarChart3,
  Plug,
  Code2,
  BookOpen,
  CalendarClock,
  FileText,
} from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export const features: Feature[] = [
  {
    icon: Bot,
    title: 'AI Agents',
    description:
      'Deploy autonomous agents that handle tasks end-to-end with memory, reasoning, and tool use — no code required.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Build multi-step automations across your stack with a visual builder. Trigger, branch, and act in seconds.',
    gradient: 'from-violet-500 to-violet-600',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description:
      'Engage customers 24/7 with context-aware chatbots trained on your knowledge base and brand voice.',
    gradient: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description:
      'Real-time dashboards surface what matters — performance, cost, and outcomes across every workflow.',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Plug,
    title: 'CRM Integration',
    description:
      'Connect HubSpot, Salesforce, Pipedrive and 200+ tools. Sync data both way without a single line of code.',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    icon: Code2,
    title: 'API Access',
    description:
      'A developer-first API and webhooks let you embed Agentix intelligence into any product or internal tool.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description:
      'Give agents the context they need. Upload docs, connect sources, and let AI ground every answer in truth.',
    gradient: 'from-rose-500 to-rose-600',
  },
  {
    icon: CalendarClock,
    title: 'Scheduling',
    description:
      'Automate meetings, follow-ups, and reminders. Agents book, reschedule, and confirm without you lifting a finger.',
    gradient: 'from-amber-500 to-amber-600',
  },
  {
    icon: FileText,
    title: 'Reports',
    description:
      'Generate branded, scheduled reports and share them with stakeholders. Always accurate, always on time.',
    gradient: 'from-teal-500 to-teal-600',
  },
];
