import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import EmergencyHero from './emergency/EmergencyHero';
import EmergencyFeatures from './emergency/EmergencyFeatures';
import EmergencyServices from './emergency/EmergencyServices';
import EmergencyCTA from './emergency/EmergencyCTA';

const Emergency = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Roofing Services Eugene OR",
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
    "serviceType": "Emergency Roof Repair",
    "areaServed": {
      "@type": "City",
      "name": "Eugene",
      "addressRegion": "OR"
    },
    "description": "24/7 emergency roofing services in Eugene, OR. Immediate response for storm damage, leaks, and urgent repairs. Professional solutions when you need them most."
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>24/7 Emergency Roof Repair Eugene OR | Immediate Response</title>
        <meta 
          name="description" 
          content="24/7 emergency roof repair in Eugene, OR. Immediate response for storm damage, leaks & structural issues. Licensed experts available day & night. Call now!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/emergency-roof-repair-eugene-oregon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="24/7 Emergency Roof Repair Eugene OR | Immediate Response" />
        <meta property="og:description" content="Emergency roof repair services in Eugene, OR. Available 24/7 for storm damage, leaks & urgent repairs. Licensed contractors ready to help!" />
        <meta property="og:url" content="https://www.eugeneroofingnw.com/emergency-roof-repair-eugene-oregon" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="emergency roof repair Eugene OR, 24/7 roofing service Eugene, urgent roof repair, storm damage repair Eugene, emergency roofer near me" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Header />
      <EmergencyHero />
      <EmergencyFeatures />
      <EmergencyServices />
      <EmergencyCTA />
    </div>
  );
};

export default Emergency;
