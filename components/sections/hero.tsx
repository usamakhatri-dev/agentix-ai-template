'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Play,
  TrendingUp,
  Zap,
  Bot,
  BarChart3,
  Settings,
  Users,
  Bell,
  CheckCircle2,
  Activity,
} from 'lucide-react';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { trustedBy } from '@/data/hero';

const EASE = [0.22, 1, 0.36, 1] as const;

const sidebarItems = [
  { icon: Bot, label: 'Agents', active: true },
  { icon: Zap, label: 'Workflows' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Users, label: 'Team' },
  { icon: Settings, label: 'Settings' },
];

const statCards = [
  { label: 'Active Agents', value: '24', change: '+12%', icon: Bot },
  { label: 'Tasks Today', value: '1,847', change: '+34%', icon: Activity },
  { label: 'Success Rate', value: '99.2%', change: '+0.8%', icon: CheckCircle2 },
  { label: 'Avg Response', value: '240ms', change: '-15%', icon: Zap },
];

const barHeights = Array.from({ length: 30 }, (_, i) => {
  const base = 30 + Math.sin(i * 0.5) * 20 + Math.cos(i * 0.3) * 15;
  const noise = (i * 7) % 13;
  return Math.min(95, Math.max(20, base + noise));
});

const activityFeed = [
  { text: 'Agent resolved support ticket #4821', time: '2m ago' },
  { text: 'Workflow processed 340 records', time: '5m ago' },
  { text: 'New agent deployed to production', time: '12m ago' },
  { text: 'Daily analytics report generated', time: '1h ago' },
];

const notifications = [
  { icon: TrendingUp, title: 'Revenue Lift', value: '+34.8%', color: 'text-green-500' },
  { icon: Zap, title: 'Agent Response', value: '240ms', color: 'text-primary' },
  { icon: CheckCircle2, title: 'Task Completed', value: '1,847', color: 'text-blue-500' },
  { icon: Users, title: 'New Signups', value: '+128', color: 'text-purple-500' },
];

function NotificationCard({ index }: { index: number }) {
  const notif = notifications[index % notifications.length];
  const Icon = notif.icon;
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="flex items-center gap-3 rounded-xl border border-border bg-card/90 p-3 shadow-float backdrop-blur-sm"
    >
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-muted ${notif.color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-medium text-muted-foreground">{notif.title}</div>
        <div className="text-sm font-bold">{notif.value}</div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const [notifIndex, setNotifIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute -top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute top-20 right-1/4 -z-10 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <Container>
        {/* Announcement pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex justify-center"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm font-medium shadow-soft backdrop-blur-sm transition-all hover:border-primary/30"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white">
              <Sparkles className="h-3 w-3" />
            </span>
            <span>Introducing Agentix AI 2.0</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="mx-auto mt-8 max-w-4xl text-center text-4xl font-bold tracking-tight text-balance font-display sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
            The Future of{' '}
          </span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI Automation
          </span>
          <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
            {' '}for Modern Businesses
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Deploy autonomous AI agents that handle complex workflows end-to-end. Connect your tools, design visual workflows, and scale automation across your entire business.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button variant="brand" size="lg">
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            <Play className="h-4 w-4" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-premium">
            {/* Window bar */}
            <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="ml-4 flex-1">
                <div className="mx-auto h-6 max-w-xs rounded-md bg-background/60" />
              </div>
            </div>

            {/* Dashboard body */}
            <div className="flex">
              {/* Sidebar */}
              <div className="hidden w-48 flex-col border-r border-border bg-muted/20 p-3 sm:flex">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
                        item.active
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </div>
                  );
                })}
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 sm:p-6">
                {/* Stat cards */}
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {statCards.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-border bg-background p-3"
                      >
                        <div className="flex items-center justify-between">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs font-medium text-green-500">{stat.change}</span>
                        </div>
                        <div className="mt-2 text-xl font-bold">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Chart + Activity */}
                <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
                  {/* Bar chart */}
                  <div className="rounded-xl border border-border bg-background p-4 lg:col-span-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold">Workflow Throughput</div>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="mt-4 flex h-32 items-end gap-1">
                      {barHeights.map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.6 + i * 0.02 }}
                          className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Activity feed */}
                  <div className="rounded-xl border border-border bg-background p-4">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <div className="text-sm font-semibold">Activity</div>
                    </div>
                    <div className="mt-3 space-y-3">
                      {activityFeed.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <div>
                            <div className="text-xs leading-tight">{item.text}</div>
                            <div className="text-xs text-muted-foreground">{item.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
            className="absolute -left-4 top-1/4 hidden animate-float sm:block lg:-left-12"
          >
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card/90 p-3 shadow-float backdrop-blur-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground">Revenue Lift</div>
                <div className="text-sm font-bold text-green-500">+34.8%</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.0 }}
            className="absolute -right-4 bottom-1/4 hidden animate-float-slow sm:block lg:-right-12"
          >
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card/90 p-3 shadow-float backdrop-blur-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground">Agent Response</div>
                <div className="text-sm font-bold">240ms</div>
              </div>
            </div>
          </motion.div>

          {/* Rotating notification card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.2 }}
            className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
          >
            <motion.div
              key={notifIndex}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <NotificationCard index={notifIndex} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Trusted by */}
        <div className="mt-24">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Trusted by fast-growing teams worldwide
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold tracking-tight text-muted-foreground/50 transition-colors hover:text-foreground"
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
