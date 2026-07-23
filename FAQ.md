# FAQ

Frequently asked questions about the Agentix AI template.

---

## Installation

### 1. What are the minimum requirements to run this project?

Node.js 18.18 or higher, npm 9.x or higher, and a code editor. The project uses Next.js 15 with the App Router and React 19 RC.

### 2. How do I install dependencies?

Run `npm install` in the project root. If you encounter peer dependency errors related to React 19 RC, run `npm install --legacy-peer-deps` instead.

### 3. Can I use Yarn or pnpm instead of npm?

Yes. Run `yarn install` or `pnpm install` respectively. The project does not use npm-specific features. Use the equivalent commands for dev, build, and start scripts.

### 4. Do I need to install any global packages?

No. All required tools (Next.js, TypeScript, Tailwind CSS, ESLint) are listed as devDependencies and run through npm scripts.

---

## Customization

### 5. Where do I change the marketing copy?

Most content lives in typed data files under `data/` (e.g., `features.ts`, `testimonials.ts`, `navigation.ts`). Some section-specific content (hero headline, pricing plans, footer links) is defined as constants inside the corresponding component in `components/sections/`.

### 6. How do I change the color theme?

Edit the HSL CSS custom properties in `app/globals.css`. The `:root` block defines light mode values and the `.dark` block defines dark mode values. The Tailwind config references these variables, so changing the CSS variables updates all components automatically.

### 7. How do I add a new section to the page?

Create a component in `components/sections/`, then import and render it in `app/page.tsx` inside the `<main>` element. Add a corresponding entry to `data/navigation.ts` if you want it linked in the header.

### 8. Can I remove sections I do not need?

Yes. Remove the import and JSX tag from `app/page.tsx`, then delete the component file from `components/sections/`. Also remove any data files that were exclusive to that section, and update `data/navigation.ts` if needed.

### 9. How do I change the fonts?

The project loads Inter (body) and Sora (display) via `next/font/google` in `app/layout.tsx`. Replace the `Inter` and `Sora` imports with any Google Font, update the CSS variable names if you rename them, and the Tailwind config will pick up the new fonts automatically.

---

## Deployment

### 10. How do I deploy to Vercel?

Push your project to a Git repository, import it at vercel.com, and click Deploy. Vercel auto-detects Next.js and configures the build automatically.

### 11. How do I deploy to Netlify?

The project includes a `netlify.toml` file that pre-configures the build command (`npx next build`) and publish directory (`.next`). Push to a Git repository, import it at app.netlify.com, and click Deploy.

### 12. Can I deploy to a static host like GitHub Pages?

This project uses Next.js server features and is not configured for static export. Use Vercel, Netlify, or any host that supports Next.js SSR/SSG output.

### 13. Do I need to configure environment variables for deployment?

The project does not require any environment variables to build or run. If you add backend integrations later, configure those variables in your hosting provider's dashboard.

---

## SEO

### 14. Where is the SEO metadata configured?

In `app/layout.tsx` via the Next.js `Metadata` API. This includes the page title, description, keywords, Open Graph, Twitter Card, robots directives, and canonical URL.

### 15. Does the project include a sitemap and robots.txt?

Yes. `app/sitemap.ts` generates a sitemap at `/sitemap.xml` and `app/robots.ts` generates a robots file at `/robots.txt`. Both reference `https://agentix.ai` as the base URL — update this to your production domain.

### 16. Is there a web manifest for PWA support?

Yes. `app/manifest.ts` generates a web manifest at `/manifest.webmanifest`. It defines the app name, theme color, and icon. Update the name and colors to match your brand.

### 17. How do I change the canonical URL?

Update the `metadataBase` URL and the `alternates.canonical` field in `app/layout.tsx`, and the `url` values in `app/sitemap.ts` and `app/robots.ts`.

---

## Performance

### 18. What is the First Load JS size?

The homepage ships approximately 171 kB of First Load JS, including shared chunks. The page is statically prerendered at build time.

### 19. Are images optimized?

No. `next.config.ts` sets `images: { unoptimized: true }` to ensure compatibility with static hosts like Netlify. On Vercel, you can remove this setting to enable the Next.js Image Optimization API.

### 20. Are fonts optimized?

Yes. Fonts are loaded via `next/font/google` with `display: 'swap'`, which self-hosts the font files and eliminates render-blocking font requests.

### 21. How are animations handled without hurting performance?

Scroll-triggered animations use Framer Motion's `whileInView` with `viewport={{ once: true }}`, so each element animates only once and does not re-trigger on scroll. The `prefers-reduced-motion` media query disables animations for users who request it.

---

## Accessibility

### 22. Does the project support keyboard navigation?

Yes. All interactive elements (buttons, links, form inputs, accordion, switch) are keyboard-accessible via Radix UI primitives. Focus-visible ring styles are applied through the Button component and Tailwind utilities.

### 23. Is there a skip-to-content link?

Yes. A skip link is rendered at the top of `app/page.tsx` that becomes visible on focus and jumps to the `#main` element.

### 24. Does the theme toggle have an accessible label?

Yes. The theme toggle button in the header includes `aria-label="Toggle theme"`, and the mobile menu button includes `aria-label="Toggle menu"`.

### 25. Are images given alt text?

The project uses very few images. Testimonial avatars use `<img>` tags with descriptive alt text. The SVG icon in `app/icon.svg` is a favicon and does not require alt text.

### 26. Does the project respect reduced-motion preferences?

Yes. `app/globals.css` includes a `prefers-reduced-motion: reduce` media query that sets all animation and transition durations to near-zero.

---

## Tailwind

### 27. What version of Tailwind CSS does the project use?

Tailwind CSS 3.4.x, configured in `tailwind.config.ts` with PostCSS and Autoprefixer.

### 28. How is dark mode implemented?

Dark mode uses the `class` strategy. The `ThemeProvider` adds or removes the `dark` class on the `<html>` element. Tailwind's `dark:` variants respond to this class. An inline script in `app/layout.tsx` applies the stored theme before first paint to prevent a flash of incorrect theme.

### 29. Can I add custom Tailwind plugins?

Yes. Add them to the `plugins` array in `tailwind.config.ts`. Install the package via npm first.

### 30. Where are the custom utility classes defined?

In `app/globals.css` under `@layer components` (e.g., `.text-gradient`, `.glass-card`, `.grid-bg`, `.dot-bg`) and `@layer utilities` (e.g., `.text-balance`).

---

## Next.js

### 31. Which Next.js version and router does the project use?

Next.js 15 with the App Router. Pages are React Server Components by default, and client components are marked with `'use client'` at the top of the file.

### 32. How does the project handle client and server components?

Section components that use hooks, state, or Framer Motion are marked `'use client'` (e.g., Header, Hero, Pricing, Testimonials). Static sections like SocialProof, Features, and Footer remain server components. The `ThemeProvider` wraps the entire page as a client component boundary.

### 33. Where is the Next.js configuration?

In `next.config.ts`. The only custom setting is `images: { unoptimized: true }`. All other Next.js defaults apply.

---

## TypeScript

### 34. Is the project configured with strict TypeScript?

Yes. `tsconfig.json` sets `"strict": true` with `noEmit`, `isolatedModules`, and `moduleResolution: "bundler"`. All components use explicit prop types.

### 35. Are there shared types I should reuse?

The `data/` files export typed interfaces (e.g., `Feature` in `features.ts`, `Testimonial` in `testimonials.ts`). The `Plan` interface in `pricing.tsx` is defined locally. Reuse these types when extending the corresponding data files.

### 36. What path alias is configured?

The `@/*` alias maps to the project root, configured in `tsconfig.json` under `paths`. Use `@/components/...`, `@/data/...`, and `@/lib/...` for imports.

---

## Components

### 37. What UI primitives are included?

Six shadcn/ui-based primitives in `components/ui/`: Button, Input, Textarea, Label, Switch, and Accordion. Each wraps a Radix UI primitive where applicable and uses `class-variance-authority` for variants.

### 38. How do I add a new shadcn/ui component?

Install the required Radix dependency via npm, create the component file in `components/ui/`, and import it where needed. The project does not include the shadcn CLI — add components manually.

### 39. What animation helpers are available?

`components/motion.tsx` exports three helpers: `Reveal` (single-element fade-up on scroll), `Stagger` (container that staggers children), and `StaggerItem` (child element for stagger containers). All use Framer Motion with `viewport={{ once: true }}`.

---

## Images

### 40. How do I add stock images to sections?

Use standard `<img>` tags with Pexels URLs. Add `{/* eslint-disable-next-line @next/next/no-img-element */}` above each `<img>` tag to suppress the ESLint warning, since the Next.js Image component is disabled in this project.

### 41. Where is the favicon defined?

`app/icon.svg` serves as the favicon. Next.js automatically detects this file and serves it at `/icon.svg`. Replace it with your own SVG or add `favicon.ico` in the `app/` directory.

---

## Branding

### 42. Where do I change the logo?

In `components/sections/header.tsx` (top-left navigation) and `components/sections/footer.tsx` (footer brand area). Both use a gradient square with the `Sparkles` lucide icon and the text "Agentix AI".

### 43. How do I change the brand name throughout the project?

Search for "Agentix" across all files. Key locations: `app/layout.tsx` (metadata), `app/manifest.ts` (PWA name), `components/sections/header.tsx` and `footer.tsx` (visible branding), and `app/icon.svg` (favicon).

### 44. How do I change the brand colors?

Edit the `--primary`, `--secondary`, and `--accent` HSL values in both the `:root` and `.dark` blocks of `app/globals.css`. The gradient logo and CTA buttons use `from-primary to-secondary`, so updating these variables rebrands the entire site.

---

## Browser Support

### 45. What browsers are supported?

All modern browsers that support ES2017 and CSS custom properties: Chrome, Edge, Firefox, and Safari (including iOS). Internet Explorer is not supported.

### 46. Does the project use any browser-specific features?

It uses CSS `backdrop-filter` (for glass-card effects), CSS custom properties, and the `prefers-color-scheme` and `prefers-reduced-motion` media queries. All are widely supported in modern browsers.

---

## Updating

### 47. How do I update Next.js to a newer version?

Run `npm install next@latest`. Review the Next.js upgrade guide for breaking changes, then run `npm run build` to verify. Update `eslint-config-next` to the matching version.

### 48. How do I update dependencies?

Run `npm update` to get patch and minor updates within the semver ranges in `package.json`. For major version bumps, install the specific package (e.g., `npm install framer-motion@latest`) and test thoroughly.

### 49. How do I update Tailwind CSS?

Run `npm install tailwindcss@latest -D`. Review the Tailwind release notes for breaking changes. Run `npm run build` to verify that all utility classes still compile.

---

## Common Errors

### 50. Why does `npm install` fail with peer dependency errors?

The project uses React 19 RC, which may conflict with packages that pin React 18 in their peer dependencies. Run `npm install --legacy-peer-deps` to resolve this.

### 51. Why do I see a "Cannot find module" error during build?

This typically means a dependency is missing from `node_modules`. Run `npm install` again. If the error references a Radix UI package, ensure it is listed in `package.json` dependencies.

### 52. Why is the theme flashing on page load?

The inline script in `app/layout.tsx` reads the stored theme from localStorage before first paint. If you removed or modified this script, the page may flash the wrong theme. Restore the script in the `<head>` element.

### 53. Why are my Tailwind classes not applying?

Ensure the file is included in the `content` array in `tailwind.config.ts`. The config scans `app/`, `components/`, `lib/`, and `data/` directories. If you add files outside these paths, add the new path to the `content` array.

### 54. Why does the build fail with a TypeScript error?

The project uses `strict: true`. Ensure all function parameters have explicit types, avoid implicit `any`, and check that imports resolve correctly. Run `npx tsc --noEmit` to see type errors before building.

### 55. Why is the contact form not sending data?

The contact form in `components/sections/contact.tsx` performs client-side validation only and does not submit to a backend. To make it functional, connect it to a backend endpoint or email service.
