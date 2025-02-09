
import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Wrench, House, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Emergency = () => {
  const emergencyServices = [
    {
      title: "24/7 Emergency Response",
      description: "Immediate response to protect your property from further damage",
      icon: Shield,
      features: ["Available 24/7", "Rapid response", "Immediate protection"]
    },
    {
      title: "Storm Damage",
      description: "Emergency repairs for storm and weather-related damage",
      icon: House,
      features: ["Wind damage", "Water damage", "Fallen debris removal"]
    },
    {
      title: "Leak Control",
      description: "Quick action to prevent water damage to your property",
      icon: Wrench,
      features: ["Leak containment", "Water extraction", "Temporary repairs"]
    },
    {
      title: "Structural Support",
      description: "Emergency structural reinforcement and stabilization",
      icon: Hammer,
      features: ["Temporary support", "Safety assessment", "Immediate stabilization"]
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Roofing Services in Eugene",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Eugene Roofing Experts",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Eugene",
        "addressRegion": "OR",
        "postalCode": "97401"
      }
    },
    "areaServed": "Eugene, Oregon",
    "description": "24/7 emergency roofing services in Eugene, Oregon. Immediate response for storm damage, leaks, and urgent repairs. Available day and night.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Emergency Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Emergency Response",
            "description": "Immediate emergency roofing assistance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Storm Damage Repair",
            "description": "Emergency storm damage repair services"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>24/7 Emergency Roofing Services Eugene, OR | Eugene Roofing Experts</title>
        <meta 
          name="description" 
          content="24/7 emergency roofing services in Eugene, Oregon. Immediate response for storm damage, leaks & urgent repairs. Licensed & insured professionals available day and night!"
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              24/7 Emergency Roofing Services
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Immediate response when you need it most. 
              Available 24/7 for all emergency roofing situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90">
                <a href="tel:541-555-0123">Call Now: (541) 555-0123</a>
              </Button>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link to="/contact">Request Emergency Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Emergency Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {emergencyServices.map((service, index) => (
              <Card 
                key={service.title}
                className="border border-gray-100 hover:border-secondary/20 transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <service.icon className="w-8 h-8 text-secondary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Emergency Response Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Call Us", description: "24/7 emergency hotline" },
              { step: "2", title: "Quick Response", description: "Immediate dispatch" },
              { step: "3", title: "Problem Solved", description: "Rapid resolution" }
            ].map((phase, index) => (
              <div 
                key={phase.step}
                className="text-center animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-destructive rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't Wait - Get Help Now
            </h2>
            <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
              Every minute counts in a roofing emergency. Contact us now for 
              immediate assistance and prevent further damage to your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="tel:541-555-0123">Call (541) 555-0123</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white">
                <Link to="/contact">Send Emergency Request</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;
