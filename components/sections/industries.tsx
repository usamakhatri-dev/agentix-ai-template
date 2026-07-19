'use client';

import {
  HeartPulse,
  Landmark,
  GraduationCap,
  Megaphone,
  ShoppingBag,
  Users,
  Scale,
  Truck,
} from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Stagger, StaggerItem } from '@/components/motion';

const industries = [
  { icon: HeartPulse, name: 'Healthcare', description: 'Automate patient intake, scheduling, and follow-ups while staying HIPAA-compliant.', color: 'from-rose-500 to-rose-600' },
  { icon: Landmark, name: 'Finance', description: 'Streamline compliance, reporting, and customer onboarding with secure AI agents.', color: 'from-blue-500 to-blue-600' },
  { icon: GraduationCap, name: 'Education', description: 'Personalize learning, automate admin, and support students around the clock.', color: 'from-amber-500 to-amber-600' },
  { icon: Megaphone, name: 'Marketing', description: 'Generate, schedule, and optimize campaigns across every channel automatically.', color: 'from-violet-500 to-violet-600' },
  { icon: ShoppingBag, name: 'Retail', description: 'Power product recommendations, inventory alerts, and 24/7 shopper support.', color: 'from-cyan-500 to-cyan-600' },
  { icon: Users, name: 'HR', description: 'Automate recruiting, onboarding, and employee FAQs so your team can focus on people.', color: 'from-emerald-500 to-emerald-600' },
  { icon: Scale, name: 'Legal', description: 'Draft, review, and summarize documents with AI grounded in your firm knowledge.', color: 'from-slate-500 to-slate-600' },
  { icon: Truck, name: 'Logistics', description: 'Optimize routes, track shipments, and automate customer updates in real time.', color: 'from-orange-500 to-orange-600' },
];

export function Industries() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Built for every industry"
          description="Agentix AI adapts to your domain with prebuilt templates and industry-specific agents."
        />
        <Stagger className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => (
            <StaggerItem key={industry.name}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card-hover">
                <div aria-hidden className={`pointer-events-none absolute -top-8 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br ${industry.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`} />
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/5 text-primary ring-1 ring-border/40 transition-transform duration-300 group-hover:scale-110">
                  <industry.icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-4 font-display text-base font-semibold">{industry.name}</h3>
                <p className="relative mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
