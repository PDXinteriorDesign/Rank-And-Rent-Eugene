
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
      },
      "telephone": "+1-541-555-0123",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      "sameAs": ["https://www.facebook.com/eugeneroofingnw", "https://www.instagram.com/eugeneroofingnw"]
    },
    "serviceType": "Roof Repair",
    "areaServed": [
      {
        "@type": "City",
        "name": "Eugene",
        "addressRegion": "OR"
      },
      {
        "@type": "City",
        "name": "Springfield",
        "addressRegion": "OR"
      },
      {
        "@type": "City",
        "name": "Lane County",
        "addressRegion": "OR"
      }
    ],
    "description": "Professional roof repair in Eugene, OR. Fast, reliable, and affordable solutions for all your roofing needs. Specializing in leak repairs, storm damage, shingle replacement and emergency services. Contact Eugene Roofing NW today!",
    "offers": {
      "@type": "Offer",
      "price": "300.00",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "300.00",
        "maxPrice": "1500.00"
      },
      "description": "Professional roof repair services starting at $300"
    }
  };

  return (
    <div className="space-y-16">
      <Helmet>
        <title>Professional Roof Repair Eugene OR | Fast Emergency Service | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Expert roof repair in Eugene by licensed contractors. 24/7 emergency service, leak repairs, storm damage restoration. 25+ years local experience. Free estimates & insurance claim assistance!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/services/roof-repair-eugene-oregon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Professional Roof Repair in Eugene, OR | Licensed & Insured" />
        <meta property="og:description" content="Expert roof repair by Eugene's trusted contractors. Emergency repairs, leak fixing & storm damage restoration. Free estimates!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/c5babf64-7fbb-4ba8-809c-ea3d00fe5786.png" />
        <meta property="og:image:alt" content="Professional roofer repairing shingles on a residential roof in Eugene, Oregon" />
        <meta name="keywords" content="roof repair Eugene OR, emergency roof repair, roof leak repair, storm damage repair, roofing contractor Eugene, shingle replacement Eugene, roof repair cost Eugene, affordable roof repair Lane County" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <main className="space-y-16">
        <RepairHero />
        <RepairServices />
        <WarningSigns />
        <RepairContent />
        <WhyChooseUs />
        <RepairFAQ />
        <RepairCTA />
      </main>
    </div>
  );
};

export default Repair;
