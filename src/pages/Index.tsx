
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import TrustIndicators from '@/components/home/TrustIndicators';
import HomeCTA from '@/components/home/HomeCTA';
import FAQ from '@/components/home/FAQ';

const Index = () => {
  // Updated schema markup for better local SEO
  const schemaMarkup = {
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
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://eugeneroofing.com"
    }]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Eugene Roofing NW | #1 Local Roofing Contractors | Expert Repairs & Installation</title>
        <meta 
          name="description" 
          content="Trusted Eugene roofing experts for 20+ years. Specializing in roof repairs, installations & moss removal. Local, licensed & insured contractors offering free estimates. 24/7 emergency service available!" 
        />
        <meta property="og:title" content="Eugene Roofing NW | Top-Rated Local Roofing Contractors | Expert Installation & Repairs" />
        <meta property="og:description" content="Eugene's most trusted roofing contractors. Professional repairs, installations & moss removal services. Licensed & insured local experts serving Eugene, Oregon. Free estimates!" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac" />
        <link rel="canonical" href="https://eugeneroofing.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eugene Roofing NW | Expert Local Roofing Services" />
        <meta name="twitter:description" content="Professional roofing services in Eugene. Expert repairs, installations & moss removal. 24/7 emergency service available!" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac" />
        <meta name="geo.region" content="US-OR" />
        <meta name="geo.placename" content="Eugene" />
        <meta name="geo.position" content="44.0521;-123.0868" />
        <meta name="ICBM" content="44.0521, -123.0868" />
        <meta name="keywords" content="roofing Eugene OR, roof repair Eugene, emergency roof repair, new roof installation, residential roofing, Eugene Oregon roofer, local roofing contractor, moss removal Eugene, roof replacement Eugene, roofing company near me" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Eugene Roofing NW" />
        <meta name="revisit-after" content="7 days" />
        {/* Voice search optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Eugene Roofing NW" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-center mb-8">Eugene Roofing Experts – Your Trusted Local Roofing Contractors</h1>
          
          <p className="lead text-lg text-gray-700">
            When it comes to <strong>roofing in Eugene, OR</strong>, quality, durability, and expert craftsmanship matter. At <strong>Eugene Roofing NW</strong>, we specialize in providing top-tier roofing solutions designed to withstand the Pacific Northwest's challenging weather conditions.
          </p>

          <h2 className="text-3xl font-bold mt-12">The #1 Choice for Roofing in Eugene, OR</h2>
          <p>
            We take pride in being the <strong>best roofing company in Eugene, OR</strong>, offering superior service and <strong>high-quality materials</strong> from industry-leading manufacturers. Our experienced <strong>Eugene roofers</strong> provide expert craftsmanship with a focus on <strong>energy efficiency, durability, and aesthetic appeal</strong>.
          </p>
        </section>
      </div>
      <Services />
      <Testimonials />
      <TrustIndicators />
      <FAQ />
      <HomeCTA />
    </div>
  );
};

export default Index;
