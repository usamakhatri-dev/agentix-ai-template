'use client';

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
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/container';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { SectionHeading } from '@/components/section-heading';

const features = [
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
      'Connect HubSpot, Salesforce, Pipedrive and 200+ tools. Sync data both ways without a single line of code.',
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

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to automate with AI"
          description="A complete platform that replaces a dozen disconnected tools — from agents and chatbots to analytics and integrations."
        />
        <Stagger className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card-hover">
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${feature.gradient} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative flex flex-1 flex-col">
                  <div className="relative">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-glow ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
