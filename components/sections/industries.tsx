import {
  ShoppingBag,
  HeartPulse,
  Building2,
  GraduationCap,
  Factory,
  Banknote,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion'

const industries: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description:
      'Automate order processing, customer support, and personalized recommendations at scale.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description:
      'Streamline patient intake, claims processing, and appointment scheduling — HIPAA compliant.',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    description:
      'Qualify leads, schedule viewings, and automate follow-ups so no deal slips through.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description:
      'Handle enrollment, student support, and content delivery with intelligent agents.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description:
      'Monitor supply chains, automate procurement, and predict maintenance needs.',
  },
  {
    icon: Banknote,
    title: 'Finance',
    description:
      'Automate compliance checks, fraud detection, and customer onboarding workflows.',
  },
]

export function Industries() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Built for every industry"
          description="From startups to enterprises, teams across sectors use Nexus to automate their unique workflows."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <StaggerItem key={industry.title}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-transform duration-300 group-hover:scale-110">
                  <industry.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{industry.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
