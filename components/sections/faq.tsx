import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';

const faqs: { question: string; answer: string }[] = [
  {
    question: 'What is Agentix AI and what does it do?',
    answer: 'Agentix AI is a platform for building and deploying autonomous AI agents that automate complex workflows. You can connect your tools, design visual workflows, and let AI agents handle tasks end-to-end without human oversight.',
  },
  {
    question: 'Do I need coding skills to use Agentix AI?',
    answer: 'No. Agentix AI is designed for non-technical users. Our visual workflow builder lets you create automations with a drag-and-drop interface. Developers can also use our REST API and webhooks for custom integrations.',
  },
  {
    question: 'How long does it take to get started?',
    answer: 'Most teams are up and running within an afternoon. Our pre-built templates and 200+ integrations make it easy to connect your tools and deploy your first agent quickly.',
  },
  {
    question: 'Is my data secure with Agentix AI?',
    answer: 'Yes. We are SOC 2 Type II, GDPR, and HIPAA compliant. All data is encrypted in transit and at rest. We also offer SSO, SAML, role-based access control, and full audit logs for enterprise customers.',
  },
  {
    question: 'Can I integrate Agentix AI with my existing tools?',
    answer: 'Yes. We support 200+ integrations out of the box, including Slack, Salesforce, HubSpot, Notion, and more. You can also build custom integrations using our REST API and webhook system.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'Starter plan includes email support and community access. Professional plan includes priority support. Enterprise customers receive a dedicated account manager and 24/7 support with an SLA guarantee.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes. You can cancel your subscription at any time from your account dashboard. There are no cancellation fees and you will retain access until the end of your billing period.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes. Every plan comes with a 14-day free trial. No credit card is required to get started. You can explore all features and deploy agents before making a commitment.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-y border-border bg-muted/20 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
              <HelpCircle className="h-7 w-7 text-primary" />
            </div>
            <SectionHeading
              align="center"
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Everything you need to know about Agentix AI. Can not find what you are looking for? Reach out to our team."
              className="mt-6"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-2xl">
            <Accordion type="single" collapsible>
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
