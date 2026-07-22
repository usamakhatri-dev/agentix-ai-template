'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, DollarSign, ArrowRight, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { Reveal } from '@/components/motion';

const EASE = [0.22, 1, 0.36, 1] as const;

interface CaseStudyStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const stats: CaseStudyStat[] = [
  { icon: TrendingUp, value: '+34.8%', label: 'Revenue increase' },
  { icon: Clock, value: '80%', label: 'Faster response times' },
  { icon: Users, value: '3x', label: 'Support capacity' },
  { icon: DollarSign, value: '$40K', label: 'Annual savings' },
];

export function CaseStudy() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-secondary/10 p-8 sm:p-12">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 dot-bg opacity-30" />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
              />
            </div>

            <div className="max-w-2xl">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Case Study
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                How Nebula scaled support to 50K customers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Nebula deployed Agentix AI to automate their customer support
                operations. Within three months, they cut response times by 80%,
                tripled their support capacity, and saved $40K in annual software costs.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
                    className="rounded-2xl border border-border bg-card/80 p-5 backdrop-blur"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-4 font-display text-3xl font-bold tracking-tight">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button variant="brand" size="lg">
                Read the full case study
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
