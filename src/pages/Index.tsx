
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/home/Hero';
import MainContent from '@/components/home/MainContent';
import Services from '@/components/home/Services';
import HomeCTA from '@/components/home/HomeCTA';
import FAQ from '@/components/home/FAQ';
import Testimonials from '@/components/home/Testimonials';
import SeoSchema from '@/components/home/SeoSchema';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Eugene Roofing Experts | Professional Roof Installation & Repair Services 2025</title>
        <meta 
          name="description" 
          content="Eugene's premier roofing contractor offering expert installation, repair & maintenance. 25+ years of experience, lifetime warranties & eco-friendly solutions. Free consultation!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Eugene Roofing Experts | Professional Roof Installation & Repair Services 2025" />
        <meta property="og:description" content="Eugene's premier roofing contractor offering expert installation, repair & maintenance. 25+ years of experience, lifetime warranties & eco-friendly solutions. Free consultation!" />
        <meta property="og:url" content="https://www.eugeneroofingnw.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/2d103f99-a3cc-4a1c-a537-ef291d77ec26.png" />
        <meta property="og:image:alt" content="Professional roofing services in Eugene - showcasing expert craftsmanship" />
        
        {/* Additional SEO Tags */}
        <meta name="keywords" content="eugene roofing 2025, roof repair eugene, emergency roofing eugene, sustainable roofing eugene, eco-friendly roofing, residential roofing eugene, commercial roofing eugene, roofing contractor eugene, metal roofing eugene" />
        <meta name="geo.region" content="US-OR" />
        <meta name="geo.placename" content="Eugene" />
        <meta name="geo.position" content="44.0521;-123.0868" />
        <meta name="ICBM" content="44.0521, -123.0868" />
        
        {/* Additional Performance & Mobile Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#004d40" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>

      <main id="main-content" className="min-h-screen">
        <div className="space-y-16 pb-16">
          <Hero />
          <article className="space-y-16">
            <MainContent />
            <Services />
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
