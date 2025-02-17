
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
        <title>Professional Roof Installation Eugene, OR | Expert Installation Services</title>
        <meta 
          name="description" 
          content="Expert roof installation services in Eugene, Oregon. New construction, replacement & energy-efficient roofing solutions. Local expertise, quality materials, free estimates!"
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />
      <main id="main-content" role="main" className="space-y-20">
        <InstallationHero />
        
        <nav aria-label="Page sections" className="sticky top-20 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 hidden md:block">
          <div className="container mx-auto px-4">
            <ul className="flex space-x-8 py-4 text-sm">
              <li><a href="#overview" className="text-gray-600 hover:text-primary transition-colors">Overview</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#why-choose" className="text-gray-600 hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#materials" className="text-gray-600 hover:text-primary transition-colors">Materials</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </nav>

        <section id="overview" className="py-16 bg-white scroll-mt-32">
          <RepairContent />
        </section>

        <InstallationServices />
        <InstallationWhyChooseUs />
        <InstallationMaterials />
        
        <section id="faq" className="py-16 bg-muted/30 max-w-5xl mx-auto scroll-mt-32">
          <InstallationFAQ />
        </section>

        <InstallationCTA />
      </main>
    </div>
  );
};

export default Installation;
