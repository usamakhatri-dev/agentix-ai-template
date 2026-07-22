'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion';

const EASE = [0.22, 1, 0.36, 1] as const;

export function FinalCta() {
  return (
    <section id="cta" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-secondary/10 p-8 text-center shadow-premium sm:p-12 lg:p-16">
            {/* Dot background */}
            <div
              className="absolute inset-0 -z-10 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Gradient blobs */}
            <div className="absolute -left-16 -top-16 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div
              className="absolute -bottom-16 -right-16 -z-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl animate-pulse-glow"
              style={{ animationDelay: '2s' }}
            />

            {/* Sparkles icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-glow"
            >
              <Sparkles className="h-8 w-8" />
            </motion.div>

            {/* Headline */}
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-balance font-display sm:text-4xl md:text-5xl">
              Ready to automate your business with AI agents?
            </h2>

            {/* Subtext */}
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Join thousands of teams using Agentix AI to save time, cut costs, and scale operations. Start your free trial today. No credit card required.
            </p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button variant="brand" size="lg">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Talk to Sales
              </Button>
            </motion.div>

            {/* Trust line */}
            <p className="mt-6 text-xs text-muted-foreground">
              14-day free trial &middot; No credit card required &middot; Cancel anytime
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
