'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import { testimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const [perView, setPerView] = React.useState(3);
  const [start, setStart] = React.useState(0);

  React.useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const maxStart = Math.max(0, testimonials.length - perView);
  const clampedStart = Math.min(start, maxStart);
  const visible = testimonials.slice(clampedStart, clampedStart + perView);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-muted/20 border-y border-border/60">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by teams worldwide"
            description="Don't take our word for it. Hear from the teams using Agentix to transform their operations."
          />
          <div className="flex items-center gap-2">
            <button
              onClick={() => setStart((s) => Math.max(0, s - 1))}
              disabled={clampedStart === 0}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/50 text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setStart((s) => Math.min(maxStart, s + 1))}
              disabled={clampedStart === maxStart}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/50 text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Reveal className="mt-12 overflow-hidden">
          <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))` }}>
            <AnimatePresence mode="wait">
              {visible.map((t) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex h-full flex-col rounded-2xl border border-border/60 bg-card/50 p-6 shadow-soft backdrop-blur-sm"
                >
                  <Quote className="h-8 w-8 text-primary/20" />
                  <div className="mt-3 flex items-center gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm text-foreground/80 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                    {/* eslint-disable-next-line @next/next/no-img-element -- static export uses unoptimized images */}
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxStart + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                'h-2 rounded-full transition-all',
                i === clampedStart ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50',
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
