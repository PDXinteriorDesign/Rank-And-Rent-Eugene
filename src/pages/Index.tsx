
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import TrustIndicators from '@/components/home/TrustIndicators';
import HomeCTA from '@/components/home/HomeCTA';
import FAQ from '@/components/home/FAQ';
import Introduction from '@/components/home/Introduction';
import Benefits from '@/components/home/Benefits';
import ClimateInfo from '@/components/home/ClimateInfo';
import InspectionCTA from '@/components/home/InspectionCTA';
import EstimateForm from '@/components/home/EstimateForm';
import { getSchemaMarkup, getBreadcrumbSchema } from '@/components/home/SeoSchema';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Eugene Roofing NW | #1 Local Roofing Contractors | Expert Repairs & Installation</title>
        <meta 
          name="description" 
          content="Trusted Eugene roofing experts for 20+ years. Specializing in roof repairs, installations & moss removal. Local, licensed & insured contractors offering free estimates. 24/7 emergency service available!" 
        />
        <meta property="og:title" content="Eugene Roofing NW | Top-Rated Local Roofing Contractors | Expert Installation & Repairs" />
        <meta property="og:description" content="Eugene's most trusted roofing contractors. Professional repairs, installations & moss removal services. Licensed & insured local experts serving Eugene, Oregon. Free estimates!" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac" />
        <link rel="canonical" href="https://eugeneroofing.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eugene Roofing NW | Expert Local Roofing Services" />
        <meta name="twitter:description" content="Professional roofing services in Eugene. Expert repairs, installations & moss removal. 24/7 emergency service available!" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac" />
        <meta name="geo.region" content="US-OR" />
        <meta name="geo.placename" content="Eugene" />
        <meta name="geo.position" content="44.0521;-123.0868" />
        <meta name="ICBM" content="44.0521, -123.0868" />
        <meta name="keywords" content="roofing Eugene OR, roof repair Eugene, emergency roof repair, new roof installation, residential roofing, Eugene Oregon roofer, local roofing contractor, moss removal Eugene, roof replacement Eugene, roofing company near me" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Eugene Roofing NW" />
        <meta name="revisit-after" content="7 days" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Eugene Roofing NW" />
        <script type="application/ld+json">
          {JSON.stringify(getSchemaMarkup())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema())}
        </script>
      </Helmet>
      
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto prose prose-lg">
          <Introduction />
          <Benefits />
          <ClimateInfo />
          <InspectionCTA />
        </section>

        {/* Estimate Form Section */}
        <section className="py-16 bg-muted/10 rounded-lg mt-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get Your Free Estimate Today</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours with a detailed estimate for your roofing project.
              </p>
            </div>
            <EstimateForm />
          </div>
        </section>
      </div>
      <Services />
      <Testimonials />
      <TrustIndicators />
      <FAQ />
      <HomeCTA />
    </div>
  );
};

export default Index;
