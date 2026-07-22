'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '@/components/container'
import { Reveal } from '@/components/motion'
import { Button } from '@/components/ui/button'

const EASE = [0.22, 1, 0.36, 1] as const

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 dot-bg" />
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <Container>
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/10 p-10 text-center md:p-16"
          >
            <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Sparkles className="h-7 w-7" />
            </span>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to automate the busywork?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Join thousands of teams using Nexus to scale without adding
              headcount. Start your free trial today — no credit card required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start free trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Talk to sales</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              14-day free trial · No credit card required · Cancel anytime
            </p>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  )
}
