'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, DollarSign } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';

const stats = [
  { icon: TrendingUp, value: '+34.8%', label: 'Revenue growth', sublabel: 'vs. previous quarter' },
  { icon: Clock, value: '80%', label: 'Faster response times', sublabel: 'across all channels' },
  { icon: Users, value: '3x', label: 'Customer capacity', sublabel: 'without adding headcount' },
  { icon: DollarSign, value: '$40K', label: 'Annual savings', sublabel: 'on tool consolidation' },
];

export function CaseStudy() {
  return (
    <section id="case-study" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-card to-secondary/10 p-8 shadow-premium backdrop-blur-xl sm:p-12 lg:p-16">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 dot-bg opacity-20" />
              <div className="absolute -bottom-16 left-1/4 h-60 w-60 rounded-full bg-primary/20 blur-[100px]" />
              <div className="absolute -top-10 right-1/4 h-60 w-60 rounded-full bg-secondary/20 blur-[100px]" />
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl shadow-soft">
                  Case Study
                </span>
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  How Nebula scaled support to 50K customers with Agentix
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Nebula replaced six different tools with Agentix and deployed AI agents that
                  handle 80% of customer conversations autonomously. The result: faster response
                  times, higher CSAT, and a leaner team.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {['SaaS', 'Customer Support', '50K+ users'].map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="rounded-2xl border border-border/60 bg-background/60 p-5 shadow-soft backdrop-blur-sm"
                  >
                    <s.icon className="h-5 w-5 text-primary" />
                    <div className="mt-3 font-display text-3xl font-semibold tracking-tight text-gradient">
                      {s.value}
                    </div>
                    <div className="mt-1 text-sm font-medium">{s.label}</div>
                    <div className="text-xs text-muted-foreground">{s.sublabel}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
