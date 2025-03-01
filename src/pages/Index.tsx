
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
        <title>Best Roofing Contractors in Eugene, OR | Quality You Can Trust</title>
        <meta 
          name="description" 
          content="Eugene's top-rated roofing company offering expert roof repair, replacement, and maintenance. Professional roofing services by certified experts. Get a free estimate today!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Best Roofing Contractors in Eugene, OR | Quality You Can Trust" />
        <meta property="og:description" content="Eugene's top-rated roofing company offering expert roof repair, replacement, and maintenance. Get a free estimate today!" />
        <meta property="og:url" content="https://www.eugeneroofingnw.com/" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="roofing contractor Eugene OR, roof repair Eugene, roof replacement Eugene, roofing companies Eugene OR, Eugene roofing contractors" />
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
