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
        <title>Eugene Roofing | Trusted Roof Repair & Installation | Free Estimates</title>
        <meta 
          name="description" 
          content="Looking for expert roofing contractors in Eugene? EugeneRoofingNW.com offers top-rated roof repair, installation & maintenance. Get a free quote today!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Eugene Roofing | Trusted Roof Repair & Installation | Free Estimates" />
        <meta property="og:description" content="Looking for expert roofing contractors in Eugene? EugeneRoofingNW.com offers top-rated roof repair, installation & maintenance. Get a free quote today!" />
        <meta property="og:url" content="https://www.eugeneroofingnw.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/c5babf64-7fbb-4ba8-809c-ea3d00fe5786.png" />
        <meta property="og:image:alt" content="Eugene Roofing NW team performing professional roofing service" />
        
        {/* Additional SEO Tags */}
        <meta name="keywords" content="roofing Eugene OR, roof repair Eugene, emergency roofing Eugene, roof replacement Eugene, residential roofing Eugene, commercial roofing Eugene, roofing company Eugene, roofing contractor Eugene" />
        <meta name="geo.region" content="US-OR" />
        <meta name="geo.placename" content="Eugene" />
        <meta name="geo.position" content="44.0521;-123.0868" />
        <meta name="ICBM" content="44.0521, -123.0868" />
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
