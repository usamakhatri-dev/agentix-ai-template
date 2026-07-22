'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Shield, Headset, CreditCard, Sparkles } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface Plan {
  name: string;
  monthly: number | null;
  yearly: number | null;
  description: string;
  highlighted?: boolean;
  badge?: string;
  cta: string;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    monthly: 29,
    yearly: 23,
    description: 'Perfect for small teams getting started with AI automation.',
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    monthly: 89,
    yearly: 71,
    description: 'For growing teams that need more power and flexibility.',
    highlighted: true,
    badge: 'Most Popular',
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    monthly: null,
    yearly: null,
    description: 'Custom solutions for large organizations with advanced needs.',
    cta: 'Contact Sales',
  },
];

const planFeatures: Record<string, { label: string; included: boolean }[]> = {
  Starter: [
    { label: '3 AI agents', included: true },
    { label: '5 automated workflows', included: true },
    { label: '20 integrations', included: true },
    { label: '1,000 tasks per month', included: true },
    { label: 'Email support', included: true },
    { label: 'Basic analytics', included: true },
    { label: '7-day data retention', included: true },
    { label: 'Community forum access', included: true },
    { label: 'Single workspace', included: true },
    { label: 'Standard security', included: true },
    { label: 'API access', included: false },
    { label: 'Custom integrations', included: false },
  ],
  Professional: [
    { label: '15 AI agents', included: true },
    { label: 'Unlimited workflows', included: true },
    { label: '200+ integrations', included: true },
    { label: '50,000 tasks per month', included: true },
    { label: 'Priority email support', included: true },
    { label: 'Advanced analytics', included: true },
    { label: '90-day data retention', included: true },
    { label: 'Community forum access', included: true },
    { label: '5 workspaces', included: true },
    { label: 'Enhanced security', included: true },
    { label: 'API access', included: true },
    { label: 'Custom integrations', included: false },
  ],
  Enterprise: [
    { label: 'Unlimited AI agents', included: true },
    { label: 'Unlimited workflows', included: true },
    { label: '200+ integrations + custom', included: true },
    { label: 'Unlimited tasks', included: true },
    { label: 'Dedicated success manager', included: true },
    { label: 'Custom analytics & reports', included: true },
    { label: 'Unlimited data retention', included: true },
    { label: 'Priority support + SLA', included: true },
    { label: 'Unlimited workspaces', included: true },
    { label: 'Enterprise security (SSO/SAML)', included: true },
    { label: 'API access', included: true },
    { label: 'Custom integrations', included: true },
  ],
};

const pricingFaqs = [
  {
    question: 'Can I change my plan at any time?',
    answer:
      'Yes. You can upgrade, downgrade, or cancel your plan at any time from your dashboard. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Do you offer a free trial?',
    answer:
      'Yes. Every paid plan comes with a 14-day free trial. No credit card is required to start, and you can explore all features before committing.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards including Visa, Mastercard, and American Express. Enterprise customers can also pay via invoice and bank transfer.',
  },
  {
    question: 'Is there a discount for annual billing?',
    answer:
      'Yes. When you choose annual billing, you save approximately 20% compared to monthly billing. The discount is applied automatically to your subscription.',
  },
  {
    question: 'What happens when I exceed my task limit?',
    answer:
      'We will notify you when you approach your limit. You can upgrade to a higher plan or purchase additional task packs. Enterprise plans include unlimited tasks.',
  },
  {
    question: 'Do you offer discounts for non-profits or education?',
    answer:
      'Yes. We offer special pricing for non-profit organizations and educational institutions. Contact our sales team to learn more about available discounts.',
  },
];

const trustBadges = [
  { icon: Shield, label: 'SOC 2 Type II' },
  { icon: CreditCard, label: 'Cancel anytime' },
  { icon: Headset, label: '14-day free trial' },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

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
            <Label htmlFor="billing-toggle" className={cn('text-sm font-medium', !yearly && 'text-foreground', yearly && 'text-muted-foreground')}>
              Monthly
            </Label>
            <Switch id="billing-toggle" checked={yearly} onCheckedChange={setYearly} />
            <Label htmlFor="billing-toggle" className={cn('text-sm font-medium', yearly && 'text-foreground', !yearly && 'text-muted-foreground')}>
              Yearly
            </Label>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              Save 20%
            </span>
          </div>
        </Reveal>

        {/* Plan cards */}
        <Stagger className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <StaggerItem key={plan.name}>
                <div
                  className={cn(
                    'relative flex h-full flex-col rounded-2xl border bg-card p-6 shadow-soft transition-all',
                    plan.highlighted
                      ? 'border-primary shadow-glow lg:scale-105'
                      : 'border-border hover:border-primary/30 hover:shadow-float',
                  )}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-xs font-semibold text-white shadow-glow">
                        <Sparkles className="h-3 w-3" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <h3 className="text-lg font-semibold tracking-tight">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

                  <div className="mt-6">
                    {price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold tracking-tight font-display">${price}</span>
                        <span className="text-sm text-muted-foreground">/mo</span>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold tracking-tight font-display">Custom</div>
                    )}
                    {price !== null && yearly && (
                      <div className="mt-1 text-xs text-muted-foreground">Billed annually</div>
                    )}
                  </div>

                  <div className="mt-6">
                    <Button
                      variant={plan.highlighted ? 'brand' : 'outline'}
                      size="default"
                      className="w-full"
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Feature list */}
                  <ul className="mt-6 space-y-3">
                    {planFeatures[plan.name].map((feature) => (
                      <li key={feature.label} className="flex items-start gap-2">
                        {feature.included ? (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        ) : (
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" />
                        )}
                        <span
                          className={cn(
                            'text-sm',
                            feature.included ? 'text-foreground' : 'text-muted-foreground/50',
                          )}
                        >
                          {feature.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Trust badges */}
        <Reveal delay={0.1}>
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
        </Reveal>

        {/* Feature comparison table */}
        <Reveal delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-2xl border border-border shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    {plans.map((plan) => (
                      <th key={plan.name} className="px-6 py-4 text-center text-sm font-semibold">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {planFeatures.Professional.map((_, rowIdx) => {
                    const labels = ['Agents', 'Workflows', 'Integrations', 'Monthly tasks', 'Support', 'Analytics', 'Data retention', 'Community', 'Workspaces', 'Security', 'API access', 'Custom integrations'];
                    return (
                      <tr key={labels[rowIdx]} className="border-b border-border last:border-0">
                        <td className="px-6 py-3 text-sm font-medium">{labels[rowIdx]}</td>
                        {plans.map((plan) => {
                          const feature = planFeatures[plan.name][rowIdx];
                          return (
                            <td key={plan.name} className="px-6 py-3 text-center">
                              {feature.included ? (
                                <Check className="mx-auto h-4 w-4 text-primary" />
                              ) : (
                                <X className="mx-auto h-4 w-4 text-muted-foreground/40" />
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Pricing FAQs */}
        <Reveal delay={0.1}>
          <div className="mt-16">
            <h3 className="text-center text-2xl font-bold tracking-tight font-display">Pricing FAQ</h3>
            <div className="mx-auto mt-8 max-w-3xl">
              <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6 shadow-soft">
                {pricingFaqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Reveal>

        {/* Enterprise CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-card to-secondary/5 p-8 text-center shadow-soft sm:p-12">
            <h3 className="text-2xl font-bold tracking-tight font-display">Need a custom solution?</h3>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
              Our Enterprise plan is built for organizations with advanced security, compliance, and scale requirements. Talk to our sales team to build a plan that fits.
            </p>
            <div className="mt-6 flex justify-center">
              <Button variant="brand" size="lg">
                Contact Sales
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
