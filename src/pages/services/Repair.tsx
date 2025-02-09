
import React from 'react';
import { Helmet } from 'react-helmet';
import { Wrench, Shield, House, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Repair = () => {
  const repairServices = [
    {
      title: "Emergency Roof Repairs",
      description: "Fast, reliable 24/7 emergency response in Eugene. Our expert team prevents further damage to your property with immediate professional repairs.",
      icon: Shield,
      features: ["24/7 Emergency Response", "Storm Damage Specialists", "Insurance Claim Support"]
    },
    {
      title: "Professional Leak Detection & Repair",
      description: "State-of-the-art leak detection and permanent repair solutions. We find and fix roof leaks fast to protect your home.",
      icon: House,
      features: ["Advanced Leak Detection", "Comprehensive Inspection", "Long-lasting Solutions"]
    },
    {
      title: "Preventive Maintenance",
      description: "Proactive maintenance programs to extend your roof's lifespan and prevent costly emergency repairs. Regular inspections save you money.",
      icon: Wrench,
      features: ["Scheduled Inspections", "Detailed Reports", "Cost-effective Plans"]
    },
    {
      title: "Storm Damage Restoration",
      description: "Expert storm damage repair services in Eugene. We handle wind, hail, and debris damage with professional restoration techniques.",
      icon: Hammer,
      features: ["Comprehensive Assessment", "Professional Repairs", "Quality Materials"]
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Roof Repair Services in Eugene",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Eugene Roofing NW",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Eugene",
        "addressRegion": "OR",
        "postalCode": "97401"
      }
    },
    "areaServed": "Eugene, Oregon",
    "description": "Expert roof repair services in Eugene, Oregon. Specializing in leak repair, storm damage restoration, and 24/7 emergency repairs with licensed professionals.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roof Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Repairs",
            "description": "24/7 emergency roof repair services in Eugene with rapid response times"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Leak Detection & Repair",
            "description": "Professional leak detection and permanent repair solutions in Eugene"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Expert Roof Repair Services Eugene, OR | Same-Day Repairs | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Professional roof repair in Eugene, OR. 24/7 emergency service, leak repair, storm damage restoration. Licensed & insured local experts with same-day service available."
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
              Expert Roof Repair Services in Eugene
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              From emergency repairs to preventive maintenance, our licensed and certified team 
              provides fast, reliable roof repair services throughout Eugene. Available 24/7 
              for emergency repairs with same-day service for urgent issues.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Get Emergency Repair Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Repair Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {repairServices.map((service, index) => (
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

      {/* Common Problems Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Common Roofing Issues in Eugene</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Weather-Related Damage</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Wind damage and missing shingles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Heavy rain infiltration and leaks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Storm debris impact damage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Ice dam formation in winter
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Maintenance Issues</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Aging shingles and materials
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Flashing deterioration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Gutter system problems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Ventilation concerns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Repair Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Inspection", description: "Thorough damage assessment" },
              { step: "2", title: "Detailed Quote", description: "Clear, upfront pricing" },
              { step: "3", title: "Expert Repair", description: "Professional execution" },
              { step: "4", title: "Quality Check", description: "Satisfaction guaranteed" }
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Emergency Roof Repair in Eugene?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Don't let roof damage compromise your home's safety. Contact Eugene Roofing NW now 
              for immediate assistance. Our expert team is available 24/7 for emergency repairs.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Repair;
