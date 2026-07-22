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
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
}

const industries: Industry[] = [
  {
    icon: ShoppingBag,
    name: 'E-commerce',
    description: 'Automate customer support, order tracking, and personalized product recommendations at scale.',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    description: 'Streamline patient intake, appointment scheduling, and clinical documentation with HIPAA-compliant agents.',
  },
  {
    icon: Building2,
    name: 'SaaS',
    description: 'Onboard users, handle billing inquiries, and provide technical support without expanding your team.',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Deliver personalized tutoring, automate grading workflows, and manage student communications.',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Monitor supply chains, automate inventory reports, and predict maintenance needs with AI agents.',
  },
  {
    icon: Banknote,
    name: 'Finance',
    description: 'Automate fraud detection, compliance reporting, and customer financial advisory workflows securely.',
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Industries"
            title="Built for every industry"
            description="Agentix AI adapts to your industry-specific needs with customizable agents and workflows."
          />
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <StaggerItem key={industry.name}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-float">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-colors group-hover:from-primary/20 group-hover:to-secondary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{industry.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{industry.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
