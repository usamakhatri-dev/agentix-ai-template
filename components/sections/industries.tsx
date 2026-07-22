'use client';

import {
  ShoppingBag,
  HeartPulse,
  Building2,
  GraduationCap,
  Factory,
  Banknote,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Stagger, StaggerItem } from '@/components/motion';

const industries: { icon: LucideIcon; name: string; description: string }[] = [
  { icon: ShoppingBag, name: 'E-commerce', description: 'Automate support, recommendations, and order tracking.' },
  { icon: HeartPulse, name: 'Healthcare', description: 'Streamline patient intake, scheduling, and follow-ups.' },
  { icon: Building2, name: 'SaaS', description: 'Onboard users, manage trials, and reduce churn automatically.' },
  { icon: GraduationCap, name: 'Education', description: 'Personalize learning paths and automate grading.' },
  { icon: Factory, name: 'Manufacturing', description: 'Monitor supply chains and predict maintenance needs.' },
  { icon: Banknote, name: 'Finance', description: 'Automate compliance checks, reporting, and fraud detection.' },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Industries"
          title="Built for every industry"
          description="From startups to enterprises, Agentix adapts to your industry's unique workflows."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <StaggerItem key={industry.name}>
              <div className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card/50 p-5 shadow-soft backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-premium">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <industry.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold tracking-tight">
                    {industry.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
