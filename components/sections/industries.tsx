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
  title: string;
  description: string;
}

const industries: Industry[] = [
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Automate order processing, customer support, and inventory management across channels.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'Streamline patient intake, appointment scheduling, and claims processing with HIPAA compliance.',
  },
  {
    icon: Building2,
    title: 'SaaS',
    description: 'Automate onboarding, lead qualification, and churn prevention with data-driven workflows.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Personalize learning paths, automate grading, and manage student communications at scale.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Monitor supply chains, automate procurement, and predict maintenance needs with AI agents.',
  },
  {
    icon: Banknote,
    title: 'Finance',
    description: 'Automate fraud detection, loan processing, and compliance reporting with audit trails.',
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
            description="Agentix AI adapts to the unique needs of your sector with pre-built templates and customizable workflows."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <StaggerItem key={industry.title}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-premium">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 transition-colors group-hover:from-primary/20 group-hover:to-secondary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {industry.description}
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
