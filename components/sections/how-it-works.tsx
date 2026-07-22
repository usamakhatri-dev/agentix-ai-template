'use client';

import { MousePointerClick, Workflow, Rocket, BarChart3, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

const steps: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MousePointerClick,
    title: 'Connect your tools',
    description: 'Link Slack, Salesforce, HubSpot, Notion, and 200+ integrations in minutes. No code required.',
  },
  {
    icon: Workflow,
    title: 'Design workflows',
    description: 'Build visual workflows with a drag-and-drop editor. Trigger on events, schedule runs, or fire manually.',
  },
  {
    icon: Rocket,
    title: 'Deploy agents',
    description: 'Launch autonomous AI agents that handle complex tasks end-to-end with contextual memory and reasoning.',
  },
  {
    icon: BarChart3,
    title: 'Monitor & optimize',
    description: 'Track performance with real-time dashboards. Identify bottlenecks and optimize workflows continuously.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-muted/20 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How It Works"
            title="From setup to scale in four steps"
            description="Get up and running in an afternoon. Agentix AI is designed for speed, so you can go from idea to deployed automation without writing a single line of code."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-glow">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-display text-4xl font-bold text-muted-foreground/15">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
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
