
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
    "serviceType": "Roof Replacement",
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
    "description": "Professional roof replacement services in Eugene, Oregon. Expert installation of new roofs with premium materials and guaranteed workmanship with lifetime warranties.",
    "offers": {
      "@type": "Offer",
      "price": "8000.00",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "8000.00",
        "maxPrice": "20000.00"
      },
      "description": "Complete roof replacement services starting at $8,000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roof Replacement Options",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Asphalt Shingle Replacement",
            "description": "Premium architectural shingles with lifetime warranty"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Metal Roof Replacement",
            "description": "Durable metal roofing systems with 50-year warranty"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cedar Shake Replacement",
            "description": "Natural cedar shake roofing for premium homes"
          }
        }
      ]
    }
  };

  return (
    <div className="space-y-16">
      <Helmet>
        <title>Professional Roof Replacement Eugene OR | Premium Materials | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Expert roof replacement in Eugene by GAF certified contractors. Premium materials, professional installation & lifetime warranties. Competitive pricing with financing available. Free consultation!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/services/roof-replacement-eugene-oregon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Professional Roof Replacement Eugene OR | Premium Materials" />
        <meta property="og:description" content="Expert roof replacement in Eugene. Premium materials & professional installation by certified contractors. Lifetime warranty!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/5e9bb16f-eef5-4713-b4c8-71245b0d5562.png" />
        <meta property="og:image:alt" content="Professional roofing team performing complete roof replacement on Eugene home" />
        <meta name="keywords" content="roof replacement Eugene OR, complete roof replacement, roofing contractor Eugene, new roof installation, roof replacement cost Eugene, asphalt shingle roof Eugene, metal roofing Eugene, cedar shake roofing" />
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
