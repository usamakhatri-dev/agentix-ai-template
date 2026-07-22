'use client';

import { motion } from 'framer-motion';
import { MousePointerClick, Workflow, Rocket, BarChart3 } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Connect your tools',
    description: 'Link Slack, Salesforce, HubSpot, and 200+ integrations in minutes. No code required.',
  },
  {
    icon: Workflow,
    title: 'Design workflows',
    description: 'Build visual workflows with drag-and-drop simplicity. Trigger on events or schedule runs.',
  },
  {
    icon: Rocket,
    title: 'Deploy AI agents',
    description: 'Launch autonomous agents that handle tasks end-to-end with contextual memory.',
  },
  {
    icon: BarChart3,
    title: 'Monitor & optimize',
    description: 'Track performance with real-time dashboards. Continuously improve with A/B testing.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-muted/20 border-y border-border/60">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How It Works"
          title="From setup to scale in four steps"
          description="Get up and running in minutes, not months. Agentix makes AI automation accessible to every team."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-border/60 bg-card/50 p-6 shadow-soft backdrop-blur-sm">
                <div className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-bold text-white shadow-glow">
                  {i + 1}
                </div>
                <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <motion.div
                    aria-hidden
                    className="hidden lg:block absolute top-1/2 -right-3 h-px w-6 bg-border"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
