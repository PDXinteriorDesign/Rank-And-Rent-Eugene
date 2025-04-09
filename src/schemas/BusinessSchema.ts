
export const getSchemaMarkup = () => ({
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Eugene Roofing NW",
  "image": "/lovable-uploads/2d103f99-a3cc-4a1c-a537-ef291d77ec26.png",
  "description": "Eugene's premier roofing contractor offering expert installation, repair & maintenance. 25+ years of experience, lifetime warranties & eco-friendly solutions.",
  "@id": "https://www.eugeneroofingnw.com/#organization",
  "url": "https://www.eugeneroofingnw.com",
  "telephone": "+1-541-555-0123",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Oak Street",
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
      "name": "Junction City",
      "addressRegion": "OR"
    },
    {
      "@type": "City",
      "name": "Cottage Grove",
      "addressRegion": "OR"
    },
    {
      "@type": "City",
      "name": "Veneta",
      "addressRegion": "OR"
    },
    {
      "@type": "City",
      "name": "Creswell",
      "addressRegion": "OR"
    }
  ],
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/eugeneroofingnw",
    "https://www.instagram.com/eugeneroofingnw",
    "https://www.linkedin.com/company/eugene-roofing-nw",
    "https://www.yelp.com/biz/eugene-roofing-nw-eugene"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "15:00"
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
          "name": "Roof Installation",
          "description": "Professional roof installation services with premium materials"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Repair",
          "description": "Expert roof repair and maintenance services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Roofing",
          "description": "24/7 emergency roofing services in Eugene"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Replacement",
          "description": "Complete roof replacement with premium materials"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Cleaning",
          "description": "Professional moss removal and roof cleaning"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "award": [
    "GAF Certified Contractor", 
    "CertainTeed Master Shingle Applicator", 
    "Best of Eugene 2023 - Roofing Services"
  ],
  "foundingDate": "1996",
  "slogan": "Eugene's Most Trusted Roofing Experts",
  "keywords": "roof repair Eugene, roof replacement Eugene, emergency roofing Eugene, roof installation, metal roofing Eugene"
});
