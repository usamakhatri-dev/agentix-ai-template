'use client';

import { TrendingUp, Clock, DollarSign, Users, ArrowRight } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

const results = [
  { icon: Clock, value: '4,820', label: 'hours saved per quarter', color: 'text-primary' },
  { icon: DollarSign, value: '$214k', label: 'in operational savings', color: 'text-emerald-500' },
  { icon: Users, value: '3.2x', label: 'faster customer response', color: 'text-secondary' },
  { icon: TrendingUp, value: '+34%', label: 'revenue lift in 90 days', color: 'text-accent' },
];

export function CaseStudy() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Case Study"
          title="How Helio Commerce scaled support without scaling headcount"
          description="A fast-growing ecommerce brand turned to Agentix AI to handle explosive ticket volume — and transformed their entire operation."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Challenge + Solution */}
          <div className="lg:col-span-7 space-y-5">
            <Reveal>
              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-rose-500/30 hover:shadow-card-hover">
                <div aria-hidden className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-rose-500/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500">
                    <Clock className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-rose-500">
                    The Challenge
                  </span>
                </div>
                <p className="relative mt-3 text-sm leading-relaxed text-foreground/90">
                  Helio Commerce was doubling revenue year over year, but their support team could not keep up.
                  Ticket volume grew 5x in six months, response times stretched to 18 hours, and CSAT dropped below 80%.
                  Hiring more agents was not an option — they needed a smarter way to scale.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover">
                <div aria-hidden className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Users className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    The Solution
                  </span>
                </div>
                <p className="relative mt-3 text-sm leading-relaxed text-foreground/90">
                  Helio deployed Agentix AI support agents trained on their knowledge base, order data, and return policy.
                  Within a week, agents resolved 80% of tickets autonomously, escalated the complex 20% to humans with full context,
                  and automated post-resolution follow-ups and CSAT collection.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 transition-all duration-300 hover:shadow-card-hover">
                <div aria-hidden className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-secondary/15 blur-2xl" />
                <div className="relative flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <TrendingUp className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                    The Results
                  </span>
                </div>
                <p className="relative mt-3 text-sm leading-relaxed text-foreground/90">
                  In 90 days, Helio cut average response time from 18 hours to under 2 minutes, lifted CSAT to 97%,
                  and saved $214k in operational costs — all while their support team stayed the same size.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Results stats */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-6 shadow-premium backdrop-blur-xl">
                <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
                <div className="relative">
                  <div className="text-sm font-semibold">Results at a glance</div>
                  <div className="text-xs text-muted-foreground">90 days after deployment</div>
                  <Stagger className="mt-6 grid grid-cols-2 gap-4">
                    {results.map((r) => (
                      <StaggerItem key={r.label}>
                        <div className="group rounded-xl border border-border/60 bg-background/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                          <r.icon className={`h-5 w-5 ${r.color}`} />
                          <div className="mt-3 font-display text-2xl font-semibold tracking-tight">{r.value}</div>
                          <div className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{r.label}</div>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                  <div className="mt-6 flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3 transition-colors hover:bg-muted/60">
                    <div>
                      <div className="text-xs font-medium">Helio Commerce</div>
                      <div className="text-[10px] text-muted-foreground">Ecommerce · 120 employees</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
