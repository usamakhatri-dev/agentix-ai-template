# Agentix AI — Premium SaaS Landing Page Template

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-rsqz4vhy)

A production-ready, conversion-optimized marketing landing page for an AI automation SaaS product. Built with Next.js 13 (App Router), TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. Designed to the standard of premium SaaS sites like Linear, Vercel, Notion, and Stripe.

## Features

- **Conversion-focused sections** — Hero, social proof, features, how-it-works, industries, case study, testimonials, pricing, FAQ, final CTA, contact form, and footer.
- **Enterprise-grade trust & social proof** — animated stat counters, company logos, press mentions, security badges, and a feature comparison table.
- **Premium pricing experience** — monthly/yearly toggle with animated price transitions, highlighted "Most Popular" plan, money-back guarantee badges, and a dedicated enterprise CTA block.
- **Dark / light theme** — system-aware with manual toggle, no flash of incorrect theme (FOUC) via an inline boot script.
- **Accessibility-first** — semantic landmarks, keyboard-navigable components, visible focus states, ARIA labels, and form validation with descriptive error messages.
- **SEO-complete** — metadata, Open Graph, Twitter cards, canonical URL, `robots.txt`, `sitemap.xml`, JSON-LD structured data (Organization + SoftwareApplication), web manifest, and SVG/favicon icons.
- **Performance-tuned** — `next/font` with `display: swap`, lazy-loaded images, `prefers-reduced-motion` support, and optimized animations.
- **Responsive** — mobile-first layout from 320px to ultrawide.

## Tech Stack

| Layer       | Technology                                   |
| ----------- | -------------------------------------------- |
| Framework   | Next.js 13 (App Router)                      |
| Language    | TypeScript 5                                 |
| Styling     | Tailwind CSS 3 + CSS variables               |
| UI          | shadcn/ui (Radix primitives)                 |
| Animation   | Framer Motion                                |
| Icons       | lucide-react                                 |
| Fonts       | Inter (body) + Sora (display) via `next/font`|
| Backend     | Supabase (optional, pre-provisioned)         |

## Getting Started

### Prerequisites

- Node.js 18.17+ (or 20+)
- npm 9+ (or pnpm / yarn — commands below use npm)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The dev server starts at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm start
```

### Lint & Type Check

```bash
npm run lint
npm run typecheck
```

## Project Structure

```
app/
  globals.css         # Tailwind layers, design tokens, utilities
  layout.tsx          # Root layout, SEO metadata, structured data, fonts
  page.tsx            # Landing page composition
  robots.ts           # robots.txt route
  sitemap.ts          # sitemap.xml route
  icon.svg            # SVG favicon
components/
  container.tsx       # Max-width wrapper
  motion.tsx          # Reveal / Stagger animation primitives
  section-heading.tsx # Reusable section header
  theme-provider.tsx  # Theme context + hook
  sections/           # Page sections (hero, pricing, footer, etc.)
  ui/                 # shadcn/ui primitives
hooks/
  use-toast.ts        # Toast hook
lib/
  utils.ts            # cn() helper
public/
  manifest.webmanifest
```

## Customization

### Branding

- **Colors**: edit the CSS variables in `app/globals.css` (`--primary`, `--secondary`, `--accent`, etc.). Both light and dark themes are defined there.
- **Fonts**: swap the `Inter` / `Sora` imports in `app/layout.tsx` and update the `--font-sans` / `--font-display` variables.
- **Logo**: replace the `Sparkles` icon and "Agentix AI" wordmark in `components/sections/header.tsx` and `footer.tsx`.
- **Copy**: all marketing copy lives inline in the section components under `components/sections/`.

### Sections

Each section is a self-contained component in `components/sections/`. To reorder, edit the imports and JSX in `app/page.tsx`. To remove a section, delete its import and JSX entry — no other wiring required.

### SEO

- Update `siteUrl`, `title`, `description`, and social handles in `app/layout.tsx`.
- Replace `/og-image.png` (1200×630) and icon assets in `app/` and `public/`.
- Update the `sameAs` and `aggregateRating` fields in the JSON-LD structured data.
- Edit `app/robots.ts` and `app/sitemap.ts` to match your domain.

### Pricing

Pricing plans, features, and the comparison table are defined in the `plans`, `featureIcons`, `planAvailability`, and `comparisonRows` arrays at the top of `components/sections/pricing.tsx`. Update these arrays to change plans, prices, or feature availability — the UI updates automatically.

### Contact Form

The contact form (`components/sections/contact.tsx`) currently simulates submission with a timeout. To connect it to a real backend, replace the `await new Promise(...)` call in `handleSubmit` with a fetch to your API or Supabase Edge Function.

## Environment Variables

The project ships with a pre-provisioned Supabase instance. The following variables are pre-populated in `.env` and the hosted environment — no manual configuration is required.

| Variable                   | Purpose                                  |
| -------------------------- | ---------------------------------------- |
| `SUPABASE_URL`             | Supabase project URL                     |
| `SUPABASE_ANON_KEY`        | Supabase anon (public) key               |
| `SUPABASE_SERVICE_ROLE_KEY`| Supabase service role key (server only)  |
| `SUPABASE_DB_URL`          | Direct Postgres connection string        |

> Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client. Keep it in server-only code or Edge Functions.

## Deployment

The project is configured for Netlify (see `netlify.toml`) and is also deployable to Vercel or any Next.js-compatible host.

```bash
npm run build
```

The build outputs static pages where possible and server-rendered routes where required.

## Accessibility

- WCAG AA color contrast in both themes.
- All interactive elements are keyboard reachable with visible focus rings.
- Form fields have associated `<Label>` elements and `aria-describedby` error messaging.
- Decorative icons are marked `aria-hidden`; meaningful icons have `aria-label`.
- `prefers-reduced-motion` disables non-essential animation.

## License

This template is provided for commercial use. Replace this section with your chosen license before distribution.

---

Built with care. Ship something beautiful.
