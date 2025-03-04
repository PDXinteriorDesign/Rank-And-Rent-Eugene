import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import InstallationHero from './installation/InstallationHero';
import InstallationServices from './installation/InstallationServices';
import InstallationWhyChooseUs from './installation/InstallationWhyChooseUs';
import InstallationMaterials from './installation/InstallationMaterials';
import InstallationFAQ from './installation/InstallationFAQ';
import InstallationCTA from './installation/InstallationCTA';
import RepairContent from './repair/RepairContent';

const Installation = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Roof Installation Services in Eugene",
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
    "description": "Professional roof installation services in Eugene, Oregon. We offer new roof installation, replacement, and energy-efficient roofing solutions with premium materials and expert craftsmanship.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roof Installation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "New Roof Construction",
            "description": "Expert installation for new homes and buildings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Replacement",
            "description": "Complete roof replacement services"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Expert Roof Installation Eugene OR | New Construction & Replacement | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Professional roof installation in Eugene by certified experts. New construction, re-roofing & energy-efficient solutions. Premium materials, lifetime warranty. Free consultation!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/services/roof-installation-eugene-oregon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Expert Roof Installation Eugene OR | New Construction & Replacement" />
        <meta property="og:description" content="Professional roof installation in Eugene. New construction, re-roofing & premium materials. Licensed contractors, lifetime warranty!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/9f507841-9578-4498-b919-0385967ccedb.png" />
        <meta property="og:image:alt" content="Professional roofing team installing new shingles on a residential property in Eugene" />
        <meta name="keywords" content="roof installation Eugene OR, new roof construction, re-roofing service Eugene, roofing contractor" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <main id="main-content" role="main" className="space-y-20">
        <InstallationHero />
        <InstallationServices />
        <InstallationWhyChooseUs />
        <InstallationMaterials />
        <InstallationFAQ />
        <InstallationCTA />
      </main>
    </div>
  );
};

export default Installation;
