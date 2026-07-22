# Agentix AI — Documentation

Premium AI SaaS Landing Page Template built with Next.js, TypeScript, and Tailwind CSS.

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [System Requirements](#2-system-requirements)
3. [Installation](#3-installation)
4. [Project Structure](#4-project-structure)
5. [Configuration](#5-configuration)
6. [Customization Guide](#6-customization-guide)
7. [Components](#7-components)
8. [Styling](#8-styling)
9. [SEO](#9-seo)
10. [Accessibility](#10-accessibility)
11. [Performance](#11-performance)
12. [Deployment](#12-deployment)
13. [Troubleshooting](#13-troubleshooting)
14. [Best Practices](#14-best-practices)
15. [Version History](#15-version-history)
16. [Support](#16-support)
17. [Final Notes](#17-final-notes)

---

## 1. Introduction

### Overview

Agentix AI is a premium SaaS landing page template designed for AI automation platforms. It provides 17 pre-built sections covering the full marketing page lifecycle — from hero and feature presentation through pricing, testimonials, and contact conversion. The template is built on the Next.js App Router with static generation, ensuring fast load times and broad hosting compatibility.

### Target Audience

This template is intended for:

- Developers and agencies building SaaS landing pages for AI or automation products
- Founders who need a production-ready marketing site without starting from scratch
- Design teams who want a customizable, well-structured foundation to adapt to their brand

### Purpose

This documentation provides everything needed to install, configure, customize, and deploy the template. It is written for customers who have purchased the template and need a reference guide for ongoing development.

---

## 2. System Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| Node.js | 18.18 | 20.x LTS or later |
| npm | 9.x | 10.x or later |
| IDE | Any code editor | VS Code with ESLint and Tailwind CSS IntelliSense extensions |
| Browser | Latest Chrome, Firefox, Safari, or Edge | Latest two versions of each |

> The project uses React 19 release candidate. Ensure your Node.js version satisfies the Next.js 15 engine requirement (18.18+).

---

## 3. Installation

### Clone the Project

If you received the template as a ZIP archive, extract it and navigate into the project directory:

```bash
cd agentix-ai
```

If cloning from a Git repository:

```bash
git clone <repository-url>
cd agentix-ai
```

### Install Dependencies

```bash
npm install
```

This installs all runtime and development dependencies listed in `package.json`.

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server supports hot module reloading.

### Production Build

```bash
npm run build
```

This compiles the project and generates static pages in the `.next/` directory.

### Production Preview

```bash
npm run start
```

Serves the production build locally on port 3000. Use this to verify the production output before deploying.

---

## 4. Project Structure

```
agentix-ai/
├── app/
│   ├── globals.css              Tailwind layers + CSS custom property design tokens
│   ├── icon.svg                 Favicon (gradient SVG)
│   ├── layout.tsx               Root layout — fonts, metadata, FOUC prevention script
│   ├── manifest.ts              PWA web app manifest
│   ├── page.tsx                 Home page — composes all 17 sections
│   ├── robots.ts                robots.txt route
│   └── sitemap.ts               sitemap.xml route
├── components/
│   ├── container.tsx            Max-width layout wrapper
│   ├── motion.tsx               Reveal, Stagger, StaggerItem animation primitives
│   ├── section-heading.tsx      Reusable section header (eyebrow, title, description)
│   ├── theme-provider.tsx       Dark/light theme context with localStorage persistence
│   ├── sections/
│   │   ├── benefits.tsx         Benefit cards with statistics
│   │   ├── case-study.tsx       Case study with metrics grid
│   │   ├── contact.tsx          Contact form with validation
│   │   ├── faq.tsx              Frequently asked questions accordion
│   │   ├── features.tsx         Feature cards grid
│   │   ├── final-cta.tsx        Final call-to-action banner
│   │   ├── footer.tsx           Footer with navigation and social links
│   │   ├── header.tsx           Fixed header with mobile menu
│   │   ├── hero.tsx             Hero with animated dashboard mockup
│   │   ├── how-it-works.tsx     Four-step process walkthrough
│   │   ├── industries.tsx       Industry cards grid
│   │   ├── pricing.tsx          Pricing plans, comparison table, and FAQ
│   │   ├── showcase.tsx         Tabbed product showcase
│   │   ├── social-proof.tsx     Trusted-by logos strip
│   │   └── testimonials.tsx     Testimonials carousel
│   └── ui/
│       ├── accordion.tsx        Radix UI accordion wrapper
│       ├── button.tsx           Button with variant system (cva)
│       ├── input.tsx            Styled text input
│       ├── label.tsx            Radix UI label wrapper
│       ├── switch.tsx           Radix UI switch wrapper
│       └── textarea.tsx         Styled textarea
├── data/
│   ├── features.ts              Feature card content (icon, title, description)
│   ├── hero.ts                  Trusted-by company names
│   ├── navigation.ts            Header navigation links
│   └── testimonials.ts          Testimonial carousel content
├── lib/
│   └── utils.ts                 cn() — clsx + tailwind-merge class utility
├── .eslintrc.json
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

### Folder Purposes

| Folder | Purpose |
|--------|---------|
| `app/` | Next.js App Router entry points — layout, page, metadata, route handlers for robots/sitemap/manifest, and global styles |
| `components/` | All React components, organized into shared components, section components, and UI primitives |
| `components/sections/` | The 15 page section components that compose the landing page |
| `components/ui/` | Reusable UI primitives built on Radix UI and class-variance-authority |
| `data/` | Typed content files separating marketing copy from component logic for easy editing |
| `lib/` | Utility functions used across the project |

---

## 5. Configuration

### package.json

The `package.json` file defines the project name, version, scripts, and dependencies.

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev` | Start the development server |
| `build` | `next build` | Generate the production build |
| `start` | `next start` | Serve the production build |
| `lint` | `next lint` | Run ESLint with Next.js rules |

Key metadata fields:

| Field | Value |
|-------|-------|
| `name` | `agentix-ai-saas-template` |
| `version` | `1.0.0` |
| `license` | `MIT` |
| `author` | `Agentix Labs` |

### Next.js Configuration

The `next.config.ts` file contains a single configuration option:

```typescript
images: { unoptimized: true }
```

This disables Next.js image optimization, making the build compatible with static hosting providers that do not support server-side image processing (Netlify, Cloudflare Pages, GitHub Pages). If deploying to Vercel, you can remove this option to enable automatic image optimization.

### Tailwind Configuration

The `tailwind.config.ts` file defines:

- **Dark mode**: `class` strategy (toggled via `.dark` class on `<html>`)
- **Content paths**: `app/`, `components/`, `lib/`, `data/`
- **Custom fonts**: `--font-sans` (Inter) and `--font-display` (Sora) via CSS variables
- **Color system**: All colors reference HSL CSS custom properties defined in `globals.css`
- **Custom shadows**: `soft`, `float`, `premium`, `glow`
- **Custom animations**: `pulse-glow`, `float`, `float-slow`, `accordion-down`, `accordion-up`

### TypeScript Configuration

The `tsconfig.json` file enables:

- **Strict mode**: All strict type-checking options enabled
- **Path aliases**: `@/*` maps to the project root for clean imports
- **Module resolution**: `bundler` strategy for Next.js compatibility
- **JSX preservation**: JSX is compiled by Next.js, not tsc

### Environment Variables

The project includes a `.env` file with Supabase configuration. These variables are not required for the landing page to function — the template is a static site with no backend dependencies. If you add backend features later, you can use these variables or replace them with your own.

---

## 6. Customization Guide

### Logo

The logo appears in two places: the header (`components/sections/header.tsx`) and the footer (`components/sections/footer.tsx`). It consists of a gradient square containing a Lucide `Sparkles` icon followed by the text "Agentix AI".

To replace the logo:

1. Replace the `Sparkles` icon import with your preferred Lucide icon
2. Update the text in the `<span>` element
3. To use a custom SVG logo, replace the `<span>` block with an `<img>` or inline SVG

### Brand Name

The brand name "Agentix AI" appears in:

| Location | File |
|----------|------|
| Header logo | `components/sections/header.tsx` |
| Footer logo | `components/sections/footer.tsx` |
| Page title | `app/layout.tsx` (metadata `title.default`) |
| Manifest | `app/manifest.ts` (`name` and `short_name`) |
| Footer copyright | `components/sections/footer.tsx` |

Search for "Agentix" across the project and replace with your brand name.

### Navigation

Navigation links are defined in `data/navigation.ts`:

```typescript
export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  // ...
] as const;
```

Edit the `label` and `href` values. The `href` values correspond to the `id` attributes on each section component.

### Hero Section

The hero section (`components/sections/hero.tsx`) contains:

- **Announcement pill text**: The "New: Agentix AI v3" text near the top
- **Headline**: "The Future of AI Automation for Modern Businesses"
- **Subheadline**: The descriptive paragraph below the headline
- **CTA buttons**: "Start Free Trial" and "Watch Demo"
- **Dashboard mockup**: Sidebar items, stat cards, bar chart data, and activity feed entries are all defined as arrays within the component
- **Floating cards**: "Revenue Lift" and "Agent Response" cards with their values
- **Trusted-by logos**: Defined in `data/hero.ts`

### Features

Feature cards are defined in `data/features.ts`. Each feature has an `icon` (string matching a Lucide icon name), a `title`, and a `description`.

The icon-to-component mapping is in `components/sections/features.tsx`. To add a new icon, import it from `lucide-react` and add it to the `iconMap` object.

### Pricing

The pricing section (`components/sections/pricing.tsx`) contains all pricing logic within the component file:

- **Plans array**: Three plans (Starter, Professional, Enterprise) with monthly/yearly prices, descriptions, and feature lists
- **Feature comparison table**: A `comparisonRows` array defines each row, and `planAvailability` defines which plans include each feature
- **Pricing FAQs**: A `pricingFaqs` array with question/answer pairs
- **Enterprise CTA**: Text and button for the enterprise contact section

To change prices, edit the `monthly` and `yearly` values in the `plans` array. To add or remove features from the comparison table, edit `comparisonRows` and `planAvailability`.

### Testimonials

Testimonials are defined in `data/testimonials.ts`. Each testimonial has:

| Field | Type | Description |
|-------|------|-------------|
| `quote` | string | The testimonial text |
| `name` | string | Person's full name |
| `role` | string | Job title |
| `company` | string | Company name |
| `avatar` | string | URL to avatar image (128x128 recommended) |
| `rating` | number | Star rating (1-5) |

The carousel in `components/sections/testimonials.tsx` automatically adjusts the number of visible items based on screen width (3 on desktop, 2 on tablet, 1 on mobile).

### FAQ

The FAQ section (`components/sections/faq.tsx`) contains a `faqs` array with `q` (question) and `a` (answer) fields. Add or remove entries as needed. The Accordion component handles expand/collapse behavior automatically.

### Footer

The footer (`components/sections/footer.tsx`) contains:

- **Navigation columns**: Defined in the `footerNav` object with four categories (Product, Company, Resources, Legal)
- **Social links**: Defined in the `socials` array with icon, href, and label
- **Copyright text**: Auto-updates the year via `new Date().getFullYear()`
- **Status indicator**: "All systems operational" with a pulsing green dot

### Contact Section

The contact section (`components/sections/contact.tsx`) contains:

- **Contact info**: Defined in the `contactInfo` array (email, phone, address)
- **Form fields**: Name, email, company (optional), and message
- **Validation rules**: Defined in the `validate` function with minimum length and email format checks
- **Success/error states**: Managed by the `status` state variable

To connect the form to a backend, replace the `setTimeout` in `handleSubmit` with a `fetch` call to your API endpoint.

### Images

The template uses two types of images:

| Type | Location | How to Replace |
|------|----------|----------------|
| Avatar images | `data/testimonials.ts` | Replace the `avatar` URL with your image URL |
| Favicon | `app/icon.svg` | Replace the SVG file |

The project does not include a `public/` directory. If you add local images, create a `public/` directory at the project root and reference files with absolute paths (e.g., `/images/logo.png`).

### Icons

All icons are from [Lucide React](https://lucide.dev). To use a new icon:

1. Verify it exists in the `lucide-react` package
2. Import it in the component file: `import { IconName } from 'lucide-react'`
3. Use it in JSX: `<IconName className="h-5 w-5" />`

### Colors

Colors are defined as HSL CSS custom properties in `app/globals.css`:

```css
:root {
  --primary: 199 89% 48%;
  --secondary: 172 66% 51%;
  --accent: 43 96% 56%;
  /* ... */
}

.dark {
  --primary: 199 89% 52%;
  --secondary: 172 66% 53%;
  --accent: 43 96% 58%;
  /* ... */
}
```

To change the color palette, update the HSL values in both `:root` (light mode) and `.dark` (dark mode). All components reference these tokens via Tailwind classes (e.g., `bg-primary`, `text-secondary`), so changes propagate automatically.

### Typography

Fonts are loaded via `next/font/google` in `app/layout.tsx`:

```typescript
const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const fontDisplay = Sora({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
```

To change fonts:

1. Replace `Inter` and `Sora` with any Google Font import from `next/font/google`
2. Update the CSS variable names if desired
3. The `font-sans` and `font-display` Tailwind classes in `tailwind.config.ts` reference these variables

---

## 7. Components

### Shared Components

| Component | File | Purpose |
|-----------|------|---------|
| `Container` | `components/container.tsx` | Max-width wrapper (1280px) with responsive horizontal padding |
| `SectionHeading` | `components/section-heading.tsx` | Reusable section header with optional eyebrow, title, and description. Supports left or center alignment. |
| `Reveal` | `components/motion.tsx` | Wraps children with a scroll-triggered fade-and-rise animation. Fires once per element. |
| `Stagger` | `components/motion.tsx` | Container that staggers the animation of its children as they enter the viewport. |
| `StaggerItem` | `components/motion.tsx` | Individual item within a `Stagger` container. Animates with a slight delay relative to its siblings. |
| `ThemeProvider` | `components/theme-provider.tsx` | Context provider that manages dark/light theme state. Persists the user choice to `localStorage` and detects system preference on first visit. |

### UI Primitives

| Component | File | Purpose |
|-----------|------|---------|
| `Button` | `components/ui/button.tsx` | Button with five variants (default, brand, outline, ghost, link) and four sizes (default, sm, lg, icon). Supports `asChild` for polymorphic rendering via Radix Slot. |
| `Input` | `components/ui/input.tsx` | Styled text input with focus ring and disabled state. |
| `Textarea` | `components/ui/textarea.tsx` | Styled textarea with focus ring and minimum height. |
| `Label` | `components/ui/label.tsx` | Radix UI Label wrapper for accessible form labels. |
| `Switch` | `components/ui/switch.tsx` | Radix UI Switch wrapper for accessible toggle controls. |
| `Accordion` | `components/ui/accordion.tsx` | Radix UI Accordion wrapper with styled trigger and content. Used in the FAQ and pricing sections. |

### Section Components

| Component | File | Section ID | Purpose |
|-----------|------|------------|---------|
| `Header` | `sections/header.tsx` | — | Fixed navigation bar with logo, links, theme toggle, and mobile menu |
| `Hero` | `sections/hero.tsx` | — | Hero section with animated dashboard mockup, floating cards, and CTAs |
| `SocialProof` | `sections/social-proof.tsx` | — | Trusted-by logo strip |
| `Features` | `sections/features.tsx` | `#features` | Six feature cards in a responsive grid |
| `HowItWorks` | `sections/how-it-works.tsx` | `#how-it-works` | Four-step process walkthrough |
| `Showcase` | `sections/showcase.tsx` | `#showcase` | Tabbed product showcase with three views |
| `Benefits` | `sections/benefits.tsx` | `#benefits` | Four benefit cards with key statistics |
| `Industries` | `sections/industries.tsx` | `#industries` | Six industry cards |
| `Testimonials` | `sections/testimonials.tsx` | `#testimonials` | Responsive testimonials carousel |
| `CaseStudy` | `sections/case-study.tsx` | `#case-study` | Case study highlight with metrics grid |
| `Pricing` | `sections/pricing.tsx` | `#pricing` | Three pricing plans, comparison table, pricing FAQ, and enterprise CTA |
| `Faq` | `sections/faq.tsx` | `#faq` | Eight frequently asked questions in an accordion |
| `FinalCta` | `sections/final-cta.tsx` | `#cta` | Final call-to-action banner |
| `Contact` | `sections/contact.tsx` | `#contact` | Contact form with client-side validation |
| `Footer` | `sections/footer.tsx` | — | Footer with navigation columns, social links, and copyright |

---

## 8. Styling

### Organization

Styling is organized into three layers:

| Layer | File | Contents |
|-------|------|----------|
| Design tokens | `app/globals.css` (`:root` and `.dark`) | HSL color values, border radius, spacing |
| Tailwind config | `tailwind.config.ts` | Color mappings, fonts, shadows, animations, keyframes |
| Component classes | `app/globals.css` (`@layer components`) | Reusable utility classes: `text-gradient`, `glass-card`, `grid-bg`, `dot-bg`, `mask-fade-b` |

### Tailwind CSS Usage

All styling uses Tailwind utility classes directly in JSX. The project does not use CSS modules or styled-components. Key conventions:

- Colors reference CSS custom properties: `bg-primary`, `text-muted-foreground`, `border-border`
- Opacity modifiers are used for transparency: `bg-primary/10`, `border-border/60`
- Responsive prefixes follow a mobile-first approach: `sm:`, `md:`, `lg:`
- Dark mode variants use the `dark:` prefix (e.g., `dark:text-emerald-400`)

### Reusable UI Components

The `components/ui/` directory contains styled primitives that ensure visual consistency. Use these instead of raw HTML elements where possible:

- Use `<Button>` instead of `<button>` for consistent styling and variant support
- Use `<Input>` and `<Textarea>` for form fields with standardized focus rings
- Use `<Label>` for accessible form labels
- Use `<Switch>` for toggle controls
- Use `<Accordion>` for collapsible content

### Spacing

The project uses Tailwind's default spacing scale (based on 0.25rem increments) with one custom addition:

| Token | Value | Usage |
|-------|-------|-------|
| `18` | 4.5rem (72px) | Header height on desktop (`md:h-18`) |

Standard spacing classes (`p-4`, `gap-6`, `mt-8`, etc.) follow Tailwind defaults.

### Responsive Design

The template is mobile-first with breakpoints at:

| Prefix | Min width | Target |
|--------|-----------|--------|
| `sm:` | 640px | Large phones, small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktops |
| `xl:` | 1280px | Large desktops |

The `Container` component sets a maximum width of 1280px (`max-w-7xl`) with responsive horizontal padding (`px-4 sm:px-6 lg:px-8`).

---

## 9. SEO

### Metadata

Static metadata is defined in `app/layout.tsx` via the `metadata` export:

| Property | Value |
|----------|-------|
| `title.default` | "Agentix AI — The Future of AI Automation for Modern Businesses" |
| `title.template` | "%s \| Agentix AI" |
| `description` | Full product description |
| `keywords` | Seven relevant keywords |
| `authors` | Agentix Labs |
| `creator` | Agentix Labs |
| `metadataBase` | `https://agentix.ai` |
| `alternates.canonical` | `https://agentix.ai` |

### robots.txt

Generated dynamically via `app/robots.ts`. Allows all user agents to crawl the root path and references the sitemap URL.

### sitemap.xml

Generated dynamically via `app/sitemap.ts`. Includes the homepage URL with `lastModified`, `changeFrequency: 'weekly'`, and `priority: 1`.

### Open Graph

Open Graph tags are configured in the `metadata.openGraph` object:

| Property | Value |
|----------|-------|
| `type` | `website` |
| `locale` | `en_US` |
| `url` | `https://agentix.ai` |
| `siteName` | `Agentix AI` |

### Twitter Cards

Twitter card metadata is configured in the `metadata.twitter` object:

| Property | Value |
|----------|-------|
| `card` | `summary_large_image` |

### Web App Manifest

A PWA manifest is generated via `app/manifest.ts`:

| Property | Value |
|----------|-------|
| `name` | Agentix AI |
| `short_name` | Agentix |
| `display` | standalone |
| `theme_color` | #0ea5e9 |
| `background_color` | #ffffff |

### Structured Data

The template does not currently include JSON-LD structured data. This can be added in future versions by embedding a `<script type="application/ld+json">` tag in the layout.

---

## 10. Accessibility

The following accessibility features are implemented:

| Feature | Implementation |
|---------|----------------|
| Skip link | "Skip to main content" link in `app/page.tsx`, visible only on keyboard focus |
| Semantic landmarks | `<header>`, `<main id="main">`, `<footer>` elements |
| ARIA labels | Theme toggle (`aria-label`, `aria-pressed`), mobile menu (`aria-label`, `aria-expanded`), carousel controls (`aria-label`) |
| Form accessibility | `aria-invalid` and `aria-describedby` on form fields, `role="alert"` on error messages |
| Keyboard navigation | All interactive elements are focusable with visible focus rings (`focus-visible:ring-2`) |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables all animations and transitions |
| Color contrast | Design tokens meet WCAG AA contrast ratios in both light and dark themes |
| Accordion accessibility | Radix UI Accordion provides keyboard support, ARIA attributes, and focus management |

---

## 11. Performance

### Image Handling

The project sets `images: { unoptimized: true }` in `next.config.ts`. This makes the build compatible with static hosting providers. Testimonial avatar images are loaded with `loading="lazy"` to defer offscreen loading.

If deploying to Vercel, remove this option to enable Next.js Image Optimization with automatic format conversion and resizing.

### Bundle Optimization

| Metric | Value |
|--------|-------|
| First Load JS (homepage) | ~172 kB |
| Shared chunks | ~102 kB |
| Homepage route size | ~70 kB |

All pages are statically generated at build time, producing pre-rendered HTML with no server-side runtime cost.

### Code Quality

- Strict TypeScript with no `any` types
- ESLint with `next/core-web-vitals` rules
- No unused dependencies (all 9 runtime dependencies are actively imported)
- Content separated from components to minimize re-renders during editing

### Next.js Optimizations

| Optimization | Status |
|--------------|--------|
| Static generation | All 8 routes prerendered as static HTML |
| Font optimization | Inter and Sora loaded via `next/font/google` with `display: 'swap'` |
| FOUC prevention | Inline script in `<head>` sets theme class before hydration |
| Single-fire animations | Framer Motion `viewport={{ once: true }}` prevents re-triggering |
| Passive event listeners | Scroll and resize listeners use `{ passive: true }` |
| Debounced resize | Testimonials carousel uses `requestAnimationFrame` throttling |

---

## 12. Deployment

### Vercel

Vercel is the recommended deployment platform for Next.js.

1. Push your project to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js and configures the build settings
4. Click "Deploy"

To enable image optimization on Vercel, remove `images: { unoptimized: true }` from `next.config.ts`.

### Netlify

1. Push your project to a Git repository
2. Go to [app.netlify.com](https://app.netlify.com) and import the repository
3. Set the build command to `npm run build`
4. Set the publish directory to `.next`
5. Install the `@netlify/plugin-nextjs` plugin (Netlify usually auto-detects this)
6. Click "Deploy"

### Self-Hosted Node.js

1. Build the project:

```bash
npm run build
```

2. Start the production server:

```bash
npm run start
```

3. The server runs on port 3000 by default. Use a reverse proxy (Nginx, Caddy) to handle TLS and route traffic.

4. For process management, use PM2:

```bash
pm2 start npm --name "agentix-ai" -- start
```

---

## 13. Troubleshooting

### Installation Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| `npm install` fails with peer dependency errors | React 19 RC version conflicts | Run `npm install --legacy-peer-deps` |
| `npm install` fails with EACCES permission error | Global npm directory not writable | Use `nvm` to manage Node.js versions, or fix npm permissions |

### Build Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| `Failed to compile` with unescaped entities | Apostrophes or quotes in JSX text | Use `&apos;`, `&ldquo;`, `&rdquo;` or wrap text in curly braces |
| Type error: Property 'id' does not exist | Using `item.id` when the data interface has no `id` field | Use a field that exists (e.g., `item.title`, `item.name`) |
| `Module not found` after adding a new import | Import path incorrect | Verify the file exists and the `@/*` alias is correct |

### Dependency Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Build fails after upgrading a package | Incompatible version | Delete `node_modules` and `package-lock.json`, then run `npm install` |
| `next` command not found | Dependencies not installed | Run `npm install` before `npm run build` |

### Port Conflicts

| Problem | Cause | Solution |
|---------|-------|----------|
| `Port 3000 is in use` | Another process is using port 3000 | Run `npm run dev -- -p 3001` to use an alternate port |

### Deployment Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Images not loading on static host | Image optimization requires server runtime | Keep `images: { unoptimized: true }` in `next.config.ts` |
| Blank page after deploy | Client-side rendering issue | Check browser console for errors; verify the build completed successfully |
| Fonts not loading | Google Fonts blocked by firewall | The fonts are loaded at build time via `next/font`; ensure the build environment has internet access |

---

## 14. Best Practices

### Customization Workflow

1. **Start with content**: Edit files in `data/` first — this is the safest and fastest way to rebrand
2. **Update metadata**: Change the title, description, and URLs in `app/layout.tsx`
3. **Adjust colors**: Update HSL values in `app/globals.css` (both `:root` and `.dark`)
4. **Test in both themes**: Toggle dark/light mode to verify contrast and readability
5. **Run the build**: Execute `npm run build` before deploying to catch type and lint errors
6. **Test on mobile**: Verify responsive layouts at 320px, 768px, and 1280px widths

### Maintainability

- Keep content in `data/` files rather than hardcoding text in components
- Use the existing UI primitives (`Button`, `Input`, `Label`, etc.) instead of creating new styled elements
- Follow the established import pattern: `@/components/...`, `@/lib/...`, `@/data/...`
- Run `npm run lint` regularly to catch issues early
- Do not add dependencies without verifying they are compatible with React 19 and Next.js 15

---

## 15. Version History

### Version 1.0.0 (Current)

- Initial release
- 17 composed sections covering the full SaaS landing page
- Dark/light mode with system detection and FOUC prevention
- Animated hero dashboard mockup with floating cards
- Interactive pricing with monthly/yearly toggle and comparison table
- Responsive testimonials carousel
- Contact form with client-side validation
- Static generation with robots.txt, sitemap.xml, and PWA manifest
- Full accessibility support including reduced motion

### Future Releases

Use the following template to document future versions:

```
### Version X.Y.Z (Date)

- [Added] Description of new feature
- [Changed] Description of change
- [Fixed] Description of fix
- [Removed] Description of removal
```

---

## 16. Support

### How to Request Support

If you encounter issues or have questions about the template:

1. **Check this documentation** — Review the Troubleshooting section for common issues and solutions
2. **Check the README** — The `README.md` file contains a quick-start guide and overview
3. **Open an issue** — If the issue persists, open an issue on the repository with:
   - A clear title describing the problem
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Node.js version and operating system
4. **Email** — For private inquiries, contact **sales@agentix.ai**

### Support Scope

Support is provided on a best-effort basis. The following are covered:

- Installation and setup issues
- Build and compilation errors
- Bugs in the existing codebase

The following are not covered:

- Custom feature development
- Integration with third-party services not included in the template
- General Next.js, React, or Tailwind CSS questions unrelated to the template
- Lifetime or unlimited support

---

## 17. Final Notes

Thank you for choosing the Agentix AI template. This project is designed to provide a solid, production-ready foundation for your SaaS landing page. The architecture prioritizes clarity, performance, and maintainability — every file has a single responsibility, and every component is built to be adapted to your brand.

If you build something great with it, we would love to hear about it. For questions, bug reports, or feedback, refer to the Support section above.

---

*Agentix AI Template v1.0.0 — Documentation last updated: 2025*
