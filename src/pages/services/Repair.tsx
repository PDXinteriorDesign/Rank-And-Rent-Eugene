
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
      title: "Emergency Repairs",
      description: "Quick response for urgent roof repairs to prevent further damage",
      icon: Shield,
      features: ["24/7 availability", "Fast response time", "Immediate protection"]
    },
    {
      title: "Leak Repair",
      description: "Professional leak detection and repair services",
      icon: House,
      features: ["Thorough inspection", "Precise leak location", "Long-lasting fixes"]
    },
    {
      title: "Maintenance & Repair",
      description: "Regular maintenance and minor repair services",
      icon: Wrench,
      features: ["Preventive care", "Minor fixes", "Extended roof life"]
    },
    {
      title: "Storm Damage Repair",
      description: "Expert repair services for storm and weather damage",
      icon: Hammer,
      features: ["Weather damage assessment", "Insurance assistance", "Complete restoration"]
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof Repair Services in Eugene",
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
    "description": "Professional roof repair services in Eugene, Oregon. We offer emergency repairs, leak detection, maintenance, and storm damage repair with expert craftsmanship.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roof Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Repairs",
            "description": "24/7 emergency roof repair services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Leak Repair",
            "description": "Professional leak detection and repair"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Professional Roof Repair Services Eugene, OR | Eugene Roofing Experts</title>
        <meta 
          name="description" 
          content="Expert roof repair services in Eugene, Oregon. Emergency repairs, leak detection, maintenance & storm damage repair. Licensed & insured professionals. 24/7 service!"
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
              Fast, reliable roof repair services available 24/7. 
              Licensed, insured, and committed to quality repairs.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Get Emergency Repair</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Repair Services</h2>
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

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Repair Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", description: "Thorough damage evaluation" },
              { step: "2", title: "Quote", description: "Transparent pricing" },
              { step: "3", title: "Repair", description: "Expert execution" },
              { step: "4", title: "Guarantee", description: "Quality assurance" }
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
              Need Emergency Roof Repair?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Don't wait until it's too late. Contact us now for immediate assistance 
              with your roof repair needs.
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
