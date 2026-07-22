import { HelpCircle } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Agentix AI and what does it do?',
    answer:
      'Agentix AI is a platform for building, deploying, and managing autonomous AI agents and automated workflows. It connects your existing tools, remembers context across interactions, and handles complex tasks end-to-end with minimal human oversight.',
  },
  {
    question: 'Do I need coding skills to use Agentix AI?',
    answer:
      'No. Our visual workflow builder lets you design and deploy agents without writing code. For advanced use cases, we offer a full REST API and webhook system for custom integrations.',
  },
  {
    question: 'How long does it take to get started?',
    answer:
      'Most teams are up and running within a single afternoon. Our pre-built templates and 200+ integrations let you connect your tools and deploy your first agent in minutes.',
  },
  {
    question: 'Is my data secure with Agentix AI?',
    answer:
      'Yes. We are SOC 2 Type II, GDPR, and HIPAA compliant. All data is encrypted end-to-end, and we support SSO/SAML, role-based access control, and comprehensive audit logs.',
  },
  {
    question: 'Can I integrate Agentix AI with my existing tools?',
    answer:
      'Absolutely. We offer 200+ native integrations including Slack, Salesforce, HubSpot, Notion, and more. You can also build custom integrations using our REST API and webhooks.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'All plans include access to our documentation and community forum. Professional and Enterprise plans include priority email support, and Enterprise customers get a dedicated success manager.',
  },
  {
    question: 'Can I change or cancel my plan at any time?',
    answer:
      'Yes. You can upgrade, downgrade, or cancel your plan at any time from your dashboard. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Do you offer a free trial?',
    answer:
      'Yes. Every paid plan comes with a 14-day free trial. No credit card is required to start, and you can explore all features before committing.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-y border-border bg-muted/20 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
              <HelpCircle className="h-7 w-7" />
            </div>
            <SectionHeading
              align="center"
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Everything you need to know about Agentix AI. Cannot find what you are looking for? Reach out to our team."
              className="mt-6"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6 shadow-soft">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
