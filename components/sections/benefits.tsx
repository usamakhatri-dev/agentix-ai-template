'use client';

import { Clock, TrendingDown, Sparkles, Gauge, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/container';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { SectionHeading } from '@/components/section-heading';

const benefits = [
  {
    icon: Clock,
    title: 'Save 40+ hours per week',
    description: 'Automate repetitive tasks so your team focuses on work that actually moves the needle.',
    metric: '40h+',
    label: 'saved weekly',
  },
  {
    icon: TrendingDown,
    title: 'Cut operational costs by 60%',
    description: 'Replace a stack of disconnected tools with one platform — and watch the bill shrink.',
    metric: '60%',
    label: 'cost reduction',
  },
  {
    icon: Sparkles,
    title: 'Boost productivity 3.5x',
    description: 'AI agents handle the busywork in seconds, letting your team ship outcomes faster.',
    metric: '3.5x',
    label: 'productivity gain',
  },
  {
    icon: Gauge,
    title: 'Improve ROI in 30 days',
    description: 'Most customers see measurable returns within the first month of going live.',
    metric: '30d',
    label: 'to ROI',
  },
];

export function Benefits() {
  return (
    <section id="resources" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Benefits"
          title="Real outcomes, not just features"
          description="Agentix AI delivers measurable business impact from day one — time, money, and momentum."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* Visual */}
          <Reveal>
            <div className="relative">
              <div aria-hidden className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 blur-2xl" />
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-6 shadow-premium backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Business Impact</div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                    Last 90 days
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: 'Hours Saved', value: '4,820', color: 'text-primary' },
                    { label: 'Cost Reduced', value: '$214k', color: 'text-secondary' },
                    { label: 'Tasks Automated', value: '128k', color: 'text-accent' },
                    { label: 'Revenue Lift', value: '+34%', color: 'text-emerald-500' },
                  ].map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-xl border border-border/60 bg-background/60 p-4 shadow-soft"
                    >
                      <div className={`text-2xl font-semibold tracking-tight ${m.color}`}>{m.value}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border border-border/60 bg-muted/30 p-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">ROI growth</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">+248%</span>
                  </div>
                  <div className="mt-3 h-2.5 w-full rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '82%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-2.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text + metrics */}
          <div>
            <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {benefits.map((b) => (
                <StaggerItem key={b.title}>
                  <div className="group h-full rounded-2xl border border-border/60 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-border/40 transition-transform duration-300 group-hover:scale-110">
                        <b.icon className="h-5 w-5" />
                      </div>
                      <div className="text-right">
                        <div className="font-display text-xl font-semibold text-gradient-primary">{b.metric}</div>
                        <div className="text-[10px] text-muted-foreground">{b.label}</div>
                      </div>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold">{b.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{b.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2} className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowRight className="h-4 w-4 text-primary" />
              Join 50,000+ teams already seeing these results.
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
