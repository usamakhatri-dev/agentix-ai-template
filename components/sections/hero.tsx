'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
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
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/container'
import { trustedBy } from '@/data/hero'

const EASE = [0.22, 1, 0.36, 1] as const

const sidebarItems = [
  { icon: Bot, label: 'Agents', active: true },
  { icon: Zap, label: 'Workflows' },
  { icon: TrendingUp, label: 'Analytics' },
  { icon: Users, label: 'Team' },
  { icon: Activity, label: 'Activity' },
]

const statCards = [
  { label: 'Revenue', value: '$48.2k', change: '+12.4%', icon: TrendingUp },
  { label: 'Active Users', value: '8,294', change: '+8.1%', icon: Users },
  { label: 'Tasks Automated', value: '1,438', change: '+24.7%', icon: Zap },
]

const barData = [42, 58, 35, 72, 64, 88, 76, 94, 82, 100, 91, 86]

const activityFeed = [
  { icon: Bot, text: 'Agent resolved ticket #2847', time: '2m ago' },
  { icon: CheckCircle2, text: 'Workflow "Onboarding" completed', time: '8m ago' },
  { icon: Zap, text: '12 tasks automated this hour', time: '15m ago' },
]

const notifications = [
  {
    icon: TrendingUp,
    title: 'Revenue Lift',
    value: '+32%',
    description: 'vs. last month',
    color: 'text-emerald-500',
  },
  {
    icon: Bot,
    title: 'Agent Response',
    value: '1.2s',
    description: 'avg. response time',
    color: 'text-primary',
  },
  {
    icon: Activity,
    title: 'Uptime',
    value: '99.98%',
    description: 'last 30 days',
    color: 'text-blue-500',
  },
]

export function Hero() {
  const [activeNotif, setActiveNotif] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveNotif((i) => (i + 1) % notifications.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl pulse-glow" />
        <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl pulse-glow" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl pulse-glow" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Announcement pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm backdrop-blur"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-3 w-3" />
            </span>
            <span className="text-muted-foreground">
              Introducing AI Agents 2.0 — now in beta
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Automate the busywork.
            </span>{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Scale what matters.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            Deploy AI agents and workflows that handle support, ops, and growth —
            so your team can focus on the work that actually moves the needle.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button size="lg" asChild>
              <Link href="/signup">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">
                <Play className="mr-2 h-4 w-4" />
                Watch demo
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          className="relative mx-auto mt-16 max-w-5xl"
          style={{ perspective: 1000 }}
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>
              <div className="mx-auto flex items-center gap-2 rounded-md bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                app.nexus.io/dashboard
              </div>
            </div>

            <div className="grid grid-cols-12">
              {/* Sidebar */}
              <div className="col-span-3 hidden border-r border-border bg-muted/20 p-3 sm:block">
                <div className="mb-4 flex items-center gap-2 px-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold">Nexus</span>
                </div>
                <nav className="flex flex-col gap-1">
                  {sidebarItems.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 rounded-md px-2 py-2 text-xs ${
                        item.active
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main */}
              <div className="col-span-12 sm:col-span-9 p-4 md:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Overview</p>
                    <p className="text-xs text-muted-foreground">
                      Last 30 days
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-md border border-border bg-background px-2 py-1 text-xs text-muted-foreground">
                    <Bell className="h-3.5 w-3.5" />
                    <span>3 new</span>
                  </div>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-3">
                  {statCards.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: EASE, delay: 0.5 + i * 0.1 }}
                      className="rounded-lg border border-border bg-background p-3"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-[10px] font-medium text-emerald-500">
                          {stat.change}
                        </span>
                      </div>
                      <p className="text-base font-semibold">{stat.value}</p>
                      <p className="text-[10px] text-muted-foreground">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Bar chart */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
                  className="mt-4 rounded-lg border border-border bg-background p-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-medium">Automation volume</p>
                    <span className="text-[10px] text-muted-foreground">
                      +24.7% MoM
                    </span>
                  </div>
                  <div className="flex h-24 items-end gap-1.5">
                    {barData.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{
                          duration: 0.6,
                          ease: EASE,
                          delay: 1 + i * 0.04,
                        }}
                        className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary"
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Activity feed */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 1.1 }}
                  className="mt-4 rounded-lg border border-border bg-background p-3"
                >
                  <p className="mb-2 text-xs font-medium">Recent activity</p>
                  <div className="flex flex-col gap-2">
                    {activityFeed.map((a, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-muted">
                          <a.icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="flex-1 truncate">{a.text}</span>
                        <span className="text-[10px]">{a.time}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 1.2 }}
            className="absolute -left-4 top-1/3 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: EASE }}
              className="rounded-xl border border-border bg-card p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] text-muted-foreground">Revenue Lift</p>
                  <p className="text-sm font-semibold text-emerald-500">+32%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 1.3 }}
            className="absolute -right-4 top-2/3 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: EASE, delay: 0.5 }}
              className="rounded-xl border border-border bg-card p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Bot className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] text-muted-foreground">Agent Response</p>
                  <p className="text-sm font-semibold">1.2s avg</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Rotating notification card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 1.4 }}
            className="absolute -right-2 top-8 hidden lg:block"
          >
            <div className="relative h-20 w-44 overflow-hidden rounded-xl border border-border bg-card shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNotif}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex h-full items-center gap-2 p-3"
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg bg-muted ${notifications[activeNotif].color}`}
                  >
                    {(() => {
                      const Icon = notifications[activeNotif].icon
                      return <Icon className="h-4 w-4" />
                    })()}
                  </span>
                  <div>
                    <p className="text-[10px] text-muted-foreground">
                      {notifications[activeNotif].title}
                    </p>
                    <p className="text-sm font-semibold">
                      {notifications[activeNotif].value}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {notifications[activeNotif].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by fast-growing teams
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-muted-foreground/70"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
