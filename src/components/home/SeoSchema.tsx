
import React from 'react';

export const getSchemaMarkup = () => ({
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Eugene Roofing NW",
  "image": "https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac",
  "description": "Eugene's trusted roofing experts specializing in residential & commercial roofing. Professional repairs, installations & moss removal with 24/7 emergency service. Licensed & insured local roofers serving Eugene, Oregon.",
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
  "url": "https://eugeneroofing.com",
  "telephone": "+1-541-555-0123",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 44.0521,
      "longitude": -123.0868
    },
    "geoRadius": "30000"
  },
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "07:00",
    "closes": "19:00"
  },
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
      }
    ]
  }
});

export const getBreadcrumbSchema = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://eugeneroofing.com"
  }]
});
