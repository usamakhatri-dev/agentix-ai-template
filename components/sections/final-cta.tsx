'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/container';
import { Reveal } from '@/components/motion';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-card to-secondary/10 px-6 py-16 text-center shadow-premium backdrop-blur-xl sm:px-12 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 dot-bg opacity-20" />
              <div className="absolute -bottom-16 left-1/4 h-60 w-60 rounded-full bg-primary/20 blur-[100px]" />
              <div className="absolute -top-10 right-1/4 h-60 w-60 rounded-full bg-secondary/20 blur-[100px]" />
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Start your 14-day free trial
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Ready to automate your business with <span className="text-gradient">AI agents</span>?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed text-balance">
              Join thousands of teams using Agentix to save time, cut costs, and scale faster.
              No credit card required.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button variant="brand" size="lg" className="group" asChild>
                <Link href="#contact">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Talk to Sales</Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
            >
              <span>No credit card required</span>
              <span className="hidden sm:inline">·</span>
              <span>14-day free trial</span>
              <span className="hidden sm:inline">·</span>
              <span>Cancel anytime</span>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
