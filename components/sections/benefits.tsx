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
    description: 'Free your team from repetitive tasks and let them focus on high-impact work that drives growth.',
  },
  {
    icon: DollarSign,
    stat: '60%',
    label: 'Cost reduction',
    description: 'Cut operational costs by consolidating tools and automating workflows across your organization.',
  },
  {
    icon: TrendingUp,
    stat: '3x',
    label: 'Productivity boost',
    description: 'AI agents work around the clock, handling tasks in seconds that used to take hours.',
  },
  {
    icon: Shield,
    stat: '99.9%',
    label: 'Uptime guarantee',
    description: 'Enterprise-grade infrastructure ensures your agents are always available when you need them.',
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
            title="Real results, real impact"
            description="Businesses using Agentix AI see measurable improvements within the first month of deployment."
          />
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={benefit.label}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-float">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="mt-5 text-4xl font-bold tracking-tight font-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {benefit.stat}
                  </div>
                  <div className="mt-1 text-sm font-semibold">{benefit.label}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
