import { cn } from '@/lib/utils';
interface SectionHeadingProps { eyebrow?: string; title: string; description?: string; align?: 'left' | 'center'; className?: string; }
export function SectionHeading({ eyebrow, title, description, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <span className="inline-block text-xs font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow}</span>}
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-[2.5rem]">{title}</h2>
      {description && <p className="mt-4 text-base text-muted-foreground leading-relaxed sm:text-lg">{description}</p>}
    </div>
  );
}
