'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Bot,
  Zap,
  Brain,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion'
import { Button } from '@/components/ui/button'

const EASE = [0.22, 1, 0.36, 1] as const

type TabId = 'agents' | 'workflows' | 'analytics'

const tabs: {
  id: TabId
  label: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  cta: string
}[] = [
  {
    id: 'agents',
    label: 'Agents',
    icon: Bot,
    title: 'AI agents that actually get things done',
    description:
      'Deploy autonomous agents that handle support tickets, qualify leads, and complete multi-step tasks — 24/7, with human-level quality.',
    features: [
      'Natural language understanding',
      'Multi-step task execution',
      'Context-aware decision making',
      'Human handoff when needed',
    ],
    cta: 'Explore agents',
  },
  {
    id: 'workflows',
    label: 'Workflows',
    icon: Zap,
    title: 'Visual workflows for any process',
    description:
      'Drag, drop, and automate. Build complex workflows with conditional logic, loops, and integrations — no code required.',
    features: [
      'Visual drag-and-drop builder',
      '200+ pre-built integrations',
      'Conditional logic & branching',
      'Scheduled & event-triggered',
    ],
    cta: 'Explore workflows',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    title: 'Insights that drive decisions',
    description:
      'Real-time dashboards show exactly what\u2019s working — and what isn\u2019t. Track ROI, agent performance, and bottlenecks at a glance.',
    features: [
      'Real-time performance metrics',
      'ROI & cost-savings tracking',
      'Custom report builder',
      'Anomaly detection alerts',
    ],
    cta: 'Explore analytics',
  },
]

const mockBars = [38, 62, 45, 78, 55, 90, 72, 84, 66, 96, 80, 70]

export function Showcase() {
  const [active, setActive] = useState<TabId>('agents')
  const activeTab = tabs.find((t) => t.id === active)!

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Showcase"
          title="One platform, three superpowers"
          description="See how teams use Nexus to automate support, operations, and growth."
        />

        {/* Tabs */}
        <Reveal>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/30 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === tab.id
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {active === tab.id && (
                    <motion.span
                      layoutId="showcase-tab"
                      transition={{ duration: 0.3, ease: EASE }}
                      className="absolute inset-0 rounded-full bg-primary"
                    />
                  )}
                  <tab.icon className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left: text */}
          <motion.div
            key={`text-${active}`}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {activeTab.title}
            </h3>
            <p className="mt-4 text-muted-foreground">{activeTab.description}</p>
            <ul className="mt-6 space-y-3">
              {activeTab.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link href={`/${active}`}>
                {activeTab.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right: mockup */}
          <motion.div
            key={`mock-${active}`}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-2xl border border-border bg-card p-6 shadow-xl"
          >
            <div className="mb-4 flex items-center gap-2">
              <activeTab.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{activeTab.label}</span>
              <span className="ml-auto flex h-2 w-2 rounded-full bg-emerald-500" />
            </div>

            {/* Animated bar chart */}
            <div className="rounded-xl border border-border bg-background p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-medium">Performance</span>
                <span className="text-xs text-emerald-500">+18.2%</span>
              </div>
              <div className="flex h-40 items-end gap-2">
                {mockBars.map((h, i) => (
                  <motion.div
                    key={`${active}-${i}`}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{
                      duration: 0.5,
                      ease: EASE,
                      delay: i * 0.04,
                    }}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-primary"
                  />
                ))}
              </div>
            </div>

            {/* Mini stats */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: 'Tasks', value: '1,438' },
                { label: 'Success', value: '98.4%' },
                { label: 'Avg time', value: '1.2s' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-background p-3 text-center"
                >
                  <p className="text-sm font-semibold">{s.value}</p>
                  <p className="text-[10px] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
