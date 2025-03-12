
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
  "areaServed": ["Eugene", "Springfield", "Lane County"],
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/eugeneroofingnw",
    "https://www.instagram.com/eugeneroofingnw"
  ],
  "openingHoursSpecification": {
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
      }
    ]
  }
});
