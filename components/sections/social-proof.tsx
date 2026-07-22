'use client';

import { Container } from '@/components/container';
import { Reveal } from '@/components/motion';
import { trustedBy } from '@/data/hero';

export function SocialProof() {
  return (
    <section className="py-12 border-y border-border/60 bg-muted/20">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Trusted by fast-growing teams worldwide
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="font-display text-lg font-semibold tracking-tight text-muted-foreground transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
