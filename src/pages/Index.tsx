
import React from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Trusted Roofing Contractor Eugene OR | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Eugene's most trusted roofing contractor with 20+ years of experience. Expert residential & commercial roofing services, repairs, and installations. GAF & CertainTeed certified. Free estimates!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Trusted Roofing Contractor Eugene OR | Eugene Roofing NW" />
        <meta property="og:description" content="Eugene's most trusted roofing contractor. Professional roofing services, repairs & installations by certified experts. Free estimates!" />
        <meta property="og:url" content="https://www.eugeneroofingnw.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
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
