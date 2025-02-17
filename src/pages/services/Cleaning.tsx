
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import CleaningHero from './cleaning/CleaningHero';
import CleaningServices from './cleaning/CleaningServices';
import MossRemoval from './cleaning/MossRemoval';
import WhyChooseUs from './cleaning/WhyChooseUs';
import CleaningCTA from './cleaning/CleaningCTA';
import CleaningFAQ from './cleaning/CleaningFAQ';

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Roof Cleaning & Treatment Services in Eugene, OR | Expert Maintenance" />
        <meta property="og:description" content="Professional roof cleaning and treatment services in Eugene. Expert moss removal, preventative treatments, and maintenance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eugeneroofing.com/services/roof-cleaning-eugene-or" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Roof Cleaning & Treatment Services in Eugene, OR | Expert Maintenance" />
        <meta name="twitter:description" content="Professional roof cleaning and treatment services in Eugene. Expert moss removal and maintenance." />
        <meta name="keywords" content="roof cleaning Eugene, moss removal Eugene, roof maintenance Eugene OR, roof treatment Eugene, professional roof cleaners Eugene" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Eugene Roofing NW" />
        <link rel="canonical" href="https://eugeneroofing.com/services/roof-cleaning-eugene-or" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />
      <main id="main-content" role="main" className="space-y-20">
        <CleaningHero />
        <nav aria-label="Page sections" className="sticky top-20 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 hidden md:block">
          <div className="container mx-auto px-4">
            <ul className="flex space-x-8 py-4 text-sm">
              <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#moss-removal" className="text-gray-600 hover:text-primary transition-colors">Moss Removal</a></li>
              <li><a href="#why-choose" className="text-gray-600 hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </nav>
        <div id="services" className="bg-white py-16">
          <CleaningServices />
        </div>
        <div id="moss-removal" className="bg-muted/30 py-16">
          <MossRemoval />
        </div>
        <div id="why-choose" className="bg-white py-16">
          <WhyChooseUs />
        </div>
        <div id="faq" className="bg-muted/30 py-16 max-w-5xl mx-auto">
          <CleaningFAQ />
        </div>
        <CleaningCTA />
      </main>
    </div>
  );
};

export default Cleaning;
