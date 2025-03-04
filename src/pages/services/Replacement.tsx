
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
        <title>Professional Roof Replacement Eugene OR | Premium Materials | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Expert roof replacement in Eugene by certified contractors. Premium materials, professional installation & lifetime warranties. GAF certified. Free consultation!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/services/roof-replacement-eugene-oregon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Professional Roof Replacement Eugene OR | Premium Materials" />
        <meta property="og:description" content="Expert roof replacement in Eugene. Premium materials & professional installation by certified contractors. Lifetime warranty!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/5e9bb16f-eef5-4713-b4c8-71245b0d5562.png" />
        <meta property="og:image:alt" content="Professional roofing team performing complete roof replacement on Eugene home" />
        <meta name="keywords" content="roof replacement Eugene OR, complete roof replacement, roofing contractor Eugene, new roof installation" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <main className="space-y-16">
        <ReplacementHero />
        <ReplacementContent />
        <ReplacementServices />
        <ReplacementFAQ />
        <ReplacementCTA />
      </main>
    </div>
  );
};

export default Replacement;
