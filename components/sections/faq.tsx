'use client';

import { HelpCircle, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import { faqs } from '@/data/faq';

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about Agentix AI. Cannot find an answer? Reach out to our team."
        />
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60 bg-card/40 px-5 shadow-soft backdrop-blur-sm">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-0 px-1">
                <AccordionTrigger className="group text-left text-base font-medium hover:no-underline">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-4 w-4 shrink-0 text-primary/60 transition-colors group-hover:text-primary" />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  <span className="pl-7 block">{faq.a}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-5 py-2.5 text-sm text-muted-foreground shadow-soft backdrop-blur-sm">
            <MessageSquare className="h-4 w-4 text-primary" />
            Still have questions?
            <Link href="#contact" className="font-medium text-primary hover:underline">
              Talk to our team
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
