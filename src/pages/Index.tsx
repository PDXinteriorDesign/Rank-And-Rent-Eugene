
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import TrustIndicators from '@/components/home/TrustIndicators';
import HomeCTA from '@/components/home/HomeCTA';

const Index = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Eugene Roofing NW",
    "image": "https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac",
    "description": "Eugene's trusted residential roofing experts providing professional roof repair, installation, and 24/7 emergency services. Licensed and insured local roofers serving Eugene, Oregon.",
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
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Eugene Roofing NW | Expert Residential Roof Repair & Installation Services in Eugene, OR</title>
        <meta 
          name="description" 
          content="Eugene's top-rated residential roofing experts. Professional roof repair, installation & 24/7 emergency services. Licensed & insured local roofers serving Eugene, Oregon." 
        />
        <meta property="og:title" content="Eugene Roofing NW | Expert Residential Roofing Services in Eugene, OR" />
        <meta property="og:description" content="Eugene's trusted residential roofing experts. Professional roof repair, installation & emergency services. Licensed & insured local roofers serving Eugene, Oregon." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac" />
        <link rel="canonical" href="https://eugeneroofing.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eugene Roofing NW | Expert Residential Roofing Services" />
        <meta name="twitter:description" content="Professional roofing services in Eugene, Oregon. Expert repairs, installations & 24/7 emergency service." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac" />
        <meta name="geo.region" content="US-OR" />
        <meta name="geo.placename" content="Eugene" />
        <meta name="geo.position" content="44.0521;-123.0868" />
        <meta name="ICBM" content="44.0521, -123.0868" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <TrustIndicators />
      <HomeCTA />
    </div>
  );
};

export default Index;
