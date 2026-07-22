'use client';

import * as React from 'react';
import {
  Check,
  Sparkles,
  ArrowRight,
  Shield,
  CreditCard,
  RefreshCw,
  Minus,
  Building2,
  Headphones,
  KeyRound,
  FileCheck,
  Cpu,
  Bot,
  FolderKanban,
  Users,
  Code2,
  BarChart3,
  LifeBuoy,
  Plug,
  Lock,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

type FeatureKey =
  | 'aiAutomation'
  | 'unlimitedProjects'
  | 'teamCollab'
  | 'apiAccess'
  | 'analytics'
  | 'prioritySupport'
  | 'customIntegrations'
  | 'advancedSecurity'
  | 'dedicatedCSM'
  | 'sso'
  | 'sla'
  | 'customModels';

interface Plan {
  name: string;
  description: string;
  monthly: number | null;
  yearly: number | null;
  cta: string;
  ctaHref: string;
  highlighted: boolean;
  features: { key: FeatureKey; label: string }[];
}

const plans: Plan[] = [
  {
    name: 'Starter',
    description: 'For small teams getting started with automation.',
    monthly: 29,
    yearly: 23,
    cta: 'Get Started',
    ctaHref: '#cta',
    highlighted: false,
    features: [
      { key: 'aiAutomation', label: 'AI Automation' },
      { key: 'unlimitedProjects', label: 'Unlimited Projects' },
      { key: 'teamCollab', label: 'Team Collaboration' },
      { key: 'apiAccess', label: 'API Access' },
      { key: 'analytics', label: 'Analytics Dashboard' },
    ],
  },
  {
    name: 'Professional',
    description: 'For growing teams that need power and scale.',
    monthly: 89,
    yearly: 71,
    cta: 'Start Free Trial',
    ctaHref: '#cta',
    highlighted: true,
    features: [
      { key: 'aiAutomation', label: 'AI Automation' },
      { key: 'unlimitedProjects', label: 'Unlimited Projects' },
      { key: 'teamCollab', label: 'Team Collaboration' },
      { key: 'apiAccess', label: 'API Access' },
      { key: 'analytics', label: 'Advanced Analytics Dashboard' },
      { key: 'prioritySupport', label: 'Priority Support' },
      { key: 'customIntegrations', label: 'Custom Integrations' },
      { key: 'advancedSecurity', label: 'Advanced Security' },
    ],
  },
  {
    name: 'Enterprise',
    description: 'For organizations with advanced requirements.',
    monthly: null,
    yearly: null,
    cta: 'Contact Sales',
    ctaHref: '#enterprise',
    highlighted: false,
    features: [
      { key: 'aiAutomation', label: 'AI Automation' },
      { key: 'unlimitedProjects', label: 'Unlimited Projects' },
      { key: 'teamCollab', label: 'Team Collaboration' },
      { key: 'apiAccess', label: 'API Access' },
      { key: 'analytics', label: 'Advanced Analytics Dashboard' },
      { key: 'prioritySupport', label: 'Priority Support' },
      { key: 'customIntegrations', label: 'Custom Integrations' },
      { key: 'advancedSecurity', label: 'Advanced Security' },
      { key: 'dedicatedCSM', label: 'Dedicated Success Manager' },
      { key: 'sso', label: 'SSO & SAML' },
      { key: 'sla', label: 'Custom SLA' },
      { key: 'customModels', label: 'Custom AI Models' },
    ],
  },
];

const featureIcons: Record<FeatureKey, React.ComponentType<{ className?: string }>> = {
  aiAutomation: Bot,
  unlimitedProjects: FolderKanban,
  teamCollab: Users,
  apiAccess: Code2,
  analytics: BarChart3,
  prioritySupport: LifeBuoy,
  customIntegrations: Plug,
  advancedSecurity: Lock,
  dedicatedCSM: Headphones,
  sso: KeyRound,
  sla: FileCheck,
  customModels: Cpu,
};

const planAvailability: Record<FeatureKey, [boolean, boolean, boolean]> = {
  aiAutomation: [true, true, true],
  unlimitedProjects: [true, true, true],
  teamCollab: [true, true, true],
  apiAccess: [false, true, true],
  analytics: [true, true, true],
  prioritySupport: [false, true, true],
  customIntegrations: [false, true, true],
  advancedSecurity: [false, true, true],
  dedicatedCSM: [false, false, true],
  sso: [false, false, true],
  sla: [false, false, true],
  customModels: [false, false, true],
};

const comparisonRows: { key: FeatureKey; label: string }[] = [
  { key: 'aiAutomation', label: 'AI Automation' },
  { key: 'unlimitedProjects', label: 'Unlimited Projects' },
  { key: 'teamCollab', label: 'Team Collaboration' },
  { key: 'apiAccess', label: 'API Access' },
  { key: 'analytics', label: 'Analytics Dashboard' },
  { key: 'prioritySupport', label: 'Priority Support' },
  { key: 'customIntegrations', label: 'Custom Integrations' },
  { key: 'advancedSecurity', label: 'Advanced Security' },
  { key: 'dedicatedCSM', label: 'Dedicated Success Manager' },
  { key: 'sso', label: 'SSO & SAML' },
  { key: 'sla', label: 'Custom SLA' },
  { key: 'customModels', label: 'Custom AI Models' },
];

const trustBadges = [
  { icon: RefreshCw, label: '30-Day Money Back Guarantee' },
  { icon: CreditCard, label: 'No Credit Card Required' },
  { icon: Shield, label: 'Cancel Anytime' },
];

const pricingFaqs = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. You can cancel your subscription at any time directly from your dashboard. Cancellations take effect at the end of your current billing cycle — no fees, no questions asked.',
  },
  {
    q: 'Can I upgrade later?',
    a: 'Absolutely. Upgrade, downgrade, or switch between monthly and yearly billing at any time. Changes are prorated automatically and take effect immediately.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'We offer a 30-day money-back guarantee on all paid plans. If you are not satisfied within the first 30 days, contact our team for a full refund — no hassle.',
  },
  {
    q: 'Do you provide invoices?',
    a: 'Yes. Every payment generates a downloadable invoice in your dashboard. Enterprise customers can request custom billing, consolidated invoicing, and PO-based billing.',
  },
  {
    q: 'Can I use Agentix for commercial projects?',
    a: 'Yes. All plans, including Starter, allow commercial use. You can use Agentix AI to build and deploy automations for clients, customers, and internal teams without restrictions.',
  },
  {
    q: 'Do you offer team discounts?',
    a: 'Yes. Yearly billing saves 20% compared to monthly. Enterprise plans include volume discounts, and we offer 50% off for eligible startups, nonprofits, and educational institutions.',
  },
];

function AvailabilityCell({ available }: { available: boolean }) {
  if (available) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
        <Check className="h-3.5 w-3.5" />
      </span>
    );
  }
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
      <Minus className="h-3.5 w-3.5" />
    </span>
  );
}

export function Pricing() {
  const [yearly, setYearly] = React.useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-80 w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      </div>
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="Start free, upgrade when you are ready. No hidden fees, no surprises — cancel anytime."
        />

        <Reveal delay={0.1} className="mt-8 flex items-center justify-center gap-3">
          <span className={cn('text-sm font-medium transition-colors', !yearly && 'text-foreground', yearly && 'text-muted-foreground')}>
            Monthly
          </span>
          <div className="relative flex items-center">
            <Switch checked={yearly} onCheckedChange={setYearly} aria-label="Toggle yearly billing" />
          </div>
          <span className={cn('text-sm font-medium transition-colors', yearly && 'text-foreground', !yearly && 'text-muted-foreground')}>
            Yearly
          </span>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            Save 20%
          </span>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: plan.highlighted ? -4 : -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 backdrop-blur-sm',
                  plan.highlighted
                    ? 'border-primary/40 bg-card/80 shadow-premium lg:-translate-y-3'
                    : 'border-border/60 bg-card/50 shadow-soft'
                )}
              >
                {plan.highlighted && (
                  <>
                    <div aria-hidden className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 opacity-60 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-glow">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </div>
                  </>
                )}
                <h3 className="font-display text-xl font-semibold tracking-tight">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mt-5 flex h-12 items-end gap-1">
                  {plan.monthly !== null ? (
                    <>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={yearly ? 'yearly' : 'monthly'}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                          className="font-display text-4xl font-semibold tracking-tight"
                        >
                          ${yearly ? plan.yearly : plan.monthly}
                        </motion.span>
                      </AnimatePresence>
                      <span className="mb-1 text-sm text-muted-foreground">/mo</span>
                      {yearly && (
                        <span className="mb-1 ml-1 text-xs text-muted-foreground">billed yearly</span>
                      )}
                    </>
                  ) : (
                    <span className="font-display text-4xl font-semibold tracking-tight">Custom</span>
                  )}
                </div>

                <Button
                  asChild
                  variant={plan.highlighted ? 'brand' : 'outline'}
                  size="lg"
                  className="group/btn mt-6 w-full"
                >
                  <Link href={plan.ctaHref}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>

                <ul className="mt-7 space-y-3 border-t border-border/60 pt-6">
                  {plan.features.map((f) => {
                    const Icon = featureIcons[f.key];
                    return (
                      <li key={f.key} className="flex items-start gap-2.5 text-sm">
                        <span
                          className={cn(
                            'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md',
                            plan.highlighted ? 'bg-primary/15 text-primary' : 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400'
                          )}
                        >
                          <Icon className="h-3 w-3" />
                        </span>
                        <span className="text-foreground/80">{f.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2} className="mt-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 rounded-2xl border border-border/60 bg-card/40 px-6 py-5 shadow-soft backdrop-blur-sm sm:flex-row sm:gap-8">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                  <badge.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-foreground/80">{badge.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-20">
          <SectionHeading
            align="center"
            title="Compare plans"
            description="Every feature, side by side. Pick the plan that fits your team."
          />
        </Reveal>
        <Reveal delay={0.2} className="mt-10 overflow-x-auto">
          <div className="min-w-[640px] overflow-hidden rounded-2xl border border-border/60 bg-card/40 shadow-soft backdrop-blur-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/30">
                  <th scope="col" className="px-6 py-5 text-left font-semibold">
                    Features
                  </th>
                  <th scope="col" className="px-6 py-5 text-center font-semibold">
                    Starter
                  </th>
                  <th scope="col" className="px-6 py-5 text-center font-semibold">
                    <span className="inline-flex items-center gap-1.5 text-primary">
                      Professional
                      <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                        Popular
                      </span>
                    </span>
                  </th>
                  <th scope="col" className="px-6 py-5 text-center font-semibold">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => {
                  const Icon = featureIcons[row.key];
                  const availability = planAvailability[row.key];
                  return (
                    <tr
                      key={row.key}
                      className={cn(
                        'border-b border-border/40 transition-colors hover:bg-muted/20',
                        idx === comparisonRows.length - 1 && 'border-b-0'
                      )}
                    >
                      <th scope="row" className="px-6 py-4 text-left font-medium">
                        <span className="flex items-center gap-2.5">
                          <Icon aria-hidden className="h-4 w-4 text-muted-foreground" />
                          {row.label}
                        </span>
                      </th>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <AvailabilityCell available={availability[0]} />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <AvailabilityCell available={availability[1]} />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <AvailabilityCell available={availability[2]} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-20">
          <SectionHeading
            align="center"
            title="Pricing questions, answered"
            description="Everything you need to know before you choose a plan."
          />
        </Reveal>
        <Reveal delay={0.2} className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60 bg-card/40 px-5 shadow-soft backdrop-blur-sm">
            {pricingFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`pricing-${i}`} className="border-b-0 px-1">
                <AccordionTrigger className="group text-left text-base font-medium hover:no-underline">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-4 w-4 shrink-0 text-primary/60 transition-colors group-hover:text-primary" />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  <span className="block pl-7">{faq.a}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.2} className="mt-20">
          <div
            id="enterprise"
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-card to-secondary/10 px-6 py-14 shadow-premium backdrop-blur-xl sm:px-12 sm:py-16"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 dot-bg opacity-20" />
              <div className="absolute -bottom-16 left-1/4 h-60 w-60 rounded-full bg-primary/20 blur-[100px]" />
              <div className="absolute -top-10 right-1/4 h-60 w-60 rounded-full bg-secondary/20 blur-[100px]" />
            </div>
            <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl shadow-soft">
                  <Building2 className="h-3.5 w-3.5 text-primary" />
                  Enterprise
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                  Need a custom AI solution?
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Get tailored AI automation, dedicated support, custom SLAs, and enterprise-grade security. Our team will design a deployment that fits your organization.
                </p>
              </div>
              <Button asChild variant="brand" size="lg" className="group/btn shrink-0">
                <Link href="#contact">
                  Talk to Sales
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {['SOC 2 Type II', 'GDPR Ready', '99.9% Uptime SLA'].map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              {t}
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.3} className="mt-4 text-center text-xs text-muted-foreground">
          All plans include a 14-day free trial. No credit card required.
        </Reveal>
      </Container>
    </section>
  );
}
