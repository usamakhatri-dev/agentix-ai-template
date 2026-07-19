'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Workflow,
  BarChart3,
  Activity,
  Bot,
  Zap,
  CheckCircle2,
  GitBranch,
  Mail,
  Database,
  Filter,
  TrendingUp,
} from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'workflow', label: 'Workflow Builder', icon: Workflow },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'activity', label: 'Activity Feed', icon: Activity },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Showcase() {
  const [active, setActive] = React.useState('workflow');

  return (
    <section id="demo" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-secondary/15 blur-[120px]" />
        <div className="absolute left-0 bottom-1/4 h-80 w-80 rounded-full bg-accent/15 blur-[120px]" />
      </div>
      <Container>
        <SectionHeading
          eyebrow="Platform"
          title="One workspace for every automation"
          description="Design workflows, monitor analytics, and track activity — all in a single, beautifully crafted interface."
        />

        <Reveal className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-xl border border-border/60 bg-card/60 p-1 shadow-soft backdrop-blur-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={cn(
                  'relative inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                  active === tab.id ? 'text-white' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {active === tab.id && (
                  <motion.span
                    layoutId="showcase-tab"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-secondary shadow-glow"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <tab.icon className="relative h-4 w-4" />
                <span className="relative">{tab.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10" delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-premium backdrop-blur-xl">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-2xl" />
            <div className="border-b border-border/60 bg-muted/30 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Bot className="h-4 w-4 text-primary" />
                Agentix Workspace
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Synced just now
              </div>
            </div>
            <div className="p-5 sm:p-8 min-h-[420px]">
              <AnimatePresence mode="wait">
                {active === 'workflow' && <WorkflowView key="workflow" />}
                {active === 'analytics' && <AnalyticsView key="analytics" />}
                {active === 'activity' && <ActivityView key="activity" />}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function NodeCard({
  icon: Icon,
  label,
  sub,
  color,
}: {
  icon: React.ElementType;
  label: string;
  sub: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/70 px-3.5 py-3 shadow-soft"
    >
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${color} shadow-sm`}>
        <Icon className="h-4.5 w-4.5 text-white" />
      </div>
      <div>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-[11px] text-muted-foreground">{sub}</div>
      </div>
    </motion.div>
  );
}

function Connector() {
  return (
    <div className="flex items-center justify-center py-1">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 24 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="w-px bg-gradient-to-b from-border to-border/40"
      />
    </div>
  );
}

function WorkflowView() {
  return (
    <Panel>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="text-sm font-semibold mb-4">Customer Onboarding Flow</div>
          <div className="space-y-0">
            <NodeCard icon={Mail} label="Trigger: New Signup" sub="From your website" color="bg-blue-500" />
            <Connector />
            <NodeCard icon={Filter} label="Enrich Data" sub="Clearbit + custom fields" color="bg-violet-500" />
            <Connector />
            <NodeCard icon={GitBranch} label="Branch: Plan Type" sub="Free vs Pro vs Enterprise" color="bg-cyan-500" />
            <Connector />
            <NodeCard icon={Bot} label="AI Agent: Welcome" sub="Personalized email + chat" color="bg-emerald-500" />
            <Connector />
            <NodeCard icon={Database} label="Sync to CRM" sub="HubSpot contact created" color="bg-orange-500" />
          </div>
        </div>
        <div className="rounded-xl border border-border/60 bg-muted/30 p-5 shadow-soft">
          <div className="text-sm font-semibold">Run History</div>
          <div className="mt-4 space-y-2.5">
            {[
              { name: 'Onboarding #4821', status: 'Completed', time: '2m ago', ok: true },
              { name: 'Onboarding #4820', status: 'Completed', time: '8m ago', ok: true },
              { name: 'Onboarding #4819', status: 'Running', time: '14m ago', ok: null },
              { name: 'Onboarding #4818', status: 'Completed', time: '21m ago', ok: true },
              { name: 'Onboarding #4817', status: 'Completed', time: '33m ago', ok: true },
            ].map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center justify-between rounded-lg border border-border/40 bg-background/60 px-3 py-2.5"
              >
                <div>
                  <div className="text-xs font-medium">{r.name}</div>
                  <div className="text-[10px] text-muted-foreground">{r.time}</div>
                </div>
                <span
                  className={cn(
                    'rounded-full px-2 py-0.5 text-[10px] font-medium',
                    r.ok === true && 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
                    r.ok === null && 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                  )}
                >
                  {r.status}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-lg bg-primary/5 px-3 py-2.5">
            <span className="text-xs text-muted-foreground">Success rate (30d)</span>
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">99.2%</span>
          </div>
        </div>
      </div>
    </Panel>
  );
}

function AnalyticsView() {
  const bars = [52, 68, 60, 78, 72, 88, 80, 94, 86, 98, 90, 100];
  return (
    <Panel>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 rounded-xl border border-border/60 bg-background/60 p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Automation Performance</div>
              <div className="text-xs text-muted-foreground">Tasks completed per week</div>
            </div>
            <div className="flex gap-3 text-[10px]">
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-primary" />Agents</span>
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-secondary" />Workflows</span>
            </div>
          </div>
          <div className="mt-6 flex items-end gap-2 h-44">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-end gap-0.5 h-full">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
                  className="w-full rounded-t bg-gradient-to-t from-primary/40 to-primary"
                />
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${h * 0.55}%` }}
                  transition={{ duration: 0.7, delay: i * 0.06 + 0.1, ease: EASE }}
                  className="w-full rounded-t bg-gradient-to-t from-secondary/40 to-secondary"
                />
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
            {['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'].map((w) => <span key={w}>{w}</span>)}
          </div>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Total Tasks', value: '1.2M', delta: '+18%', icon: Zap, color: 'text-primary' },
            { label: 'Hours Saved', value: '48,200', delta: '+24%', icon: CheckCircle2, color: 'text-emerald-500' },
            { label: 'Cost Reduced', value: '$214k', delta: '+31%', icon: TrendingUp, color: 'text-secondary' },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border/60 bg-background/60 p-4 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <m.icon className={`h-4.5 w-4.5 ${m.color}`} />
                <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">{m.delta}</span>
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">{m.value}</div>
              <div className="text-xs text-muted-foreground">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function ActivityView() {
  const events = [
    { icon: Bot, text: 'Agent "Support Pro" resolved ticket #4821 in 42s', time: 'Just now', color: 'bg-emerald-500' },
    { icon: Zap, text: 'Workflow "Lead Scoring" processed 120 leads', time: '3m ago', color: 'bg-violet-500' },
    { icon: Mail, text: 'AI sent 24 personalized follow-up emails', time: '8m ago', color: 'bg-blue-500' },
    { icon: Database, text: 'Synced 1,402 records to Salesforce', time: '15m ago', color: 'bg-orange-500' },
    { icon: CheckCircle2, text: 'Weekly performance report generated', time: '27m ago', color: 'bg-cyan-500' },
    { icon: GitBranch, text: 'Workflow "Onboarding" branched for 8 Pro users', time: '41m ago', color: 'bg-blue-500' },
    { icon: Bot, text: 'Agent "Sales Assistant" booked 3 meetings', time: '1h ago', color: 'bg-emerald-500' },
  ];
  return (
    <Panel>
      <div className="mx-auto max-w-2xl">
        <div className="text-sm font-semibold mb-4">Live Activity</div>
        <div className="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/40 before:via-border before:to-transparent">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="relative flex items-start gap-3"
            >
              <span className={`absolute -left-[18px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full ring-4 ring-background ${e.color}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              </span>
              <div className="flex-1">
                <div className="text-sm leading-snug">{e.text}</div>
                <div className="text-xs text-muted-foreground">{e.time}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
