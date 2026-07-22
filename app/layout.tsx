import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const fontDisplay = Sora({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://agentix.ai'),
  title: { default: 'Agentix AI — The Future of AI Automation for Modern Businesses', template: '%s | Agentix AI' },
  description: 'Deploy intelligent AI agents that automate workflows, engage customers, and surface insights — all in one beautifully simple platform built for teams that move fast.',
  keywords: ['AI automation', 'AI agents', 'workflow automation', 'business automation', 'SaaS platform', 'AI platform', 'Agentix AI'],
  authors: [{ name: 'Agentix Labs' }],
  creator: 'Agentix Labs',
  openGraph: { type: 'website', locale: 'en_US', url: 'https://agentix.ai', title: 'Agentix AI — The Future of AI Automation for Modern Businesses', description: 'Deploy intelligent AI agents that automate workflows, engage customers, and surface insights — all in one beautifully simple platform built for teams that move fast.', siteName: 'Agentix AI' },
  twitter: { card: 'summary_large_image', title: 'Agentix AI — The Future of AI Automation for Modern Businesses', description: 'Deploy intelligent AI agents that automate workflows, engage customers, and surface insights — all in one beautifully simple platform built for teams that move fast.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://agentix.ai' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('agentix-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();` }} />
      </head>
      <body className={`${fontSans.variable} ${fontDisplay.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
