'use client';

import { Clock, DollarSign, TrendingUp, Shield } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Stagger, StaggerItem } from '@/components/motion';

const benefits = [
  {
    icon: Clock,
    title: 'Save 40+ hours per week',
    description: 'Automate repetitive tasks and free your team to focus on high-impact work that drives growth.',
    stat: '40h',
    statLabel: 'saved per week',
  },
  {
    icon: DollarSign,
    title: 'Cut operational costs by 60%',
    description: 'Replace manual processes with AI agents that work 24/7 at a fraction of the cost.',
    stat: '60%',
    statLabel: 'cost reduction',
  },
  {
    icon: TrendingUp,
    title: 'Boost productivity by 3x',
    description: 'Agentix handles the busywork so your team can ship faster and serve more customers.',
    stat: '3x',
    statLabel: 'productivity gain',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    description: 'SOC 2 Type II, GDPR, and HIPAA compliant. Your data is encrypted and never shared.',
    stat: '99.9%',
    statLabel: 'uptime SLA',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative py-24 sm:py-32 bg-muted/20 border-y border-border/60">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Benefits"
          title="Why teams choose Agentix"
          description="Real results, measurable impact. See what Agentix can do for your business."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 shadow-soft backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-premium">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl font-semibold text-gradient">{b.stat}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{b.statLabel}</div>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {b.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
