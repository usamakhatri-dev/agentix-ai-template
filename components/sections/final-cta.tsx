'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, CheckCircle2, Sparkles } from 'lucide-react';
import { Container } from '@/components/container';
import { Reveal } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { finalCtaPoints } from '@/data/final-cta';

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-card to-secondary/10 px-6 py-16 text-center shadow-premium backdrop-blur-xl sm:px-12 sm:py-20">
            {/* Background effects */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 blur-[120px]"
              />
              <div className="absolute -bottom-20 left-1/4 h-60 w-60 rounded-full bg-accent/20 blur-[100px]" />
              <div className="absolute -top-10 right-1/4 h-60 w-60 rounded-full bg-secondary/20 blur-[100px]" />
            </div>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl shadow-soft"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Start automating today
            </motion.span>

            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Ready to put your business on <span className="text-gradient">autopilot</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              Join 50,000+ teams using Agentix AI to automate workflows, engage customers, and scale without limits.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="brand" size="lg" className="group" asChild>
                <Link href="#cta">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link href="#demo">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Book a Demo
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {finalCtaPoints.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  {p}
                </motion.div>
              ))}
            </div>

            {/* Decorative sparkle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute right-12 top-12 hidden md:block"
            >
              <Sparkles className="h-6 w-6 text-primary/30" />
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
