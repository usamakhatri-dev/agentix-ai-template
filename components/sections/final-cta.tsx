'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { Reveal } from '@/components/motion';

export function FinalCta() {
  return (
    <section id="cta" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-secondary/10 p-8 text-center sm:p-16">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 dot-bg opacity-30" />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
              />
            </div>

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-glow">
              <Sparkles className="h-7 w-7 text-white" />
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Ready to automate your business with AI agents?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Join thousands of teams using Agentix AI to save time, reduce costs,
              and scale operations without adding headcount. Start your free trial today.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="brand" size="lg" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Talk to Sales
              </Button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              14-day free trial &middot; No credit card required &middot; Cancel anytime
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
