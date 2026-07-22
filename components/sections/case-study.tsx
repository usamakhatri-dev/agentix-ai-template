'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users, DollarSign } from 'lucide-react'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion'

const EASE = [0.22, 1, 0.36, 1] as const

const stats = [
  { icon: TrendingUp, value: '+42%', label: 'Revenue growth' },
  { icon: Clock, value: '38 hrs', label: 'Saved per week' },
  { icon: Users, value: '12k+', label: 'Customers served' },
  { icon: DollarSign, value: '$1.2M', label: 'Cost saved annually' },
]

export function CaseStudy() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 dot-bg" />
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Case study"
          title="How Acme Corp scaled 3x without hiring"
          description="See how a 50-person team automated their entire support and ops workflow with Nexus."
        />

        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mt-12 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-8 md:p-12"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Left: story */}
              <div>
                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Customer story
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  &ldquo;Nexus paid for itself in the first week.&rdquo;
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Acme Corp was drowning in support tickets and manual ops work.
                  Within 30 days of deploying Nexus, they automated 80% of their
                  support workflow, cut response times by 4x, and freed their team
                  to focus on product — not busywork.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-lg font-semibold text-primary-foreground">
                    A
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Sarah Chen</p>
                    <p className="text-xs text-muted-foreground">
                      VP of Operations, Acme Corp
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
                    className="rounded-2xl border border-border bg-background/60 p-5 backdrop-blur"
                  >
                    <stat.icon className="mb-3 h-6 w-6 text-primary" />
                    <p className="text-3xl font-bold tracking-tight">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  )
}
