import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { SocialProof } from '@/components/sections/social-proof';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Showcase } from '@/components/sections/showcase';
import { Benefits } from '@/components/sections/benefits';
import { Industries } from '@/components/sections/industries';
import { Testimonials } from '@/components/sections/testimonials';
import { CaseStudy } from '@/components/sections/case-study';
import { Pricing } from '@/components/sections/pricing';
import { FAQ } from '@/components/sections/faq';
import { FinalCTA } from '@/components/sections/final-cta';
import { ContactForm } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <ThemeProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-glow"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Showcase />
        <Benefits />
        <Industries />
        <Testimonials />
        <CaseStudy />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
