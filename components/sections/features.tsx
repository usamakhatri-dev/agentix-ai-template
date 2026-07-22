'use client';

import {
  Bot,
  Zap,
  Brain,
  Plug,
  BarChart3,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Stagger, StaggerItem } from '@/components/motion';
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
    <section id="features" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Features"
          title="Everything you need to automate with AI"
          description="From autonomous agents to real-time analytics, Agentix gives your team the tools to build, deploy, and scale AI automation without a line of code."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Bot;
            return (
              <StaggerItem key={feature.title}>
                <div className="group relative h-full rounded-2xl border border-border/60 bg-card/50 p-6 shadow-soft backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-premium">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
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
