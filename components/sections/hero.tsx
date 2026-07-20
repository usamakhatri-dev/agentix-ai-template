'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Play,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Bot,
  CheckCircle2,
  Activity,
  Bell,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { trustedBy, heroThroughputBars } from '@/data/hero';

const notifications = [
  { icon: Bot, text: 'Agent resolved ticket #4821', color: 'text-emerald-500' },
  { icon: Zap, text: 'Workflow "Onboarding" completed', color: 'text-violet-500' },
  { icon: Star, text: 'New 5-star review received', color: 'text-amber-500' },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-b opacity-60" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 blur-[120px]" />
        <div className="absolute top-32 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px] animate-pulse-glow" />
        <div className="absolute top-48 -right-20 h-72 w-72 rounded-full bg-secondary/20 blur-[100px] animate-pulse-glow" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl shadow-soft"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          New: Agentix AI v3 — autonomous agents with memory
          <ArrowRight className="h-3.5 w-3.5" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          className="mt-6 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
        >
          The Future of <span className="text-gradient">AI Automation</span> for Modern Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl leading-relaxed text-balance"
        >
          Deploy intelligent AI agents that automate workflows, engage customers, and surface
          insights — all in one beautifully simple platform built for teams that move fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button variant="brand" size="lg" className="group" asChild>
            <Link href="#cta">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="group" asChild>
            <Link href="#demo">
              <Play className="mr-2 h-4 w-4 fill-current" />
              Watch Demo
            </Link>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-5 text-xs text-muted-foreground"
        >
          No credit card required · 14-day free trial · Cancel anytime
        </motion.p>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="relative mt-16 w-full max-w-6xl"
        >
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-premium backdrop-blur-xl">
            {/* Window bar */}
            <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <div className="ml-3 flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                app.agentix.ai/dashboard
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </div>
            </div>
            <div className="grid grid-cols-12 gap-0">
              {/* Sidebar */}
              <div className="hidden md:flex col-span-2 flex-col gap-1 border-r border-border/60 bg-muted/20 p-3">
                {[
                  { icon: Activity, label: 'Dashboard', active: true },
                  { icon: Bot, label: 'Agents' },
                  { icon: Zap, label: 'Workflows' },
                  { icon: Users, label: 'Customers' },
                  { icon: TrendingUp, label: 'Analytics' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-xs font-medium ${
                      item.active
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    {item.label}
                  </div>
                ))}
              </div>
              {/* Main content */}
              <div className="col-span-12 md:col-span-10 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Automation Overview</div>
                    <div className="text-xs text-muted-foreground">Real-time activity</div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Stat cards */}
                <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { label: 'Active Agents', value: '128', delta: '+12%', icon: Bot, color: 'text-primary' },
                    { label: 'Tasks Today', value: '4,892', delta: '+24%', icon: Zap, color: 'text-secondary' },
                    { label: 'Conversations', value: '12.4k', delta: '+8%', icon: Users, color: 'text-accent' },
                    { label: 'Success Rate', value: '99.2%', delta: '+0.4%', icon: CheckCircle2, color: 'text-emerald-500' },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                      className="rounded-xl border border-border/60 bg-background/60 p-3 shadow-soft"
                    >
                      <div className="flex items-center justify-between">
                        <s.icon className={`h-4 w-4 ${s.color}`} />
                        <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">{s.delta}</span>
                      </div>
                      <div className="mt-2 text-xl font-semibold tracking-tight">{s.value}</div>
                      <div className="text-[11px] text-muted-foreground">{s.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart + feed */}
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-3">
                  <div className="lg:col-span-2 rounded-xl border border-border/60 bg-background/60 p-4 shadow-soft">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold">Workflow Throughput</div>
                      <div className="text-[10px] text-muted-foreground">Last 30 days</div>
                    </div>
                    <div className="mt-4 flex items-end gap-1.5 h-28">
                      {[40, 55, 48, 62, 58, 72, 65, 80, 74, 88, 82, 95, 90, 100, 92, 78, 85, 70, 82, 68, 90, 76, 88, 72, 94, 80, 96, 84, 98, 90].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.6, delay: 0.6 + i * 0.02, ease: 'easeOut' }}
                          className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-secondary/80"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/60 p-4 shadow-soft">
                    <div className="text-xs font-semibold">Activity Feed</div>
                    <div className="mt-3 space-y-3">
                      {[
                        { icon: Bot, text: 'Agent resolved ticket #4821', time: '2m' },
                        { icon: Zap, text: 'Workflow "Onboarding" ran', time: '6m' },
                        { icon: Users, text: 'New customer signup', time: '11m' },
                        { icon: CheckCircle2, text: 'Report exported to CRM', time: '18m' },
                      ].map((a, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <a.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <div className="flex-1">
                            <div className="text-[11px] leading-tight">{a.text}</div>
                            <div className="text-[10px] text-muted-foreground">{a.time} ago</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute -left-4 top-24 hidden md:block animate-float"
          >
            <div className="glass-card rounded-xl p-3.5 w-44 shadow-float">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-semibold">Revenue Lift</div>
                  <div className="text-[10px] text-muted-foreground">vs last month</div>
                </div>
              </div>
              <div className="mt-2 text-2xl font-semibold text-emerald-600 dark:text-emerald-400">+34.8%</div>
              <div className="mt-1.5 h-1.5 w-full rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '70%' }}
                  transition={{ duration: 1, delay: 1 }}
                  className="h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="absolute -right-4 top-48 hidden md:block animate-float-slow"
          >
            <div className="glass-card rounded-xl p-3.5 w-48 shadow-float">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10">
                  <Bot className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <div className="text-xs font-semibold">Agent Response</div>
                  <div className="text-[10px] text-muted-foreground">avg. latency</div>
                </div>
              </div>
              <div className="mt-2 text-2xl font-semibold">240ms</div>
              <div className="mt-1 h-1.5 w-full rounded-full bg-muted">
                <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-primary to-secondary" />
              </div>
            </div>
          </motion.div>

          {/* Animated notification card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="absolute -right-2 bottom-8 hidden lg:block animate-float"
          >
            <NotificationCard />
          </motion.div>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 w-full"
        >
          <p className="text-center text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Trusted by fast-growing teams worldwide
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {trustedBy.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="font-display text-lg font-semibold tracking-tight text-muted-foreground transition-colors hover:text-foreground"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function NotificationCard() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % notifications.length), 3000);
    return () => clearInterval(id);
  }, []);
  const n = notifications[index];
  return (
    <div className="glass-card rounded-xl p-3.5 w-56 shadow-float">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <Bell className="h-4 w-4 text-primary" />
        </div>
        <div className="text-xs font-semibold">Live Notification</div>
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
      </div>
      <div className="mt-3 h-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <n.icon className={`h-3.5 w-3.5 ${n.color}`} />
            <span className="text-[11px] leading-tight">{n.text}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
