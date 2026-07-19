# Agentix AI Template — Documentation

Comprehensive documentation for developers working with the Agentix AI landing page template.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Design System](#design-system)
- [Components](#components)
- [Sections](#sections)
- [Theming](#theming)
- [SEO Configuration](#seo-configuration)
- [Forms and Validation](#forms-and-validation)
- [Animations](#animations)
- [Accessibility](#accessibility)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)
- [Troubleshooting](#troubleshooting)

---

## Overview

Agentix AI is a premium, production-ready SaaS landing page template built with Next.js 13 (App Router), TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. It is designed for commercial distribution and follows the conventions of leading SaaS marketing sites.

## Getting Started

### Prerequisites

- Node.js 18.17+ (or 20+)
- npm 9+ (or pnpm / yarn)

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

### Lint and Type Check

```bash
npm run lint
npm run typecheck
```

---

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

---

## Architecture

### App Router

The project uses the Next.js App Router. The root layout (`app/layout.tsx`) defines global metadata, fonts, structured data, and the theme boot script. The landing page (`app/page.tsx`) composes all sections in order.

### Client vs Server Components

Section components that use hooks (`useState`, `useEffect`) or Framer Motion are marked with the `'use client'` directive at the top of the file. Static components remain server components by default.

### Theme Provider

A custom `ThemeProvider` (`components/theme-provider.tsx`) manages light/dark theme via a React context. An inline boot script in `<head>` applies the stored or system-preferred theme before hydration to prevent a flash of incorrect theme (FOUC).

---

## Design System

### Color Tokens

All colors are defined as CSS variables in `app/globals.css` under `:root` (light) and `.dark` (dark). The system includes:

- `--primary`, `--secondary`, `--accent` — brand colors
- `--success`, `--warning`, `--error` — semantic colors
- Neutral tones with multiple shades

### Typography

- **Body font**: Inter (via `next/font/google`)
- **Display font**: Sora (via `next/font/google`)
- Font variables: `--font-sans`, `--font-display`
- Line spacing: 150% for body, 120% for headings
- Maximum 3 font weights per font family

### Spacing

The project uses a consistent 8px spacing system via Tailwind's spacing scale.

### Shadows

Custom shadow utilities (`shadow-soft`, `shadow-premium`, `shadow-glow`, `shadow-float`, `shadow-card-hover`) are defined in `tailwind.config.ts`.

---

## Components

### Reusable Primitives

| Component         | File                              | Purpose                                  |
| ----------------- | --------------------------------- | ---------------------------------------- |
| `Container`       | `components/container.tsx`        | Max-width content wrapper                |
| `Reveal`          | `components/motion.tsx`           | Scroll-triggered fade-up animation       |
| `Stagger`         | `components/motion.tsx`           | Staggered children container             |
| `StaggerItem`     | `components/motion.tsx`           | Child of Stagger with fade-up            |
| `SectionHeading`  | `components/section-heading.tsx`  | Reusable section header (eyebrow, title) |
| `ThemeProvider`   | `components/theme-provider.tsx`   | Theme context provider                   |

### shadcn/ui

The full shadcn/ui component library is pre-installed in `components/ui/`. Each component is a thin wrapper around Radix UI primitives styled with Tailwind. See the [shadcn/ui docs](https://ui.shadcn.com) for usage.

---

## Sections

All sections live in `components/sections/` and are composed in `app/page.tsx`:

| Section       | Component         | Anchor     |
| ------------- | ----------------- | ---------- |
| Header        | `Header`          | —          |
| Hero          | `Hero`           | —          |
| Social Proof  | `SocialProof`    | `#social-proof` |
| Features      | `Features`        | `#features`|
| How It Works  | `HowItWorks`     | `#how-it-works` |
| Industries    | `Industries`      | `#industries` |
| Case Study    | `CaseStudy`       | —          |
| Testimonials  | `Testimonials`    | `#testimonials` |
| Pricing       | `Pricing`         | `#pricing` |
| FAQ           | `FAQ`             | `#faq`     |
| Final CTA     | `FinalCTA`        | `#cta`     |
| Contact Form  | `ContactForm`     | `#contact` |
| Footer        | `Footer`          | —          |

To reorder sections, edit the imports and JSX in `app/page.tsx`. To remove a section, delete its import and JSX entry.

---

## Theming

### Switching Themes

The theme toggle is in the header (`components/sections/header.tsx`). It calls `toggleTheme()` from the `useTheme` hook.

### Customizing Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: 220 90% 56%;
  --secondary: 265 90% 65%;
  --accent: 190 90% 50%;
  /* ... */
}
```

Both light (`:root`) and dark (`.dark`) themes must be updated.

---

## SEO Configuration

All SEO metadata is centralized in `app/layout.tsx`:

- **Title and description**: Update the `title` and `description` constants.
- **Domain**: Update the `siteUrl` constant.
- **Open Graph image**: Replace `/og-image.png` (1200×630) in `public/`.
- **Icons**: Replace `app/icon.svg` and the PNG icons referenced in metadata.
- **Structured data**: Update the `organizationLd` and `softwareLd` objects.
- **robots.txt**: Edit `app/robots.ts`.
- **sitemap.xml**: Edit `app/sitemap.ts`.

---

## Forms and Validation

### Contact Form

The contact form (`components/sections/contact.tsx`) includes:

- Client-side validation with descriptive error messages.
- Accessible labels, `aria-invalid`, and `aria-describedby`.
- Loading, success, and error states with animated transitions.
- A simulated submission — replace the `await new Promise(...)` in `handleSubmit` with a real API call.

### Connecting to a Backend

To connect the form to Supabase or an API:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // ... validation ...
  setStatus('submitting');
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error('Request failed');
    setStatus('success');
  } catch {
    setStatus('error');
  }
};
```

---

## Animations

All animations use Framer Motion. The reusable primitives in `components/motion.tsx` (`Reveal`, `Stagger`, `StaggerItem`) handle scroll-triggered reveals with consistent easing.

### Reduced Motion

Users with `prefers-reduced-motion: reduce` have non-essential animations disabled via global CSS. Motion components still render content but without transform/opacity transitions.

---

## Accessibility

- **Semantic HTML**: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`.
- **Keyboard navigation**: All interactive elements are keyboard reachable with visible focus rings.
- **ARIA**: Decorative icons are `aria-hidden`; meaningful icons have `aria-label`.
- **Forms**: `<Label>` associations, `aria-invalid`, `aria-describedby`, `role="alert"` on errors.
- **Color contrast**: WCAG AA in both light and dark themes.

---

## Environment Variables

The project ships with a pre-provisioned Supabase instance. Variables are pre-populated in `.env` and the hosted environment.

| Variable                   | Purpose                                  |
| -------------------------- | ---------------------------------------- |
| `SUPABASE_URL`             | Supabase project URL                     |
| `SUPABASE_ANON_KEY`        | Supabase anon (public) key               |
| `SUPABASE_SERVICE_ROLE_KEY`| Supabase service role key (server only)  |
| `SUPABASE_DB_URL`          | Direct Postgres connection string        |

> Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client.

---

## Deployment

### Netlify

The project includes `netlify.toml` with the required Next.js plugin. Connect your repository and deploy — no additional configuration needed.

### Vercel

Import the repository into Vercel. The framework preset will be auto-detected as Next.js.

### Other Hosts

Run `npm run build` and serve the `.next` directory with any Next.js-compatible host.

---

## Customization Guide

### Rebranding

1. **Name and logo**: Update the wordmark in `header.tsx` and `footer.tsx`. Replace `app/icon.svg`.
2. **Colors**: Edit CSS variables in `app/globals.css`.
3. **Fonts**: Swap imports in `app/layout.tsx` and update font variables.
4. **Copy**: All marketing copy lives inline in `components/sections/`.

### Adding a Section

1. Create a new component in `components/sections/`.
2. Import and render it in `app/page.tsx` at the desired position.
3. Add an anchor ID if you want to link to it from the navigation.

### Modifying Pricing

Edit the `plans`, `featureIcons`, `planAvailability`, and `comparisonRows` arrays at the top of `components/sections/pricing.tsx`.

---

## Troubleshooting

### Build Fails with Type Errors

Run `npm run typecheck` to identify the errors. Common causes:
- Missing `'use client'` directive on components using hooks.
- Incorrect import paths (use `@/` alias).

### Hydration Warnings

Ensure no browser-only APIs (e.g., `window`, `localStorage`) are accessed during render. Wrap them in `useEffect` or use the `mounted` pattern.

### Theme Flash on Load

The inline boot script in `app/layout.tsx` handles this. If you still see a flash, ensure `suppressHydrationWarning` is on the `<html>` tag.

### Images Not Loading

The project uses `images: { unoptimized: true }` in `next.config.js` for static hosting compatibility. For optimized images on Vercel, remove this option.
