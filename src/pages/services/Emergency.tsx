
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import EmergencyHero from './emergency/EmergencyHero';
import EmergencyFeatures from './emergency/EmergencyFeatures';
import EmergencyServices from './emergency/EmergencyServices';
import EmergencyProcess from './emergency/EmergencyProcess';
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
      },
      "telephone": "+1-541-555-0123",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "serviceType": "Emergency Roof Repair",
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
    "description": "24/7 emergency roofing services in Eugene, OR. Immediate response for storm damage, leaks, and urgent repairs. Professional solutions when you need them most.",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.eugeneroofingnw.com/services/emergency-roof-repair-eugene-oregon",
      "servicePhone": "+1-541-555-0123",
      "serviceSmsNumber": "+1-541-555-0123"
    },
    "termsOfService": "Available 24/7 including holidays and weekends",
    "serviceOutput": "Temporary roof repair, water damage prevention, permanent repair solutions"
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>24/7 Emergency Roof Repair Eugene OR | Immediate Storm Damage Response | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="24/7 emergency roof repair in Eugene. 2-hour response time for storm damage, leaks & structural issues. Insurance claim assistance available. Licensed experts available day & night. Call now!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/services/emergency-roof-repair-eugene-oregon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="24/7 Emergency Roof Repair Eugene OR | Immediate Response" />
        <meta property="og:description" content="Emergency roof repair services in Eugene. Available 24/7 for storm damage, leaks & urgent repairs. Licensed experts ready now!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/5997350c-7571-42cc-b7c1-6b57b007c504.png" />
        <meta property="og:image:alt" content="Emergency roof repair team responding to storm damage in Eugene, Oregon" />
        <meta name="keywords" content="emergency roof repair Eugene, 24/7 roofing service, storm damage repair, emergency roofer Eugene OR, roof leak repair Eugene, fallen tree damage, wind damage roof, emergency tarping Eugene" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Header />
      <main className="space-y-16">
        <EmergencyHero />
        <EmergencyFeatures />
        <EmergencyProcess />
        <EmergencyServices />
        <EmergencyCTA />
      </main>
    </div>
  );
};

export default Emergency;
