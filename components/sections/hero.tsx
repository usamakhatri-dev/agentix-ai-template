'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Play,
  TrendingUp,
  Zap,
  Activity,
  Users,
  Bot,
  Workflow,
  BarChart3,
  Bell,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { trustedBy } from '@/data/hero';

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { label: 'Active Agents', value: '1,284', icon: Bot, color: 'text-primary' },
  { label: 'Workflows', value: '3,942', icon: Workflow, color: 'text-secondary' },
  { label: 'Tasks Today', value: '48.2K', icon: Zap, color: 'text-accent' },
  { label: 'Uptime', value: '99.9%', icon: Activity, color: 'text-primary' },
];

const sidebarItems = [
  { label: 'Dashboard', icon: BarChart3, active: true },
  { label: 'Agents', icon: Bot, active: false },
  { label: 'Workflows', icon: Workflow, active: false },
  { label: 'Analytics', icon: TrendingUp, active: false },
];

const activityFeed = [
  { text: 'Agent resolved 12 support tickets', time: '2m ago' },
  { text: 'Workflow completed: Onboarding v2', time: '8m ago' },
  { text: 'New agent deployed: Sales Assistant', time: '15m ago' },
  { text: 'Workflow triggered by Slack event', time: '32m ago' },
];

const notifications = [
  { title: 'New agent online', description: 'Sales Assistant is now active', icon: Bot },
  { title: 'Workflow completed', description: 'Onboarding v2 finished in 1.2s', icon: Workflow },
  { title: 'Performance alert', description: 'Response time improved by 12%', icon: TrendingUp },
];

function NotificationCard() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const item = notifications[index];
  const Icon = item.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex items-center gap-3 rounded-xl border border-border bg-card/80 p-3 shadow-soft backdrop-blur"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-foreground">{item.title}</p>
          <p className="truncate text-xs text-muted-foreground">{item.description}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -top-10 right-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
        />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Announcement pill */}
          <motion.a
            href="#features"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
            Introducing Agentix AI 2.0 with autonomous agents
            <ArrowRight className="h-3 w-3" />
          </motion.a>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground bg-clip-text text-transparent">
              The Future of{' '}
            </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Automation
            </span>
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground bg-clip-text text-transparent">
              {' '}for Modern Businesses
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg"
          >
            Deploy autonomous AI agents that handle complex workflows end-to-end.
            Connect your tools, design visual workflows, and scale operations
            without adding headcount.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button variant="brand" size="lg" className="w-full sm:w-auto">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="rounded-2xl border border-border bg-card/80 p-2 shadow-premium backdrop-blur">
            <div className="rounded-xl border border-border bg-background overflow-hidden">
              <div className="flex">
                {/* Sidebar */}
                <div className="hidden w-48 shrink-0 border-r border-border bg-muted/20 p-3 sm:block">
                  <div className="flex items-center gap-2 px-2 py-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary to-secondary">
                      <Sparkles className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-sm font-semibold">Agentix</span>
                  </div>
                  <nav className="mt-4 flex flex-col gap-1">
                    {sidebarItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium ${
                            item.active
                              ? 'bg-primary/10 text-primary'
                              : 'text-muted-foreground'
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {item.label}
                        </div>
                      );
                    })}
                  </nav>
                </div>

                {/* Main content */}
                <div className="flex-1 p-4 sm:p-6">
                  {/* Stat cards */}
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {stats.map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={stat.label}
                          className="rounded-xl border border-border bg-card p-3"
                        >
                          <div className="flex items-center justify-between">
                            <Icon className={`h-4 w-4 ${stat.color}`} />
                            <span className="text-[10px] text-muted-foreground">+12%</span>
                          </div>
                          <p className="mt-2 text-lg font-semibold">{stat.value}</p>
                          <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bar chart + activity feed */}
                  <div className="mt-4 grid gap-3 lg:grid-cols-3">
                    <div className="rounded-xl border border-border bg-card p-4 lg:col-span-2">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-muted-foreground">
                          Workflow Throughput
                        </p>
                        <span className="text-[10px] text-primary">Live</span>
                      </div>
                      <div className="mt-4 flex items-end gap-1 h-32">
                        {Array.from({ length: 30 }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 40}%` }}
                            transition={{ duration: 0.6, ease: EASE, delay: 0.4 + i * 0.02 }}
                            className={`flex-1 rounded-sm ${
                              i % 7 === 0 ? 'bg-primary' : 'bg-primary/30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-4">
                      <p className="text-xs font-semibold text-muted-foreground">
                        Activity Feed
                      </p>
                      <div className="mt-3 flex flex-col gap-2.5">
                        {activityFeed.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <div className="min-w-0">
                              <p className="text-[11px] text-foreground">{item.text}</p>
                              <p className="text-[10px] text-muted-foreground">{item.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
            className="absolute -left-4 top-1/4 hidden lg:block"
          >
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card/90 p-3 shadow-premium backdrop-blur">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold">Revenue Lift</p>
                <p className="text-sm font-bold text-primary">+34.8%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
            className="absolute -right-4 top-1/3 hidden lg:block"
          >
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card/90 p-3 shadow-premium backdrop-blur">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/10">
                <Zap className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-semibold">Agent Response</p>
                <p className="text-sm font-bold text-secondary">240ms</p>
              </div>
            </div>
          </motion.div>

          {/* Rotating notification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
            className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 lg:block w-64"
          >
            <NotificationCard />
          </motion.div>
        </motion.div>

        {/* Trusted by */}
        <div className="mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Trusted by fast-growing teams
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="font-display text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
