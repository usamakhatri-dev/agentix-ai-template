<div align="center">

# Agentix AI

A premium Next.js SaaS landing page template for AI automation platforms.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

</div>

---

## Live Demo

<!-- TODO: Replace with your deployed URL -->
**URL:** _Add your deployment URL here (e.g. `https://your-demo.vercel.app`)_

---

## Preview

> Place screenshots in a `public/screenshots/` directory and update the paths below.

| Hero | Features |
|------|----------|
| ![Hero](public/screenshots/hero.png) | ![Features](public/screenshots/features.png) |

| Pricing | Mobile |
|---------|--------|
| ![Pricing](public/screenshots/pricing.png) | ![Mobile](public/screenshots/mobile.png) |

---

## Features

### Sections

- **17 composed sections** — Header, Hero, Social Proof, Features, How It Works, Showcase, Benefits, Industries, Testimonials, Case Study, Pricing, FAQ, Final CTA, Contact, Footer
- **Animated hero dashboard** with live-updating stat cards, bar chart, activity feed, and floating notification cards
- **Interactive pricing** with monthly/yearly billing toggle, feature comparison table, and pricing-specific FAQ
- **Testimonials carousel** with responsive items-per-view, arrow navigation, and dot indicators
- **Showcase tab switcher** with three product views (AI Agents, Workflows, Analytics)
- **Contact form** with client-side validation, loading state, and success/error feedback

### Theming

- Dark and light mode with system preference detection
- FOUC prevention via inline script that sets the theme class before hydration
- HSL-based design tokens as CSS custom properties for both palettes
- Six color ramps: primary, secondary, accent, muted, destructive, and neutral

### Animation

- Scroll-triggered reveals with `viewport={{ once: true }}` for performance
- Staggered grid animations for feature cards, benefits, and industries
- CSS keyframe animations: `float`, `float-slow`, `pulse-glow`
- Full `prefers-reduced-motion` support — all animations disabled when requested

### Developer Experience

- Strict TypeScript with no `any` types
- Path aliases via `@/*` in `tsconfig.json`
- Reusable animation primitives: `Reveal`, `Stagger`, `StaggerItem`
- Content separated into typed data files in `data/` for easy customization
- Radix UI primitives for accessible accordion, label, and switch

---

## Tech Stack

| Category   | Technology                                  |
|------------|---------------------------------------------|
| Framework  | Next.js 15 (App Router)                     |
| Language   | TypeScript 5.6                              |
| UI         | React 19                                    |
| Styling    | Tailwind CSS 3.4                            |
| Animation  | Framer Motion 11                           |
| Icons      | Lucide React                               |
| Primitives | Radix UI (Accordion, Label, Switch, Slot)  |
| Fonts      | Inter (body), Sora (display) via `next/font`|
| Linting    | ESLint with `next/core-web-vitals`          |

---

## Getting Started

### Prerequisites

- **Node.js** 18.18 or later
- **npm** 9 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

### Production Preview

```bash
npm run start
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
agentix-ai/
├── app/
│   ├── globals.css              Design tokens + Tailwind layers
│   ├── icon.svg                 Favicon (gradient SVG)
│   ├── layout.tsx               Root layout — fonts, metadata, FOUC script
│   ├── manifest.ts              PWA web app manifest
│   ├── page.tsx                 Home page — composes all sections
│   ├── robots.ts                robots.txt route
│   └── sitemap.ts               sitemap.xml route
├── components/
│   ├── container.tsx            Max-width layout wrapper
│   ├── motion.tsx               Reveal, Stagger, StaggerItem primitives
│   ├── section-heading.tsx      Reusable section header
│   ├── theme-provider.tsx       Dark/light theme context
│   ├── sections/
│   │   ├── benefits.tsx
│   │   ├── case-study.tsx
│   │   ├── contact.tsx
│   │   ├── faq.tsx
│   │   ├── features.tsx
│   │   ├── final-cta.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── how-it-works.tsx
│   │   ├── industries.tsx
│   │   ├── pricing.tsx
│   │   ├── showcase.tsx
│   │   ├── social-proof.tsx
│   │   └── testimonials.tsx
│   └── ui/
│       ├── accordion.tsx        Radix accordion wrapper
│       ├── button.tsx           Button with variant system (cva)
│       ├── input.tsx            Styled text input
│       ├── label.tsx            Radix label wrapper
│       ├── switch.tsx           Radix switch wrapper
│       └── textarea.tsx         Styled textarea
├── data/
│   ├── features.ts              Feature card content
│   ├── hero.ts                  Trusted-by company names
│   ├── navigation.ts            Header navigation links
│   └── testimonials.ts          Testimonial carousel content
├── lib/
│   └── utils.ts                 cn() — clsx + tailwind-merge
├── .eslintrc.json
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Performance

- **Static generation** — all pages prerendered as static HTML at build time
- **Unoptimized images** — `next.config.ts` sets `images: { unoptimized: true }` for static hosting compatibility
- **Font optimization** — Inter and Sora loaded via `next/font/google` with `display: 'swap'`
- **Single-fire animations** — `viewport={{ once: true }}` prevents re-triggering scroll animations
- **Debounced resize** — testimonials carousel uses `requestAnimationFrame` throttling on window resize
- **Passive listeners** — scroll and resize listeners use `{ passive: true }`

---

## SEO

- Static metadata with title template (`%s | Agentix AI`), description, and keywords
- OpenGraph tags (type, locale, URL, title, description, site name)
- Twitter card (`summary_large_image`)
- Canonical URL via `alternates.canonical`
- `robots.txt` generated via `app/robots.ts` with sitemap reference
- `sitemap.xml` generated via `app/sitemap.ts`
- Web app manifest via `app/manifest.ts` with theme color and icon
- SVG favicon served from `app/icon.svg`

---

## Accessibility

- Skip-to-main-content link visible on keyboard focus
- Semantic landmarks: `<header>`, `<main>`, `<footer>`
- ARIA labels on theme toggle, menu button, carousel controls, and form inputs
- ARIA states: `aria-expanded`, `aria-pressed`, `aria-invalid`, `aria-describedby`
- Keyboard navigation with visible focus rings
- `prefers-reduced-motion` media query disables all animations
- Form validation with `role="alert"` error messages and real-time validation on blur
- Color contrast meets WCAG AA in both light and dark themes

---

## Browser Support

Tested in the latest two versions of:

- Google Chrome
- Mozilla Firefox
- Safari (macOS and iOS)
- Microsoft Edge

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Run `npm run lint` and `npm run build` to verify
5. Open a pull request with a clear description of your changes

---

## License

MIT. See the `license` field in `package.json`.

---

## Roadmap

- Blog/CMS integration via MDX with static generation
- Interactive dashboard demo with mock data
- Internationalization (i18n) via `next-intl`
- Authentication pages (login, signup, password reset)
- Storybook documentation for UI primitives
- CI/CD pipeline with GitHub Actions

---

## Support

For questions, bug reports, or customization help:

- Open an issue on the repository with a clear description and reproduction steps
- Email: **sales@agentix.ai**

Support is provided on a best-effort basis. For commercial licensing or custom development inquiries, contact the author.

---

## Credits

| Technology                                                            | Purpose                          |
|----------------------------------------------------------------------|----------------------------------|
| [Next.js](https://nextjs.org)                                        | React framework                  |
| [React](https://react.dev)                                           | UI library                       |
| [Tailwind CSS](https://tailwindcss.com)                              | Utility-first CSS framework      |
| [Framer Motion](https://www.framer.com/motion)                       | Animation library                |
| [Lucide](https://lucide.dev)                                         | Icon set                         |
| [Radix UI](https://www.radix-ui.com)                                 | Accessible headless primitives   |
| [Inter](https://rsms.me/inter) / [Sora](https://fonts.google.com/specimen/Sora) | Fonts via Google Fonts |
| [clsx](https://github.com/lukeed/clsx)                               | Class name utility               |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge)           | Tailwind class deduplication     |
| [class-variance-authority](https://cva.style)                         | Component variant management     |
