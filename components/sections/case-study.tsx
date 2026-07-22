'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, DollarSign, ArrowRight, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion';

const EASE = [0.22, 1, 0.36, 1] as const;

interface CaseStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const stats: CaseStat[] = [
  { icon: TrendingUp, value: '+34.8%', label: 'Revenue increase' },
  { icon: Clock, value: '80%', label: 'Faster response times' },
  { icon: Users, value: '3x', label: 'Customer capacity' },
  { icon: DollarSign, value: '$40K', label: 'Annual savings' },
];

export function CaseStudy() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-card to-secondary/5 p-8 shadow-premium sm:p-12 lg:p-16">
            {/* Dot background */}
            <div
              className="absolute inset-0 -z-10 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Gradient blobs */}
            <div className="absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />
            <div
              className="absolute -bottom-20 -right-20 -z-10 h-72 w-72 rounded-full bg-secondary/15 blur-3xl animate-pulse-glow"
              style={{ animationDelay: '2s' }}
            />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              {/* Left: content */}
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Case Study
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance font-display sm:text-4xl">
                  How Nebula scaled support to 50K customers
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Nebula deployed Agentix AI to automate their customer support operations. Within three months, they cut response times by 80%, increased CSAT from 82% to 97%, and scaled to handle 50,000 customers without expanding their team.
                </p>

                <div className="mt-8">
                  <Button variant="brand" size="default">
                    Read full case study
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Right: stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
                      className="rounded-2xl border border-border bg-card/80 p-5 shadow-soft backdrop-blur-sm"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-4 text-3xl font-bold tracking-tight font-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
