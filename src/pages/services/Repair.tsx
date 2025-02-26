
import React from 'react';
import { Helmet } from 'react-helmet';
import RepairHero from './repair/RepairHero';
import RepairServices from './repair/RepairServices';
import WarningSigns from './repair/WarningSigns';
import WhyChooseUs from './repair/WhyChooseUs';
import RepairFAQ from './repair/RepairFAQ';
import RepairCTA from './repair/RepairCTA';
import RepairContent from './repair/RepairContent';

const Repair = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof Repair Services Eugene OR",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Eugene Roofing NW",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Eugene",
        "addressRegion": "OR",
        "postalCode": "97401",
        "addressCountry": "US"
      }
    },
    "serviceType": "Roof Repair",
    "areaServed": {
      "@type": "City",
      "name": "Eugene",
      "addressRegion": "OR"
    },
    "description": "Expert roof repair services in Eugene, Oregon. We fix leaks, storm damage, and provide emergency repairs with guaranteed workmanship."
  };

  return (
    <div className="space-y-16">
      <Helmet>
        <title>Roof Repair Eugene OR | Expert Leak & Damage Repair | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Professional roof repair in Eugene, OR. Emergency leak repair, storm damage restoration & shingle replacement. Licensed & insured experts. Free estimates!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/services/roof-repair-eugene-or" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Roof Repair Eugene OR | Expert Leak & Damage Repair" />
        <meta property="og:description" content="Professional roof repair services in Eugene. Emergency repairs, leak fixing & storm damage restoration by certified experts. Free estimates!" />
        <meta property="og:url" content="https://www.eugeneroofingnw.com/services/roof-repair-eugene-or" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <RepairHero />
      <RepairServices />
      <WarningSigns />
      <WhyChooseUs />
      <RepairContent />
      <RepairFAQ />
      <RepairCTA />
    </div>
  );
};

export default Repair;
