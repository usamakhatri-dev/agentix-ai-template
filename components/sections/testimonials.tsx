'use client';

import * as React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote:
      'Agentix AI replaced six tools and an entire ops workflow. We shipped our first automation in an afternoon and never looked back. The ROI was visible within the first month — our team reclaimed over 30 hours every week.',
    name: 'Sarah Chen',
    role: 'Head of Growth',
    company: 'Northwind Labs',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'The AI agents handle 80% of our support tickets autonomously. Our CSAT went up 18 points while our costs went down. It feels like magic, but the numbers are real. Onboarding took less than a day.',
    name: 'Marcus Reid',
    role: 'VP Customer Success',
    company: 'Helio Commerce',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'We automated lead scoring, enrichment, and CRM sync. Our sales team now only touches qualified opportunities. Game changer for pipeline velocity — we closed 40% more deals last quarter with the same headcount.',
    name: 'Priya Nair',
    role: 'Director of RevOps',
    company: 'Brightwave',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'The workflow builder is the best I have used — and I have used them all. It is the first tool that actually feels built for humans. Our engineers ship integrations in hours, not sprints.',
    name: 'David Okafor',
    role: 'CTO',
    company: 'Stackform',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'Agentix gave us enterprise-grade automation without an enterprise team. We scaled from 2 to 50 workflows in a quarter without hiring a single ops person. The platform grew with us seamlessly.',
    name: 'Elena Vasquez',
    role: 'COO',
    company: 'Lumen Studio',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'Reporting used to take two days. Now it is a scheduled AI report delivered every Monday at 8am. I cannot imagine going back. Our leadership team makes decisions faster because the data is always ready.',
    name: 'Tom Becker',
    role: 'Finance Lead',
    company: 'Atlas Retail',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const [perView, setPerView] = React.useState(3);

  React.useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => Math.min(maxIndex, Math.max(0, i + dir)));
  };

  const visible = testimonials.slice(index, index + perView);
  while (visible.length < perView && testimonials.length >= perView) {
    visible.push(testimonials[visible.length % testimonials.length]);
  }

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/10 blur-[140px]" />
      </div>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by teams everywhere"
          description="From scrappy startups to global enterprises — thousands of teams trust Agentix AI to run their automations."
        />

        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            <span className="font-display text-lg font-semibold">4.9/5</span>
            <span className="text-sm text-muted-foreground">from 2,400+ reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => go(-1)}
              disabled={index === 0}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-card text-foreground shadow-soft transition-all hover:border-primary/40 hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              disabled={index >= maxIndex}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-card text-foreground shadow-soft transition-all hover:border-primary/40 hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.4, ease: EASE }}
              className={cn(
                'grid gap-5',
                perView === 3 ? 'grid-cols-3' : perView === 2 ? 'grid-cols-2' : 'grid-cols-1'
              )}
            >
              {visible.map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover"
                >
                  <div aria-hidden className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Quote aria-hidden className="absolute right-5 top-5 h-10 w-10 text-primary/10 transition-colors duration-300 group-hover:text-primary/20" />
                  <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} aria-hidden className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                    <img
                      src={t.avatar}
                      alt={`Portrait of ${t.name}`}
                      loading="lazy"
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/20 transition-shadow duration-300 group-hover:ring-primary/40"
                    />
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <Reveal delay={0.1} className="mt-8 flex justify-center gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === index ? 'w-8 bg-primary' : 'w-1.5 bg-border hover:bg-muted-foreground/40'
              )}
            />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
