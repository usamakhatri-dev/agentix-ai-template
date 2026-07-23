# Quick Start

Get the Agentix AI template running in under five minutes.

---

## Prerequisites

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| **Node.js** | 18.18 | 20.x LTS |
| **npm** | 9.x | 10.x |
| **IDE** | Any editor | VS Code with Tailwind CSS IntelliSense |

---

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd agentix-ai
npm install
```

> If you encounter peer dependency errors with React 19 RC, run `npm install --legacy-peer-deps`.

---

## Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server supports hot module reloading.

---

## Production Build

```bash
npm run build
npm start
```

`npm run build` compiles the project and generates static pages. `npm start` serves the production build on port 3000.

---

## Project Structure Overview

```
agentix-ai/
├── app/              Next.js App Router — layout, page, metadata, routes
├── components/
│   ├── sections/      15 page section components (Header, Hero, Pricing, etc.)
│   └── ui/            Reusable UI primitives (Button, Input, Accordion, etc.)
├── data/             Typed content files — edit these to change text and data
├── lib/               Utility functions
├── public/            Static assets
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

**Key idea:** All marketing content lives in `data/` files, separate from components. Change text, pricing, and testimonials there without touching component code.

---

## First Customizations

### Logo

Edit the logo in two files:

| File | Location |
|------|---------|
| `components/sections/header.tsx` | Top-left navigation bar |
| `components/sections/footer.tsx` | Footer brand area |

Replace the `Sparkles` icon and "Agentix AI" text with your brand.

### Brand Name

Search the project for "Agentix" and replace with your brand name. Key locations:

- `app/layout.tsx` — page title and metadata
- `app/manifest.ts` — PWA manifest name
- `components/sections/header.tsx` — header logo
- `components/sections/footer.tsx` — footer logo and copyright

### Navigation

Edit `data/navigation.ts`:

```typescript
export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  // Add or remove links here
] as const;
```

The `href` values must match the `id` attributes on each section component.

### Hero

Edit `components/sections/hero.tsx` to change:

- Announcement pill text
- Main headline and subheadline
- CTA button labels and links
- Dashboard mockup stat cards and bar chart data
- Floating card values

Edit `data/hero.ts` to change the trusted-by company names.

### Pricing

Edit `components/sections/pricing.tsx` to change:

- Plan names, prices, and descriptions (the `plans` array)
- Feature comparison table rows (the `comparisonRows` and `planAvailability` arrays)
- Pricing-specific FAQ entries (the `pricingFaqs` array)
- Enterprise CTA text

### Footer

Edit `components/sections/footer.tsx` to change:

- Navigation column links (the `footerNav` object)
- Social media links (the `socials` array)
- Copyright text

---

## Deployment

### Vercel

1. Push your project to a Git repository
2. Import the repository at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — click **Deploy**

To enable image optimization on Vercel, remove `images: { unoptimized: true }` from `next.config.ts`.

### Netlify

1. Push your project to a Git repository
2. Import the repository at [app.netlify.com](https://app.netlify.com)
3. The included `netlify.toml` pre-configures the build command and publish directory
4. Click **Deploy**

---

## Need Help?

See **DOCUMENTATION.md** for the full reference guide, or open an issue on the repository with a clear description of your problem.
