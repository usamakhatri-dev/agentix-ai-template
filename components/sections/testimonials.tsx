'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import { testimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  const [perView, setPerView] = React.useState(3);
  const [index, setIndex] = React.useState(0);
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const updatePerView = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        const width = window.innerWidth;
        if (width < 640) {
          setPerView(1);
        } else if (width < 1024) {
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
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);

  React.useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [maxIndex, index]);

  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

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
        <div className="mt-14">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${index} * (100% / ${perView} + 0px))` }}
              transition={{ duration: 0.5, ease: EASE }}
              style={{ width: `${(testimonials.length / perView) * 100}%` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="shrink-0"
                  style={{ width: `${(100 / testimonials.length) * perView}%` }}
                >
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    {/* Rating */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="mt-4 text-sm leading-relaxed text-foreground">
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
                        <p className="text-sm font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    index === i ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/30',
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={index === maxIndex}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
