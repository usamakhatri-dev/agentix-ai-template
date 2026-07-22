'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion'
import { testimonials } from '@/data/testimonials'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

export function Testimonials() {
  const [perView, setPerView] = useState(3)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let frame: number | undefined
    const onResize = () => {
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const w = window.innerWidth
        setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3)
      })
    }
    onResize()
    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      window.removeEventListener('resize', onResize)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const maxIndex = Math.max(0, testimonials.length - perView)

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex)
  }, [maxIndex, index])

  const next = useCallback(() => {
    setIndex((i) => Math.min(i + 1, maxIndex))
  }, [maxIndex])

  const prev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0))
  }, [])

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by teams everywhere"
          description="Don't just take our word for it. Here's what our customers have to say."
        />

        <Reveal>
          <div className="mt-12">
            {/* Controls */}
            <div className="mb-6 flex items-center justify-end gap-2">
              <button
                onClick={prev}
                disabled={index === 0}
                aria-label="Previous"
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors',
                  index === 0
                    ? 'cursor-not-allowed opacity-40'
                    : 'hover:bg-muted'
                )}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                disabled={index >= maxIndex}
                aria-label="Next"
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors',
                  index >= maxIndex
                    ? 'cursor-not-allowed opacity-40'
                    : 'hover:bg-muted'
                )}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${index * (100 / perView)}%` }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    style={{ width: `${100 / perView}%` }}
                    className="flex-shrink-0 px-3"
                  >
                    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                      <Quote className="mb-4 h-8 w-8 text-primary/30" />
                      <div className="mb-4 flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              'h-4 w-4',
                              i < t.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-muted'
                            )}
                          />
                        ))}
                      </div>
                      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold">{t.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {t.role} · {t.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    'h-1.5 rounded-full transition-all',
                    i === index
                      ? 'w-6 bg-primary'
                      : 'w-1.5 bg-muted hover:bg-muted-foreground/50'
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
