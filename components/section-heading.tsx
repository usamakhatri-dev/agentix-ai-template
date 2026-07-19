'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary backdrop-blur-sm shadow-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
