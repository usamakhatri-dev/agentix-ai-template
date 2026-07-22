'use client';

import { motion } from 'framer-motion';
import { MousePointerClick, Workflow, Rocket, BarChart3, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

const EASE = [0.22, 1, 0.36, 1] as const;

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: MousePointerClick,
    number: '01',
    title: 'Connect your tools',
    description:
      'Link Slack, Salesforce, HubSpot, Notion, and 200+ integrations in minutes. Use our REST API and webhooks for custom connections.',
  },
  {
    icon: Workflow,
    number: '02',
    title: 'Design workflows',
    description:
      'Build visual workflows with our drag-and-drop editor. Trigger on events, schedule runs, or fire manually to automate any process.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Deploy agents',
    description:
      'Launch autonomous AI agents that handle tasks end-to-end. Agents use contextual memory to deliver personalized results every time.',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Monitor & optimize',
    description:
      'Track performance with real-time dashboards. Identify bottlenecks, measure impact, and continuously improve your workflows.',
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
            description="Get up and running in an afternoon. No code required, no complex setup, no waiting on engineering."
          />
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number}>
                <div className="group relative h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-float">
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-colors group-hover:from-primary/20 group-hover:to-secondary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-bold tracking-tight text-muted-foreground/20 font-display">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>

                  {/* Connector arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: EASE, delay: 0.2 + index * 0.1 }}
                        className="text-muted-foreground/30"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
