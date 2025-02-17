
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import RepairHero from './repair/RepairHero';
import WhyChooseUs from './repair/WhyChooseUs';
import RepairServices from './repair/RepairServices';
import WarningSigns from './repair/WarningSigns';
import RepairContent from './repair/RepairContent';
import RepairCTA from './repair/RepairCTA';
import RepairFAQ from './repair/RepairFAQ';

const Repair = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Roof Repair Services in Eugene",
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
    "description": "Expert roof repair services in Eugene, Oregon. Specializing in leak repair, storm damage restoration, and 24/7 emergency repairs with licensed professionals.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roof Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Repairs",
            "description": "24/7 emergency roof repair services in Eugene with rapid response times"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Leak Detection & Repair",
            "description": "Professional leak detection and permanent repair solutions in Eugene"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Expert Roof Repair in Eugene, Oregon – Trusted Roofing Contractors | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Professional roof repair in Eugene, OR. Specializing in emergency repairs, leak detection, and storm damage restoration. OSHA-certified contractors, free inspections. Call now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Expert Roof Repair in Eugene, Oregon – Trusted Roofing Contractors" />
        <meta property="og:description" content="Professional roof repair in Eugene, OR. Specializing in emergency repairs, leak detection, and storm damage restoration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eugeneroofing.com/services/eugene-or-roof-repair" />
        <link rel="canonical" href="https://eugeneroofing.com/services/eugene-or-roof-repair" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />
      <main id="main-content" role="main">
        <RepairHero />
        <nav aria-label="Page sections" className="sticky top-20 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 hidden md:block">
          <div className="container mx-auto px-4">
            <ul className="flex space-x-8 py-4 text-sm">
              <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#why-choose" className="text-gray-600 hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#warning-signs" className="text-gray-600 hover:text-primary transition-colors">Warning Signs</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </nav>
        <div id="services">
          <RepairServices />
        </div>
        <div id="why-choose">
          <WhyChooseUs />
        </div>
        <RepairContent />
        <div id="warning-signs">
          <WarningSigns />
        </div>
        <div id="testimonials">
          <RepairFAQ />
        </div>
        <RepairCTA />
      </main>
    </div>
  );
};

export default Repair;
