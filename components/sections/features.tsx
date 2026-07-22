import { Bot, Zap, Brain, Plug, BarChart3, ShieldCheck, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { features } from '@/data/features';

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Zap,
  Brain,
  Plug,
  BarChart3,
  ShieldCheck,
};

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Features"
            title="Everything you need to automate with AI"
            description="From autonomous agents to real-time analytics, Agentix AI gives you the tools to build, deploy, and scale AI-powered workflows across your entire organization."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Bot;
            return (
              <StaggerItem key={feature.title}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-premium">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 transition-colors group-hover:from-primary/20 group-hover:to-secondary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
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
