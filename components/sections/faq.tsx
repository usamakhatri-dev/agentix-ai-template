import { HelpCircle } from 'lucide-react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion'

const faqs: { question: string; answer: string }[] = [
  {
    question: 'What is Nexus and what does it do?',
    answer:
      'Nexus is an AI automation platform that lets you build, deploy, and monitor AI agents and workflows — no engineering team required. Automate support, ops, and growth tasks end-to-end.',
  },
  {
    question: 'Do I need coding skills to use Nexus?',
    answer:
      'No. Nexus is built for non-technical users. Our visual workflow builder and pre-built agent templates let you automate tasks in minutes. For advanced use cases, we offer a full API and SDK.',
  },
  {
    question: 'How long does it take to get set up?',
    answer:
      'Most teams are up and running in under an hour. Our one-click integrations and template library make it easy to connect your tools and deploy your first agent fast.',
  },
  {
    question: 'Which tools and apps does Nexus integrate with?',
    answer:
      'Nexus integrates with 200+ popular tools including Slack, Salesforce, HubSpot, Zendesk, Notion, Gmail, and more. We also offer a full API and webhooks for custom integrations.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. Nexus is SOC 2 Type II compliant with end-to-end encryption, SSO/SAML support, and granular access controls. Your data is never used to train shared models.',
  },
  {
    question: 'Can I use my own AI models?',
    answer:
      'Yes. Enterprise customers can bring their own models or connect to providers like OpenAI, Anthropic, and Google. We also support open-source models via our API.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'Starter plans include email support. Professional plans include priority support with 4-hour response times. Enterprise customers get a dedicated success manager and custom SLAs.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes. You can cancel anytime from your dashboard. Annual plans are refunded on a prorated basis. No questions asked.',
  },
]

export function Faq() {
  return (
    <section className="border-y border-border bg-muted/20 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about Nexus. Can't find an answer? Reach out to our team."
        />

        <Reveal>
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="mb-6 flex items-center justify-center gap-2 text-muted-foreground">
              <HelpCircle className="h-5 w-5" />
              <span className="text-sm">Got questions? We have answers.</span>
            </div>
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
