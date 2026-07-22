import { Clock, DollarSign, TrendingUp, Shield, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

interface Benefit {
  icon: LucideIcon;
  stat: string;
  label: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Clock,
    stat: '40h',
    label: 'Saved per week',
    description: 'Automate repetitive tasks and free your team to focus on high-impact work that drives growth.',
  },
  {
    icon: DollarSign,
    stat: '60%',
    label: 'Cost reduction',
    description: 'Replace multiple tools and manual processes with a single platform that scales with your needs.',
  },
  {
    icon: TrendingUp,
    stat: '3x',
    label: 'Productivity boost',
    description: 'AI agents work around the clock, handling thousands of tasks simultaneously without fatigue.',
  },
  {
    icon: Shield,
    stat: '99.9%',
    label: 'Uptime guarantee',
    description: 'Enterprise-grade infrastructure with SOC 2 Type II compliance and end-to-end encryption.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="border-y border-border bg-muted/20 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Benefits"
            title="Real results, measurable impact"
            description="Teams using Agentix AI see immediate improvements in efficiency, cost savings, and customer satisfaction."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={benefit.label}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-premium">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="mt-5 font-display text-4xl font-bold tracking-tight">
                    {benefit.stat}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{benefit.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
