import { Container } from '@/components/container'
import { Reveal } from '@/components/motion'
import { trustedBy } from '@/data/hero'

export function SocialProof() {
  return (
    <section className="border-y border-border bg-muted/20 py-12">
      <Container>
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by industry-leading teams worldwide
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
