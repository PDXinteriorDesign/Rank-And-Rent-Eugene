
import React from 'react';
import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import ClimateInfo from '@/components/home/ClimateInfo';
import Services from '@/components/home/Services';
import Benefits from '@/components/home/Benefits';
import HomeCTA from '@/components/home/HomeCTA';
import FAQ from '@/components/home/FAQ';
import Testimonials from '@/components/home/Testimonials';
import TrustIndicators from '@/components/home/TrustIndicators';
import SeoSchema from '@/components/home/SeoSchema';

const Index = () => {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <Introduction />
      <ClimateInfo />
      <Services />
      <Benefits />
      <TrustIndicators />
      <HomeCTA />
      <FAQ />
      <Testimonials />
      <SeoSchema />
    </div>
  );
};

export default Index;
