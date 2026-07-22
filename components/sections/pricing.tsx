'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Shield, Headphones, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import { cn } from '@/lib/utils';

interface Plan {
  name: string;
  monthly: number | null;
  yearly: number | null;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    monthly: 29,
    yearly: 23,
    description: 'Perfect for small teams getting started with AI automation.',
    features: [
      'Up to 3 AI agents',
      '1,000 tasks per month',
      '50+ integrations',
      'Email support',
      'Community access',
    ],
  },
  {
    name: 'Professional',
    monthly: 89,
    yearly: 71,
    description: 'For growing teams that need more power and flexibility.',
    features: [
      'Up to 15 AI agents',
      '10,000 tasks per month',
      '200+ integrations',
      'Priority support',
      'Advanced analytics',
      'Custom workflows',
      'Team collaboration',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthly: null,
    yearly: null,
    description: 'For organizations that need scale, security, and support.',
    features: [
      'Unlimited AI agents',
      'Unlimited tasks',
      'All integrations',
      'Dedicated support',
      'SSO and SAML',
      'Custom contracts',
      'SLA guarantee',
    ],
  },
];

const comparisonRows: { label: string; values: [boolean, boolean, boolean] }[] = [
  { label: 'AI Agents', values: [true, true, true] },
  { label: 'Monthly tasks', values: [true, true, true] },
  { label: 'Integrations', values: [true, true, true] },
  { label: 'Workflow builder', values: [true, true, true] },
  { label: 'Analytics dashboard', values: [false, true, true] },
  { label: 'Custom workflows', values: [false, true, true] },
  { label: 'Team collaboration', values: [false, true, true] },
  { label: 'Priority support', values: [false, true, true] },
  { label: 'SSO and SAML', values: [false, false, true] },
  { label: 'Custom contracts', values: [false, false, true] },
  { label: 'SLA guarantee', values: [false, false, true] },
  { label: 'Dedicated manager', values: [false, false, true] },
];

const pricingFaqs: { question: string; answer: string }[] = [
  {
    question: 'Can I change my plan at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we prorate the difference automatically.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, every plan comes with a 14-day free trial. No credit card is required to get started, and you can cancel at any time.',
  },
  {
    question: 'What happens when I exceed my task limit?',
    answer: 'We will notify you when you approach your limit. You can upgrade to a higher plan or purchase additional tasks as needed.',
  },
  {
    question: 'Do you offer discounts for non-profits?',
    answer: 'Yes, we offer a 20% discount for registered non-profits and educational institutions. Contact our sales team to learn more.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can pay via invoice.',
  },
  {
    question: 'How does the Enterprise plan work?',
    answer: 'The Enterprise plan is fully customizable. Contact our sales team to discuss your needs and we will build a plan that fits your organization.',
  },
];

const trustBadges = [
  { icon: Shield, label: 'SOC 2 Type II' },
  { icon: RefreshCw, label: '14-day free trial' },
  { icon: Headphones, label: '24/7 support' },
];

export function Pricing() {
  const [yearly, setYearly] = React.useState(false);

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            description="Choose the plan that fits your team. Upgrade, downgrade, or cancel at any time."
          />
        </Reveal>

        {/* Billing toggle */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={cn('text-sm font-medium', !yearly ? 'text-foreground' : 'text-muted-foreground')}>
              Monthly
            </span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span className={cn('text-sm font-medium', yearly ? 'text-foreground' : 'text-muted-foreground')}>
              Yearly
            </span>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              Save 20%
            </span>
          </div>
        </Reveal>

        {/* Plans */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-2xl border bg-card p-6 transition-all',
                plan.highlighted
                  ? 'border-primary shadow-premium lg:scale-105'
                  : 'border-border',
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-xs font-semibold text-white shadow-glow">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="font-display text-lg font-semibold tracking-tight">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

              <div className="mt-5">
                {plan.monthly !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold tracking-tight">
                      ${yearly ? plan.yearly : plan.monthly}
                    </span>
                    <span className="text-sm text-muted-foreground">/mo</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold tracking-tight">Custom</span>
                  </div>
                )}
                {plan.monthly !== null && yearly && (
                  <p className="mt-1 text-xs text-muted-foreground">Billed annually</p>
                )}
              </div>

              <Button
                variant={plan.highlighted ? 'brand' : 'outline'}
                size="lg"
                className="mt-6 w-full"
              >
                {plan.monthly !== null ? 'Start Free Trial' : 'Contact Sales'}
                <ArrowRight className="h-4 w-4" />
              </Button>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="h-4 w-4 text-primary" />
                {badge.label}
              </div>
            );
          })}
        </div>

        {/* Comparison table */}
        <div className="mt-16">
          <Reveal>
            <h3 className="text-center font-display text-2xl font-semibold tracking-tight">
              Compare plans
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 text-left text-sm font-semibold text-muted-foreground">
                      Feature
                    </th>
                    {plans.map((plan) => (
                      <th key={plan.name} className="py-4 text-center text-sm font-semibold">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-b border-border">
                      <td className="py-4 text-sm text-muted-foreground">{row.label}</td>
                      {row.values.map((included, i) => (
                        <td key={i} className="py-4 text-center">
                          {included ? (
                            <Check className="mx-auto h-4 w-4 text-primary" />
                          ) : (
                            <span className="text-muted-foreground/30">&ndash;</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

        {/* Pricing FAQs */}
        <div className="mt-16">
          <Reveal>
            <h3 className="text-center font-display text-2xl font-semibold tracking-tight">
              Pricing FAQs
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-8 max-w-2xl">
              <Accordion type="single" collapsible>
                {pricingFaqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>

        {/* Enterprise CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center sm:p-12">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Need a custom solution?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
              Our enterprise team will work with you to build a plan that fits your
              organization. Get in touch to discuss volume pricing, custom integrations,
              and dedicated support.
            </p>
            <Button variant="brand" size="lg" className="mt-6">
              Contact Sales
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
