'use client';

import { useState } from 'react';
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
  bars: number[];
}

const tabs: Tab[] = [
  {
    id: 'agents',
    label: 'Agents',
    icon: Bot,
    title: 'Autonomous AI agents that work around the clock',
    description:
      'Deploy AI agents that handle complex workflows end-to-end. From customer support to data analysis, your agents learn from every interaction and improve over time.',
    features: [
      'Contextual memory across conversations',
      'Multi-step reasoning and decision making',
      'Human-in-the-loop approval workflows',
      'Automatic escalation for edge cases',
    ],
    bars: [40, 65, 50, 80, 55, 70, 90, 60, 75, 85, 45, 95],
  },
  {
    id: 'workflows',
    label: 'Workflows',
    icon: Zap,
    title: 'Visual workflow builder for any process',
    description:
      'Design powerful automation workflows with our drag-and-drop builder. Connect triggers, actions, and conditions without writing a single line of code.',
    features: [
      'Drag-and-drop visual editor',
      '200+ pre-built integrations',
      'Conditional logic and branching',
      'Scheduled and event-triggered runs',
    ],
    bars: [30, 55, 70, 45, 85, 60, 50, 75, 90, 40, 65, 80],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    title: 'Real-time analytics and business insights',
    description:
      'Monitor agent performance, workflow throughput, and business impact with live dashboards. Make data-driven decisions with customizable reports.',
    features: [
      'Live performance dashboards',
      'Custom report builder',
      'ROI tracking and attribution',
      'Bottleneck identification',
    ],
    bars: [60, 40, 85, 70, 50, 90, 55, 75, 45, 80, 65, 95],
  },
];

export function Showcase() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section id="showcase" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Showcase"
            title="See Agentix AI in action"
            description="Explore the core capabilities that make Agentix AI the most powerful automation platform for modern businesses."
          />
        </Reveal>

        {/* Tab buttons */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-xl border border-border bg-card p-1 shadow-soft">
              {tabs.map((t, i) => {
                const Icon = t.icon;
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
                    <Icon className="h-4 w-4" />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Tab content */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left: text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <h3 className="text-2xl font-bold tracking-tight font-display sm:text-3xl">{tab.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{tab.description}</p>
              <ul className="mt-6 space-y-3">
                {tab.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed">{feature}</span>
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
              className="rounded-2xl border border-border bg-card p-6 shadow-premium"
            >
              {/* Mockup header */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                    <tab.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold">{tab.label} Dashboard</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400" />
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                </div>
              </div>

              {/* Mockup stats */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { label: 'Total', value: '12.4K' },
                  { label: 'Active', value: '8.2K' },
                  { label: 'Success', value: '99.2%' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-border bg-background p-3">
                    <div className="text-lg font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Animated bar chart */}
              <div className="mt-4 rounded-lg border border-border bg-background p-4">
                <div className="text-xs font-medium text-muted-foreground">Performance Over Time</div>
                <div className="mt-3 flex h-40 items-end gap-2">
                  {tab.bars.map((height, i) => (
                    <motion.div
                      key={`${tab.id}-${i}`}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.5, ease: EASE, delay: i * 0.04 }}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
