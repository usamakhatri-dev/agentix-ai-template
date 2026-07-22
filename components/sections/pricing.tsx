'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  X,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Star,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

type Plan = {
  name: string
  description: string
  monthly: number | null
  yearly: number | null
  highlighted?: boolean
  features: string[]
  cta: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    description: 'For small teams getting started with automation.',
    monthly: 29,
    yearly: 23,
    features: [
      'Up to 5 agents',
      '1,000 tasks / month',
      '10 integrations',
      'Email support',
      'Basic analytics',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Professional',
    description: 'For growing teams that need more power and flexibility.',
    monthly: 89,
    yearly: 71,
    highlighted: true,
    features: [
      'Up to 25 agents',
      '10,000 tasks / month',
      'Unlimited integrations',
      'Priority support',
      'Advanced analytics',
      'Custom workflows',
      'API access',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    description: 'For organizations with advanced security and scale needs.',
    monthly: null,
    yearly: null,
    features: [
      'Unlimited agents',
      'Unlimited tasks',
      'SSO & SAML',
      'Dedicated support',
      'Custom SLAs',
      'On-premise option',
      'Audit logs',
    ],
    cta: 'Contact sales',
  },
]

const comparisonRows: {
  category: string
  features: { label: string; starter: boolean | string; pro: boolean | string; enterprise: boolean | string }[]
}[] = [
  {
    category: 'Agents & Tasks',
    features: [
      { label: 'Agents', starter: '5', pro: '25', enterprise: 'Unlimited' },
      { label: 'Tasks / month', starter: '1,000', pro: '10,000', enterprise: 'Unlimited' },
      { label: 'Custom agents', starter: false, pro: true, enterprise: true },
      { label: 'Human handoff', starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Integrations',
    features: [
      { label: 'Integrations', starter: '10', pro: 'Unlimited', enterprise: 'Unlimited' },
      { label: 'API access', starter: false, pro: true, enterprise: true },
      { label: 'Webhooks', starter: true, pro: true, enterprise: true },
      { label: 'Custom integrations', starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Analytics & Support',
    features: [
      { label: 'Basic analytics', starter: true, pro: true, enterprise: true },
      { label: 'Advanced analytics', starter: false, pro: true, enterprise: true },
      { label: 'Priority support', starter: false, pro: true, enterprise: true },
      { label: 'Dedicated support', starter: false, pro: false, enterprise: true },
    ],
  },
]

const pricingFaqs: { question: string; answer: string }[] = [
  {
    question: 'Can I change plans at any time?',
    answer:
      'Yes. You can upgrade or downgrade your plan at any time from your dashboard. Changes take effect immediately and we prorate the difference.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes — every paid plan includes a 14-day free trial. No credit card required to get started.',
  },
  {
    question: 'What counts as a "task"?',
    answer:
      'A task is any single action executed by an agent or workflow — such as sending an email, updating a record, or calling an API. Idle time and configuration does not count.',
  },
  {
    question: 'Do you offer discounts for startups or nonprofits?',
    answer:
      'Yes. We offer 50% off for eligible nonprofits and up to 30% off for early-stage startups. Contact our sales team to learn more.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, ACH, and wire transfer for annual plans. Enterprise customers can pay via invoice.',
  },
  {
    question: 'What happens if I exceed my task limit?',
    answer:
      "We'll notify you when you reach 80% of your limit. You can upgrade at any time, or we'll automatically pause workflows until the next billing cycle.",
  },
]

const trustBadges: { icon: LucideIcon; label: string }[] = [
  { icon: Shield, label: 'SOC 2 Type II' },
  { icon: Zap, label: '99.9% uptime SLA' },
  { icon: Star, label: '4.9/5 rating' },
  { icon: Check, label: '14-day free trial' },
]

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-primary" />
    ) : (
      <X className="mx-auto h-4 w-4 text-muted-foreground/40" />
    )
  }
  return <span className="text-sm">{value}</span>
}

export function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="Start free. Upgrade when you're ready. Cancel anytime."
        />

        {/* Billing toggle */}
        <Reveal>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={cn('text-sm', !yearly && 'font-semibold')}>
              Monthly
            </span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span className={cn('text-sm', yearly && 'font-semibold')}>
              Yearly
            </span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              Save 20%
            </span>
          </div>
        </Reveal>

        {/* Plans */}
        <Stagger className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300',
                  plan.highlighted
                    ? 'border-primary shadow-xl lg:scale-105'
                    : 'border-border hover:border-primary/40'
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  {plan.monthly === null ? (
                    <span className="text-4xl font-bold">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">
                        ${yearly ? plan.yearly : plan.monthly}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        /mo
                      </span>
                    </>
                  )}
                </div>
                {plan.monthly !== null && yearly && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Billed annually
                  </p>
                )}
                <Button
                  className="mt-6"
                  variant={plan.highlighted ? 'default' : 'outline'}
                  asChild
                >
                  <Link href={plan.monthly === null ? '/contact' : '/signup'}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Trust badges */}
        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <badge.icon className="h-4 w-4 text-primary" />
                {badge.label}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Feature comparison table */}
        <Reveal>
          <div className="mt-20">
            <h3 className="text-center text-2xl font-semibold tracking-tight">
              Compare plans
            </h3>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="p-4 text-sm font-medium text-muted-foreground">
                      Feature
                    </th>
                    <th className="p-4 text-center text-sm font-medium">Starter</th>
                    <th className="p-4 text-center text-sm font-medium">
                      Professional
                    </th>
                    <th className="p-4 text-center text-sm font-medium">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                {comparisonRows.map((group) => (
                  <tbody key={group.category}>
                    <tr className="border-b border-border bg-muted/10">
                      <td
                        colSpan={4}
                        className="p-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.features.map((row) => (
                      <tr
                        key={row.label}
                        className="border-b border-border last:border-0"
                      >
                        <td className="p-4 text-sm">{row.label}</td>
                        <td className="p-4 text-center">
                          <Cell value={row.starter} />
                        </td>
                        <td className="p-4 text-center">
                          <Cell value={row.pro} />
                        </td>
                        <td className="p-4 text-center">
                          <Cell value={row.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </Reveal>

        {/* Pricing FAQ */}
        <div className="mt-20">
          <div className="mb-8 flex items-center justify-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h3 className="text-2xl font-semibold tracking-tight">
              Pricing FAQ
            </h3>
          </div>
          <Reveal>
            <div className="mx-auto max-w-2xl">
              <Accordion type="single" collapsible>
                {pricingFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>

        {/* Enterprise CTA */}
        <Reveal>
          <div className="mt-20 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 text-center md:p-12">
            <Sparkles className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Need a custom solution?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Talk to our sales team about volume pricing, custom integrations,
              and enterprise-grade security.
            </p>
            <Button size="lg" className="mt-6" asChild>
              <Link href="/contact">
                Contact sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
