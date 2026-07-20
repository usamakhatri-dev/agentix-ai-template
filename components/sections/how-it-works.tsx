'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { steps } from '@/data/how-it-works';

export function HowItWorks() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From setup to scale in three steps"
          description="Get started in minutes, not months. Agentix meets you where you are and grows with your ambition."
        />
        <div className="relative mt-16">
          {/* Animated connector line */}
          <div className="absolute left-0 right-0 top-12 hidden lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="mx-auto h-px w-[70%] origin-left bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            />
          </div>
          <Stagger className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
            {steps.map((step) => (
              <StaggerItem key={step.number} className="relative">
                <div className="relative flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-border/60 bg-card shadow-soft"
                  >
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${step.accent} text-white shadow-glow`}>
                      <step.icon className="h-7 w-7" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-primary shadow-soft">
                      {step.number}
                    </span>
                    {/* Pulsing ring */}
                    <span className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.accent} opacity-0 blur-md animate-glow-pulse`} />
                  </motion.div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-14 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-5 py-2.5 text-sm text-muted-foreground shadow-soft backdrop-blur-sm">
              Average time to first automation:
              <span className="font-semibold text-foreground">under 10 minutes</span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
