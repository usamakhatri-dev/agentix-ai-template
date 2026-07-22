'use client'

import { motion } from 'framer-motion'
import {
  MousePointerClick,
  Workflow,
  Rocket,
  BarChart3,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion'

const EASE = [0.22, 1, 0.36, 1] as const

const steps: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: MousePointerClick,
    title: 'Connect your tools',
    description:
      'Link your existing stack — CRM, helpdesk, database, and more — with one-click integrations. No code required.',
  },
  {
    icon: Workflow,
    title: 'Design your workflow',
    description:
      'Drag and drop triggers, conditions, and actions into a visual canvas. Build complex logic in minutes.',
  },
  {
    icon: Rocket,
    title: 'Deploy your agents',
    description:
      'Launch AI agents that handle tasks autonomously. They learn from every interaction and improve over time.',
  },
  {
    icon: BarChart3,
    title: 'Measure & optimize',
    description:
      'Track performance with real-time analytics. Spot bottlenecks and iterate with confidence.',
  },
]

export function HowItWorks() {
  return (
    <section className="border-y border-border bg-muted/20 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From idea to automation in four steps"
          description="No engineering team required. Go from setup to deployment in an afternoon."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="relative h-full rounded-2xl border border-border bg-card p-6"
              >
                <span className="absolute right-5 top-5 text-5xl font-bold text-muted/30">
                  {i + 1}
                </span>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                    <div className="h-px w-6 bg-border" />
                  </div>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
