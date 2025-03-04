
import React from 'react';
import { Helmet } from 'react-helmet';
import ContactHero from '@/components/contact/ContactHero';
import ContactMethods from '@/components/contact/ContactMethods';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';

const Contact = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Eugene Roofing NW",
      "description": "Professional roofing services in Eugene, Oregon. Contact us for repairs, installations, and 24/7 emergency services.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Eugene",
        "addressRegion": "OR",
        "postalCode": "97401",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "44.0521",
        "longitude": "-123.0868"
      },
      "url": "https://eugeneroofingnw.com/contact",
      "telephone": "+1-541-555-0123",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Eugene Roofing NW | Get a Free Roofing Quote</title>
        <meta 
          name="description" 
          content="Contact Eugene's top-rated roofing contractors for free estimates, repairs, installations & 24/7 emergency services. Licensed & insured local roofers serving Lane County."
        />
        <link rel="canonical" href="https://eugeneroofingnw.com/contact" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Eugene Roofing NW | Get a Free Quote" />
        <meta property="og:description" content="Contact Eugene's leading roofing experts for free estimates, professional repairs, installations & emergency services. Available 24/7." />
        <meta property="og:url" content="https://eugeneroofingnw.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="roofing contractor Eugene, roofing company contact, free roofing quote Eugene, emergency roof repair contact, Eugene OR roofer" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <ContactMap />
    </div>
  );
};

export default Contact;
