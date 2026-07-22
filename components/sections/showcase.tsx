'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Brain, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const tabs = [
  {
    id: 'agents',
    label: 'AI Agents',
    icon: Bot,
    title: 'Autonomous agents that work while you sleep',
    description: 'Deploy AI agents that handle customer support, lead qualification, data entry, and more — 24/7, with human-level accuracy.',
    features: [
      'Contextual memory across conversations',
      'Multi-language support out of the box',
      'Human handoff with full context transfer',
      'Custom personality and tone matching',
    ],
  },
  {
    id: 'workflows',
    label: 'Workflows',
    icon: Zap,
    title: 'Visual workflow builder, no code required',
    description: 'Connect your tools and automate complex business processes with a simple drag-and-drop interface.',
    features: [
      '200+ pre-built integrations',
      'Conditional logic and branching',
      'Schedule-based triggers',
      'Real-time error handling and retries',
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    title: 'Real-time insights that drive decisions',
    description: 'Monitor agent performance, workflow throughput, and business impact with customizable dashboards.',
    features: [
      'Live performance metrics',
      'Custom report builder',
      'Trend analysis and forecasting',
      'Export to any BI tool via API',
    ],
  },
];

export function Showcase() {
  const [active, setActive] = React.useState<'agents' | 'workflows' | 'analytics'>('agents');
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section id="showcase" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Showcase"
          title="One platform, infinite possibilities"
          description="Explore how teams use Agentix to automate their most important workflows."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id as typeof active)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                active === t.id
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'border border-border/60 bg-card/50 text-muted-foreground hover:text-foreground hover:border-primary/40'
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        <Reveal key={tab.id} className="mt-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl text-balance">
                {tab.title}
              </h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {tab.description}
              </p>
              <ul className="mt-6 space-y-3">
                {tab.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="brand" size="lg" className="mt-8 group" asChild>
                <Link href="#cta">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div aria-hidden className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-2xl" />
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-premium backdrop-blur-xl">
                <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <div className="ml-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <tab.icon className="h-3.5 w-3.5 text-primary" />
                    app.agentix.ai/{tab.id}
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="rounded-xl border border-border/60 bg-background/60 p-4">
                        <div className="h-2 w-12 rounded-full bg-muted" />
                        <div className="mt-3 h-6 w-16 rounded-full bg-primary/20" />
                        <div className="mt-2 h-2 w-10 rounded-full bg-muted" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl border border-border/60 bg-background/60 p-4">
                    <div className="flex items-end gap-1.5 h-32">
                      {[45, 60, 52, 70, 65, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.5, delay: i * 0.05 }}
                          className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-secondary/80"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2">
                      <Brain className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">AI-powered insights</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2">
                      <Zap className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs font-medium text-primary">Real-time sync</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
