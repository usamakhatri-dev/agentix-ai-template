# Agentix AI — Premium Next.js SaaS Template

A production-ready, fully responsive SaaS template for AI automation platforms. Built with Next.js 15, React 19, Tailwind CSS, and Framer Motion. Designed for marketplace distribution and long-term maintainability.

## Features

- **17 content sections** — Hero, Social Proof, Features, How It Works, Showcase, Benefits, Industries, Testimonials, Case Study, Pricing, FAQ, Final CTA, Contact, Footer
- **Dark / Light mode** — system-aware with FOUC prevention via inline script
- **Premium animations** — scroll reveals, stagger grids, floating cards, animated dashboard mockup
- **Fully responsive** — mobile-first design with breakpoints from 320px to 1920px+
- **SEO optimized** — static metadata, OpenGraph, Twitter cards, robots.txt, sitemap.xml, manifest
- **Accessible** — skip link, semantic HTML, ARIA labels, keyboard navigation, reduced-motion support
- **Type-safe** — strict TypeScript throughout
- **Zero runtime dependencies for data** — all content in typed data files for easy customization

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS 3.4 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Primitives | Radix UI (Accordion, Label, Switch, Slot) |
| Fonts | Inter (body), Sora (display) — via next/font |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

## Project Structure

```
├── app/
│   ├── globals.css          # Tailwind layers + design tokens
│   ├── layout.tsx            # Root layout, fonts, metadata
│   ├── page.tsx              # Home page — composes all sections
│   ├── icon.svg              # Favicon
│   ├── manifest.ts           # PWA manifest
│   ├── robots.ts             # robots.txt
│   └── sitemap.ts            # sitemap.xml
├── components/
│   ├── container.tsx         # Max-width wrapper
│   ├── motion.tsx            # Reveal, Stagger, StaggerItem
│   ├── section-heading.tsx   # Reusable section header
│   ├── theme-provider.tsx    # Dark/light context
│   ├── sections/             # 17 page sections
│   └── ui/                   # Button, Input, Textarea, Label, Switch, Accordion
├── data/
│   ├── features.ts           # Feature cards content
│   ├── hero.ts               # Trusted-by logos
│   ├── navigation.ts         # Nav links
│   └── testimonials.ts       # Testimonial carousel content
├── lib/
│   └── utils.ts              # cn() class merge utility
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Content

All text content lives in `data/` and the section component files. Edit these to rebrand:

- `data/navigation.ts` — header nav links
- `data/features.ts` — feature cards
- `data/testimonials.ts` — testimonial carousel
- `data/hero.ts` — trusted-by logos

### Colors

Design tokens are CSS variables in `app/globals.css` (both `:root` and `.dark`). Update the HSL values to change the palette:

```css
:root {
  --primary: 199 89% 48%;    /* sky blue */
  --secondary: 172 66% 51%;  /* teal */
  --accent: 43 96% 56%;      /* amber */
}
```

### Fonts

Fonts are loaded via `next/font/google` in `app/layout.tsx`. Replace `Inter` and `Sora` with any Google Font.

## Production Deployment

This template is configured for static export. `next.config.ts` sets `images: { unoptimized: true }` for compatibility with static hosts (Netlify, Vercel, Cloudflare Pages).

### Excluded from release

```
node_modules/
.next/
.git/
*.log
.env
```

## License

MIT
