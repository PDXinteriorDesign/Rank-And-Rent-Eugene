
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import RepairHero from './repair/RepairHero';
import WhyChooseUs from './repair/WhyChooseUs';
import RepairServices from './repair/RepairServices';
import WarningSigns from './repair/WarningSigns';
import RepairCTA from './repair/RepairCTA';

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
        <title>Roof Repair in Eugene, Oregon – Reliable, Fast, and Affordable Services | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Expert roof repair in Eugene, OR. Specializing in leak detection, storm damage repair, and emergency services. Local specialists with years of experience. Free estimates!"
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />
      <RepairHero />
      <WhyChooseUs />
      <RepairServices />
      <WarningSigns />
      <RepairCTA />
    </div>
  );
};

export default Repair;
