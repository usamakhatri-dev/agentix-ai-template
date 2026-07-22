'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Zap, BarChart3, CheckCircle2, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const tabs: Tab[] = [
  {
    id: 'agents',
    label: 'Agents',
    icon: Bot,
    title: 'Autonomous AI agents that work around the clock',
    description: 'Deploy intelligent agents that handle customer support, lead qualification, data entry, and more. Each agent learns from interactions and improves over time.',
    features: [
      'Contextual memory across conversations',
      'Multi-language support out of the box',
      'Human handoff when confidence is low',
      'Custom personality and brand voice',
    ],
  },
  {
    id: 'workflows',
    label: 'Workflows',
    icon: Zap,
    title: 'Visual workflow builder for any process',
    description: 'Design complex automations with a drag-and-drop editor. Connect triggers, conditions, and actions across 200+ tools without writing code.',
    features: [
      'Drag-and-drop visual editor',
      'Conditional logic and branching',
      'Schedule-based triggers',
      'Real-time error handling and retries',
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    title: 'Real-time insights into every automation',
    description: 'Monitor agent performance, workflow throughput, and business impact with live dashboards. Export reports and set custom alerts.',
    features: [
      'Live performance dashboards',
      'Custom report builder',
      'ROI tracking per workflow',
      'Anomaly detection and alerts',
    ],
  },
];

export function Showcase() {
  const [activeTab, setActiveTab] = React.useState(0);
  const tab = tabs[activeTab];
  const Icon = tab.icon;

  return (
    <section id="showcase" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Showcase"
            title="See Agentix AI in action"
            description="Explore the three pillars of the platform: autonomous agents, visual workflows, and real-time analytics."
          />
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-xl border border-border bg-card p-1">
              {tabs.map((t, i) => {
                const TabIcon = t.icon;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(i)}
                    className={cn(
                      'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all',
                      activeTab === i
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <TabIcon className="h-4 w-4" />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Left: text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-glow">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                {tab.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {tab.description}
              </p>
              <ul className="mt-6 space-y-3">
                {tab.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Right: animated mockup */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="rounded-2xl border border-border bg-card p-4 shadow-premium"
            >
              <div className="rounded-xl border border-border bg-background p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-semibold">{tab.label} Overview</span>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                    Live
                  </span>
                </div>

                {/* Stat row */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Active', value: '1,284' },
                    { label: 'Today', value: '48.2K' },
                    { label: 'Success', value: '99.9%' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg border border-border bg-card p-3">
                      <p className="text-lg font-semibold">{s.value}</p>
                      <p className="text-[10px] text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Bar chart */}
                <div className="mt-4 rounded-lg border border-border bg-card p-4">
                  <p className="text-xs font-semibold text-muted-foreground">Throughput</p>
                  <div className="mt-3 flex items-end gap-1 h-28">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <motion.div
                        key={`${tab.id}-${i}`}
                        initial={{ height: 0 }}
                        animate={{ height: `${20 + Math.sin(i * 0.6) * 30 + Math.random() * 40}%` }}
                        transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.02 }}
                        className={cn(
                          'flex-1 rounded-sm',
                          i % 5 === 0 ? 'bg-primary' : 'bg-primary/30',
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
