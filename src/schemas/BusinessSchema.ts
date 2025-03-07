export const getSchemaMarkup = () => ({
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Eugene Roofing NW",
  "image": "https://eugeneroofingnw.com/lovable-uploads/b161862e-e6ae-4e2d-ac94-f4d465c5d06d.png",
  "description": "Eugene's trusted roofing experts specializing in residential & commercial roofing. Professional repairs, installations & moss removal with 24/7 emergency service. Licensed & insured local roofers serving Eugene, Oregon.",
  "@id": "https://eugeneroofingnw.com",
  "url": "https://eugeneroofingnw.com",
  "telephone": "+1-541-555-0123",
  "priceRange": "$$",
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
    "latitude": 44.0521,
    "longitude": -123.0868
  },
  "sameAs": [
    "https://www.facebook.com/eugeneroofingnw",
    "https://www.instagram.com/eugeneroofingnw",
    "https://www.linkedin.com/company/eugene-roofing-nw"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Eugene",
      "sameAs": "https://en.wikipedia.org/wiki/Eugene,_Oregon"
    },
    {
      "@type": "City",
      "name": "Springfield"
    },
    {
      "@type": "City",
      "name": "Coburg"
    },
    {
      "@type": "City",
      "name": "Creswell"
    },
    {
      "@type": "City",
      "name": "Veneta"
    },
    {
      "@type": "City",
      "name": "Junction City"
    },
    {
      "@type": "City",
      "name": "Harrisburg"
    },
    {
      "@type": "City",
      "name": "Elmira"
    },
    {
      "@type": "City",
      "name": "Lowell"
    },
    {
      "@type": "City",
      "name": "Cottage Grove"
    },
    {
      "@type": "City",
      "name": "Pleasant Hill"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Repair",
          "description": "Expert repair services for leaks, storm damage, and moss removal in Eugene's wet climate."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "New Roof Installation",
          "description": "Premium roof installations using weather-resistant materials designed for Oregon weather."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Roofing Services",
          "description": "24/7 emergency roofing repair services in Eugene and surrounding areas."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Cleaning",
          "description": "Professional roof cleaning and moss removal services."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Replacement",
          "description": "Complete roof replacement services with premium materials and expert installation."
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87",
    "bestRating": "5",
    "worstRating": "1"
  }
});
