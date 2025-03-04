
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
    <>
      <Helmet>
        <title>Eugene Roofing NW | Expert Roofing Services in Eugene, Oregon</title>
        <meta 
          name="description" 
          content="Eugene's premier roofing contractor offering expert repairs, installations & 24/7 emergency service. GAF certified, fully licensed & insured. Free estimates for Eugene homeowners!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Eugene Roofing NW | Expert Roofing Services in Eugene, Oregon" />
        <meta property="og:description" content="Eugene's premier roofing contractor. Expert repairs, installations & 24/7 emergency service. GAF certified & fully insured!" />
        <meta property="og:url" content="https://www.eugeneroofingnw.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/c5babf64-7fbb-4ba8-809c-ea3d00fe5786.png" />
        <meta property="og:image:alt" content="Eugene Roofing NW team performing professional roofing service" />
        
        {/* Additional SEO Tags */}
        <meta name="keywords" content="roofing Eugene OR, roof repair Eugene, emergency roofing, roof replacement Eugene, GAF certified roofer, commercial roofing Eugene, residential roofing Oregon" />
        <meta name="geo.region" content="US-OR" />
        <meta name="geo.placename" content="Eugene" />
        <meta name="geo.position" content="44.0521;-123.0868" />
        <meta name="ICBM" content="44.0521, -123.0868" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eugene Roofing NW | Expert Roofing Services" />
        <meta name="twitter:description" content="Eugene's premier roofing contractor. Expert repairs, installations & emergency service." />
        <meta name="twitter:image" content="/lovable-uploads/c5babf64-7fbb-4ba8-809c-ea3d00fe5786.png" />
      </Helmet>

      <main id="main-content" className="min-h-screen">
        <div className="space-y-16 pb-16">
          <Hero />
          <article className="space-y-16">
            <Introduction />
            <ClimateInfo />
            <Services />
            <Benefits />
            <TrustIndicators />
            <HomeCTA />
            <FAQ />
            <Testimonials />
          </article>
          <SeoSchema />
        </div>
      </main>
    </>
  );
};

export default Index;
