'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What is Agentix AI?',
    a: 'Agentix AI is a platform for deploying intelligent AI agents and building automated workflows. It connects your existing tools — Slack, Salesforce, HubSpot, and 200+ others — and automates repetitive tasks so your team can focus on high-impact work.',
  },
  {
    q: 'Do I need coding experience to use Agentix?',
    a: 'No. Agentix is built for non-technical users. You can design workflows with a drag-and-drop builder, deploy pre-configured AI agents, and connect integrations — all without writing a single line of code. Developers can extend functionality via our REST API and webhooks.',
  },
  {
    q: 'How does the AI contextual memory work?',
    a: 'Every AI agent in Agentix remembers past interactions with customers, workflows, and data sources. This context is used to deliver personalized, relevant responses — so customers never have to repeat themselves, and agents get smarter over time.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. Agentix is SOC 2 Type II, GDPR, and HIPAA compliant. All data is encrypted in transit and at rest. We support SSO/SAML, role-based access control, and full audit logs. Enterprise plans include advanced security features and custom data residency options.',
  },
  {
    q: 'Can I integrate Agentix with my existing tools?',
    a: 'Absolutely. Agentix supports 200+ integrations out of the box, including Slack, Salesforce, HubSpot, Notion, Zendesk, Jira, and more. If we do not have a native integration, you can use our REST API, webhooks, or custom integrations available on Professional and Enterprise plans.',
  },
  {
    q: 'What is included in the free trial?',
    a: 'The 14-day free trial includes full access to all Professional plan features. You can deploy AI agents, build workflows, connect integrations, and explore the analytics dashboard. No credit card is required to start your trial.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Yes. You can change your plan at any time directly from your dashboard. Upgrades take effect immediately, and downgrades take effect at the end of your current billing cycle. Changes are prorated automatically.',
  },
  {
    q: 'Do you offer discounts for startups or nonprofits?',
    a: 'Yes. We offer 50% off all plans for eligible startups, nonprofits, and educational institutions. Contact our team to learn more and apply for the discount.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-muted/20 border-y border-border/60">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about Agentix AI. Can't find an answer? Reach out to our team."
        />

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60 bg-card/40 px-5 shadow-soft backdrop-blur-sm">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b-0 px-1">
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
      </Container>
    </section>
  );
}
