
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
    "description": "Professional roof repair in Eugene, OR. Fast, reliable, and affordable solutions for all your roofing needs. Contact Eugene Roofing NW today!"
  };

  return (
    <div className="space-y-16">
      <Helmet>
        <title>Expert Roof Repair in Eugene, OR | Fast & Affordable Services</title>
        <meta 
          name="description" 
          content="Need roof repair in Eugene, OR? We fix leaks, missing shingles, and storm damage. Fast, reliable service from certified experts. Free inspection today!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/services/eugene-or-roof-repair" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Expert Roof Repair in Eugene, OR | Fast & Affordable Services" />
        <meta property="og:description" content="Professional roof repair services in Eugene. Emergency repairs, leak fixing & storm damage restoration by certified experts. Free estimates!" />
        <meta property="og:url" content="https://www.eugeneroofingnw.com/services/eugene-or-roof-repair" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="roof repair Eugene OR, roof leak repair Eugene, emergency roof repair, roofing contractors Eugene, affordable roof repair" />
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
