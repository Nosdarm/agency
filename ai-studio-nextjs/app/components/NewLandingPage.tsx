'use client';

import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { TechStackMarquee } from './TechStackMarquee';
import { BentoGrid } from './BentoGrid';
import { CasesSection } from './CasesSection';
import { ProcessPipeline } from './ProcessPipeline';
import { PricingSection } from './PricingSection';
import { FAQSection } from './FAQSection';
import { ContactSection } from './ContactSection';
import { CTASection } from './CTASection';
import { Footer } from './Footer';

export function NewLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <HeroSection />
      <TechStackMarquee />
      <BentoGrid />
      <CasesSection />
      <ProcessPipeline />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
