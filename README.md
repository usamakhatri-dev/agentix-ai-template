# Agentix AI

A premium Next.js SaaS landing page template for AI automation platforms. Built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion. Production-ready, fully responsive, and optimized for commercial marketplace distribution.

---

## Live Demo

<!-- TODO: Replace with your deployed URL -->
**Live demo:** _Add your deployment URL here (e.g. `https://your-demo.vercel.app`)_

---

## Preview

> Add screenshots to a `/public/screenshots/` directory and update the image paths below.

| Hero | Features |
|------|----------|
| ![Hero Screenshot](public/screenshots/hero.png) | ![Features Screenshot](public/screenshots/features.png) |

| Pricing | Mobile |
|---------|--------|
| ![Pricing Screenshot](public/screenshots/pricing.png) | ![Mobile Screenshot](public/screenshots/mobile.png) |

---

## Features

### Layout and Sections

- **17 composed sections** — Header, Hero, Social Proof, Features, How It Works, Showcase, Benefits, Industries, Testimonials, Case Study, Pricing, FAQ, Final CTA, Contact, Footer
- **Animated dashboard mockup** in the hero with live-updating stats, bar charts, and floating notification cards
- **Interactive pricing section** with monthly/yearly billing toggle, feature comparison table, and pricing-specific FAQ accordion
- **Testimonials carousel** with responsive items-per-view, navigation arrows, and dot indicators
- **Showcase tab switcher** with three product views (AI Agents, Workflows, Analytics)
- **Contact form** with client-side validation, loading state, and success/error feedback

### Theming

- **Dark and light mode** with system preference detection
- **FOUC prevention** via inline script that sets the theme class before hydration
- **Design tokens** as CSS custom properties (HSL-based) for both light and dark palettes
- **Six color ramps** — primary, secondary, accent, muted, destructive, and neutral border/input/ring

### Animation

- **Scroll-triggered reveals** with `whileInView` and `viewport={{ once: true }}` for performance
- **Staggered grid animations** for feature cards, benefits, and industries
- **Floating cards** with CSS keyframe animations (`float`, `float-slow`, `pulse-glow`)
- **Animated number counters** and bar charts in the hero dashboard mockup
- **Reduced-motion support** — all animations disabled via `prefers-reduced-motion` media query

### Developer Experience

- **Strict TypeScript** across all files with no `any` types
- **Path aliases** via `@/*` mapping in `tsconfig.json`
- **Reusable motion primitives** — `Reveal`, `Stagger`, and `StaggerItem` components
- **Content separated into typed data files** in the `data/` directory for easy customization
- **Radix UI primitives** for accessible accordion, label, and switch components

---

## Tech Stack

| Category       | Technology                        |
|----------------|-----------------------------------|
| Framework      | Next.js 15 (App Router)           |
| Language       | TypeScript 5.6                    |
| UI Library     | React 19                          |
| Styling        | Tailwind CSS 3.4                  |
| Animation      | Framer Motion 11                  |
| Icons          | Lucide React                      |
| Primitives     | Radix UI (Accordion, Label, Switch, Slot) |
| Fonts          | Inter (body), Sora (display) via `next/font` |
| Linting        | ESLint with `next/core-web-vitals` |

---

## Getting Started

### Prerequisites

- **Node.js** 18.18 or later
- **npm** 9 or later (or compatible package manager)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server supports hot module reloading.

### Production Build

```bash
npm run build
```

This compiles the project and generates static pages. The build output is written to the `.next/` directory.

### Production Preview

```bash
npm run start
```

Serves the production build locally. Use this to verify the production output before deploying.

### Linting

```bash
npm run lint
```

Runs ESLint with the Next.js core-web-vitals configuration.

---

## Project Structure

```
agentix-ai/
├── app/
│   ├── globals.css           # Tailwind layers + CSS custom property design tokens
│   ├── icon.svg              # Favicon (gradient SVG)
│   ├── layout.tsx            # Root layout — fonts, metadata, FOUC prevention script
│   ├── manifest.ts           # PWA web app manifest
│   ├── page.tsx              # Home page — composes all 17 sections
│   ├── robots.ts             # robots.txt route
│   └── sitemap.ts            # sitemap.xml route
├── components/
│   ├── container.tsx         # Max-width layout wrapper
│   ├── motion.tsx            # Reveal, Stagger, StaggerItem animation primitives
│   ├── section-heading.tsx   # Reusable section header with eyebrow, title, description
│   ├── theme-provider.tsx    # Dark/light theme context with localStorage persistence
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
│       ├── accordion.tsx     # Radix UI accordion wrapper
│       ├── button.tsx        # Button with variant system (cva)
│       ├── input.tsx         # Styled text input
│       ├── label.tsx         # Radix UI label wrapper
│       ├── switch.tsx        # Radix UI switch wrapper
│       └── textarea.tsx      # Styled textarea
├── data/
│   ├── features.ts           # Feature card content
│   ├── hero.ts                # Trusted-by company names
│   ├── navigation.ts         # Header navigation links
│   └── testimonials.ts        # Testimonial carousel content
├── lib/
│   └── utils.ts              # cn() — clsx + tailwind-merge class utility
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

- **Static generation** — all pages are prerendered as static HTML at build time
- **Unoptimized images** — `next.config.ts` sets `images: { unoptimized: true }` for compatibility with static hosting providers (Netlify, Vercel, Cloudflare Pages)
- **Font optimization** — Inter and Sora loaded via `next/font/google` with `display: 'swap'` to prevent FOIT
- **Single-fire animations** — Framer Motion `viewport={{ once: true }}` prevents re-triggering scroll animations
- **Debounced resize listener** — the testimonials carousel uses `requestAnimationFrame` throttling on window resize
- **Passive event listeners** — scroll and resize listeners use `{ passive: true }` to avoid blocking the main thread
- **CSS custom properties** — design tokens avoid JavaScript-based theming overhead

---

## SEO

- **Static metadata** — title, description, keywords, authors, and creator defined in `app/layout.tsx`
- **Title template** — `%s | Agentix AI` pattern for consistent page titles
- **OpenGraph tags** — type, locale, URL, title, description, and site name
- **Twitter card** — `summary_large_image` configuration
- **Canonical URL** — set via `alternates.canonical`
- **robots.txt** — generated via `app/robots.ts` with sitemap reference
- **sitemap.xml** — generated via `app/sitemap.ts` with `lastModified` and `changeFrequency`
- **Web app manifest** — `app/manifest.ts` with theme color, display mode, and icon
- **Robots meta** — `index: true`, `follow: true` with `max-image-preview: large` and `max-snippet: -1`
- **SVG favicon** — gradient icon served from `app/icon.svg`

---

## Accessibility

- **Skip-to-main-content link** — visible on keyboard focus
- **Semantic landmarks** — `<header>`, `<main>`, `<footer>` with `id="main"` on the main element
- **ARIA labels** — on theme toggle, menu button, carousel controls, and form inputs
- **ARIA states** — `aria-expanded` on mobile menu, `aria-pressed` on theme toggle, `aria-invalid` and `aria-describedby` on form fields
- **Keyboard navigation** — all interactive elements are focusable with visible focus rings
- **Reduced motion** — `prefers-reduced-motion` media query disables all animations and transitions
- **Form validation** — `role="alert"` on error messages, real-time validation on blur, clear error text
- **Color contrast** — design tokens meet WCAG AA contrast ratios in both light and dark themes

---

## Browser Support

Tested and supported in the latest two versions of:

- Google Chrome
- Mozilla Firefox
- Safari (macOS and iOS)
- Microsoft Edge

Requires a browser that supports CSS custom properties, `backdrop-filter`, and `Intersection Observer`.

---

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes with clear, descriptive messages
4. Run `npm run lint` and `npm run build` to verify
5. Open a pull request

Please ensure all builds pass and no new linting errors are introduced.

---

## License

This project is licensed under the **MIT License**. See the `license` field in `package.json` for details. You are free to use, modify, and distribute this template for personal and commercial projects.

---

## Roadmap

The following improvements are planned for future versions:

- **Blog/CMS integration** — MDX-powered blog with static generation for content marketing
- **Interactive dashboard demo** — live, interactive preview with mock data replacing the static mockup
- **Internationalization (i18n)** — multi-language support via `next-intl`
- **Authentication pages** — login, signup, and password reset screens
- **Component documentation** — Storybook stories for all UI primitives and section components
- **CI/CD pipeline** — GitHub Actions workflow for automated lint, type-check, and deploy
- **Analytics integration** — ready-to-use integration points for Plausible or PostHog

---

## Support

If you have questions, encounter issues, or need help customizing the template:

- **Email:** sales@agentix.ai
- **Documentation:** Refer to this README and the inline code comments
- **Issues:** Open an issue on the repository with a clear description and reproduction steps

For commercial licensing inquiries or custom development, contact the author.

---

## Credits

| Technology     | Purpose                          |
|----------------|----------------------------------|
| [Next.js](https://nextjs.org)       | React framework and static generation |
| [React](https://react.dev)          | UI component library             |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS framework   |
| [Framer Motion](https://www.framer.com/motion) | Animation library      |
| [Lucide](https://lucide.dev)        | Open-source icon set             |
| [Radix UI](https://www.radix-ui.com) | Accessible headless UI primitives |
| [Inter](https://rsms.me/inter)      | Body font (via Google Fonts)     |
| [Sora](https://fonts.google.com/specimen/Sora) | Display font (via Google Fonts) |
| [clsx](https://github.com/lukeed/clsx) | Class name utility             |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Tailwind class deduplication |
| [class-variance-authority](https://cva.style) | Component variant management |
