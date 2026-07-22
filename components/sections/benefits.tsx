import {
  Clock,
  DollarSign,
  TrendingUp,
  Shield,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion'

const benefits: {
  icon: LucideIcon
  stat: string
  label: string
  description: string
}[] = [
  {
    icon: Clock,
    stat: '40+ hrs',
    label: 'Saved per week',
    description:
      'Automate repetitive tasks and give your team their time back to focus on high-impact work.',
  },
  {
    icon: DollarSign,
    stat: '62%',
    label: 'Lower costs',
    description:
      'Cut operational overhead by automating support, ops, and admin workflows end-to-end.',
  },
  {
    icon: TrendingUp,
    stat: '3.4x',
    label: 'Faster growth',
    description:
      'Scale output without scaling headcount. Handle 10x the volume with the same team.',
  },
  {
    icon: Shield,
    stat: '99.9%',
    label: 'Uptime SLA',
    description:
      'Enterprise-grade reliability with SOC 2 compliance and end-to-end encryption.',
  },
]

export function Benefits() {
  return (
    <section className="border-y border-border bg-muted/20 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Benefits"
          title="Real results, not just promises"
          description="Teams using Nexus see measurable impact within the first 30 days."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.label}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <p className="text-3xl font-bold tracking-tight">{benefit.stat}</p>
                <p className="mt-1 text-sm font-medium">{benefit.label}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
