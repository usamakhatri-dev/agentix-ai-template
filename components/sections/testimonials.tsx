'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import { cn } from '@/lib/utils';
import { testimonials } from '@/data/testimonials';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  const [perView, setPerView] = useState(3);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;
    const updatePerView = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (window.innerWidth < 640) {
          setPerView(1);
        } else if (window.innerWidth < 1024) {
          setPerView(2);
        } else {
          setPerView(3);
        }
      });
    };
    updatePerView();
    window.addEventListener('resize', updatePerView, { passive: true });
    return () => {
      window.removeEventListener('resize', updatePerView);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);

  useEffect(() => {
    if (current > maxIndex) {
      setCurrent(maxIndex);
    }
  }, [maxIndex, current]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const totalDots = maxIndex + 1;

  return (
    <section id="testimonials" className="border-y border-border bg-muted/20 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Testimonials"
            title="Loved by teams worldwide"
            description="See what our customers have to say about their experience with Agentix AI."
          />
        </Reveal>

        {/* Carousel */}
        <Reveal delay={0.1}>
          <div className="mt-12">
            <div className="relative overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `calc(-${current} * (100% / ${perView}))` }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="shrink-0 px-3"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                      {/* Quote icon */}
                      <Quote className="h-8 w-8 text-primary/20" />

                      {/* Stars */}
                      <div className="mt-4 flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-semibold">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              {/* Prev button */}
              <button
                onClick={prev}
                aria-label="Previous testimonials"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalDots }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={cn(
                      'h-2 rounded-full transition-all',
                      current === i ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground',
                    )}
                  />
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={next}
                aria-label="Next testimonials"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
