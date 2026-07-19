import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const siteUrl = 'https://agentix.ai';
const title = 'Agentix AI — The Future of AI Automation for Modern Businesses';
const description =
  'Agentix AI helps startups, agencies, and enterprises automate workflows with intelligent AI agents, chatbots, analytics, and seamless integrations. Book a demo or start your free trial today.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Agentix AI',
  },
  description,
  applicationName: 'Agentix AI',
  keywords: [
    'AI automation',
    'AI agents',
    'workflow automation',
    'AI chatbots',
    'business automation',
    'SaaS AI platform',
    'CRM integration',
  ],
  authors: [{ name: 'Agentix AI', url: siteUrl }],
  creator: 'Agentix AI',
  publisher: 'Agentix AI',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: siteUrl,
    siteName: 'Agentix AI',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agentix AI — The Future of AI Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentix AI — The Future of AI Automation',
    description:
      'Automate workflows, engage customers, and scale operations with intelligent AI agents.',
    creator: '@agentixai',
    site: '@agentixai',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  manifest: '/manifest.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f1f' },
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Agentix AI',
  url: siteUrl,
  logo: `${siteUrl}/icon-512.png`,
  sameAs: [
    'https://twitter.com/agentixai',
    'https://www.linkedin.com/company/agentixai',
    'https://github.com/agentixai',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'sales@agentix.ai',
    availableLanguage: ['English'],
  },
};

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Agentix AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: siteUrl,
  description:
    'Agentix AI helps startups, agencies, and enterprises automate workflows with intelligent AI agents, chatbots, analytics, and seamless integrations.',
  offers: [
    { '@type': 'Offer', price: '29', priceCurrency: 'USD', name: 'Starter' },
    { '@type': 'Offer', price: '89', priceCurrency: 'USD', name: 'Professional' },
    { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free Trial' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '2400',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Agentix AI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
        />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
