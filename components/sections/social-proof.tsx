import { Container } from '@/components/container';
import { trustedBy } from '@/data/hero';

export function SocialProof() {
  return (
    <section className="border-y border-border bg-muted/20 py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Trusted by fast-growing teams worldwide
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {trustedBy.map((name) => (
            <span
              key={name}
              className="font-display text-xl font-semibold text-muted-foreground/50 transition-colors hover:text-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
