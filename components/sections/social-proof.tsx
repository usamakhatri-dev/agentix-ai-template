'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Container } from '@/components/container';
import { Reveal } from '@/components/motion';
import { stats, companyLogos, featuredPress, trustBadges } from '@/data/stats';
import type { Stat } from '@/data/stats';

function useCounter(target: number, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  const formatted = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString();
  return { ref, formatted };
}

function StatItem({ stat }: { stat: Stat }) {
  const { ref, formatted } = useCounter(stat.value, 2000, stat.decimals ?? 0);
  return (
    <div className="group relative text-center">
      <div aria-hidden className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        <span ref={ref} className="text-gradient-primary">
          {stat.prefix}
          {formatted}
          {stat.suffix}
        </span>
      </div>
      <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
    </div>
  );
}

function Wordmark({ name }: { name: string }) {
  return (
    <span
      aria-label={name}
      className="font-display text-xl font-semibold tracking-tight text-muted-foreground/55 transition-colors duration-300 hover:text-foreground"
    >
      {name}
    </span>
  );
}

export function SocialProof() {
  return (
    <section className="relative py-20 sm:py-24">
      {/* Trusted by */}
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Trusted by industry leaders
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mt-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {companyLogos.map((name) => (
            <Wordmark key={name} name={name} />
          ))}
        </div>
      </Reveal>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <StatItem stat={stat} />
          </Reveal>
        ))}
      </div>

      {/* Trust badges */}
      <Reveal delay={0.15} className="mt-14">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm font-medium text-foreground/80 shadow-soft backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <badge.icon aria-hidden className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
              {badge.label}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Featured In */}
      <Reveal delay={0.2} className="mt-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          As featured in
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
          {featuredPress.map((name) => (
            <span
              key={name}
              aria-label={name}
              className="font-display text-base font-semibold tracking-tight text-muted-foreground/50 transition-colors duration-300 hover:text-foreground sm:text-lg"
            >
              {name}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
