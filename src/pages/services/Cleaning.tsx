
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
    "name": "Professional Moss & Roof Cleaning in Eugene, OR",
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
    "description": "Expert moss and roof cleaning services in Eugene, OR. We safely remove moss, algae, and debris using gentle, damage-free methods to protect and extend your roof's lifespan. Professional maintenance to prevent leaks and structural damage.",
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Professional Moss & Roof Cleaning in Eugene, OR | Gentle, Effective Solutions</title>
        <meta 
          name="description" 
          content="Eugene's trusted roof cleaning experts. We safely remove moss, algae & debris to extend your roof's life. Gentle, damage-free methods that protect shingles & enhance curb appeal. Free estimates!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Professional Moss & Roof Cleaning in Eugene, OR | Gentle, Effective Solutions" />
        <meta property="og:description" content="Expert moss and roof cleaning in Eugene. Safe removal of moss, algae & debris. Protect your roof & enhance curb appeal with our gentle cleaning methods." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eugeneroofing.com/services/roof-cleaning-eugene-or" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Moss & Roof Cleaning in Eugene, OR | Gentle, Effective Solutions" />
        <meta name="twitter:description" content="Expert moss and roof cleaning in Eugene. Safe removal of moss, algae & debris using gentle methods." />
        <meta name="keywords" content="moss removal Eugene, roof cleaning Eugene, algae removal Eugene OR, gentle roof cleaning, professional roof maintenance Eugene, moss treatment Eugene" />
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
        <div id="services" className="bg-white py-16 scroll-mt-32">
          <CleaningServices />
        </div>
        <div id="moss-removal" className="bg-muted/30 py-16 scroll-mt-32">
          <MossRemoval />
        </div>
        <div id="why-choose" className="bg-white py-16 scroll-mt-32">
          <WhyChooseUs />
        </div>
        <div id="faq" className="bg-muted/30 py-16 max-w-5xl mx-auto scroll-mt-32">
          <CleaningFAQ />
        </div>
        <CleaningCTA />
      </main>
    </div>
  );
};

export default Cleaning;
