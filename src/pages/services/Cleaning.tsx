
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import CleaningHero from './cleaning/CleaningHero';
import CleaningServices from './cleaning/CleaningServices';
import WhyChooseUs from './cleaning/WhyChooseUs';
import CleaningCTA from './cleaning/CleaningCTA';

const Cleaning = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Roof Cleaning and Treatment Services in Eugene",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Eugene Roofing NW",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Eugene",
        "addressRegion": "OR",
        "postalCode": "97401"
      }
    },
    "areaServed": "Eugene, Oregon",
    "description": "Expert roof cleaning and treatment services in Eugene, Oregon. Specializing in moss removal, preventative treatments, and comprehensive roof maintenance.",
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Roof Cleaning & Treatment Services in Eugene, OR | Expert Maintenance</title>
        <meta 
          name="description" 
          content="Professional roof cleaning and treatment services in Eugene. Expert moss removal, preventative treatments, and comprehensive maintenance. Schedule your service today!"
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />
      <CleaningHero />
      <CleaningServices />
      <WhyChooseUs />
      <CleaningCTA />
    </div>
  );
};

export default Cleaning;
