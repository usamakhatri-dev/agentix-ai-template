import {
  Bot,
  Zap,
  Brain,
  Plug,
  BarChart3,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion'
import { features } from '@/data/features'

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Zap,
  Brain,
  Plug,
  BarChart3,
  ShieldCheck,
}

export function Features() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to automate at scale"
          description="A complete platform for building, deploying, and monitoring AI agents and workflows — without the engineering overhead."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Bot
            return (
              <StaggerItem key={feature.title}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Container>
    </section>
  )
}
