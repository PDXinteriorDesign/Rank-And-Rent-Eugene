
import React from 'react';
import { Helmet } from 'react-helmet';
import ReplacementHero from './replacement/ReplacementHero';
import ReplacementContent from './replacement/ReplacementContent';
import ReplacementServices from './replacement/ReplacementServices';
import ReplacementFAQ from './replacement/ReplacementFAQ';
import ReplacementCTA from './installation/InstallationCTA';

const Replacement = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof Replacement Services Eugene OR",
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
    "serviceType": "Roof Replacement",
    "areaServed": {
      "@type": "City",
      "name": "Eugene",
      "addressRegion": "OR"
    },
    "description": "Professional roof replacement services in Eugene, Oregon. Expert installation of new roofs with premium materials and guaranteed workmanship."
  };

  return (
    <div className="space-y-16">
      <Helmet>
        <title>Roof Replacement Eugene OR | New Roof Installation | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Expert roof replacement in Eugene, OR. Premium materials, professional installation & lifetime warranties. Licensed & insured contractors. Free estimates!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/services/roof-replacement-eugene-or" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Roof Replacement Eugene OR | New Roof Installation" />
        <meta property="og:description" content="Expert roof replacement services in Eugene. Premium materials & professional installation by certified contractors. Free estimates!" />
        <meta property="og:url" content="https://www.eugeneroofingnw.com/services/roof-replacement-eugene-or" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <ReplacementHero />
      <ReplacementContent />
      <ReplacementServices />
      <ReplacementFAQ />
      <ReplacementCTA />
    </div>
  );
};

export default Replacement;
