
import React from 'react';
import { Helmet } from 'react-helmet';
import { Building, Wrench, House, Roof } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Installation = () => {
  const installationServices = [
    {
      title: "New Roof Installation",
      description: "Complete installation of new roofing systems using premium materials",
      icon: House,
      features: ["Premium materials", "Expert installation", "Warranty coverage"]
    },
    {
      title: "Roof Replacement",
      description: "Full roof replacement services when repair isn't enough",
      icon: Roof,
      features: ["Old roof removal", "Structural inspection", "Complete replacement"]
    },
    {
      title: "Commercial Roofing",
      description: "Specialized installation services for commercial buildings",
      icon: Building,
      features: ["Flat roof systems", "Metal roofing", "TPO/EPDM systems"]
    },
    {
      title: "Custom Solutions",
      description: "Tailored roofing solutions for unique architectural designs",
      icon: Wrench,
      features: ["Custom materials", "Architectural design", "Specialized installation"]
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof Installation Services in Eugene",
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
    "description": "Professional roof installation services in Eugene, Oregon. We offer new roof installation, replacement, and commercial roofing solutions with premium materials and expert craftsmanship.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roof Installation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "New Roof Installation",
            "description": "Complete installation of new roofing systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Replacement",
            "description": "Full roof replacement services"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Professional Roof Installation Services Eugene, OR | Eugene Roofing Experts</title>
        <meta 
          name="description" 
          content="Expert roof installation services in Eugene, Oregon. New roof installation, replacement & commercial roofing. Licensed & insured professionals. Free estimates!"
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
              Professional Roof Installation Services in Eugene
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Expert installation of new roofs and replacement services. 
              Licensed, insured, and committed to quality craftsmanship.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Get Free Installation Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Installation Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {installationServices.map((service, index) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Installation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Inspection", description: "Thorough roof evaluation" },
              { step: "2", title: "Planning", description: "Detailed project planning" },
              { step: "3", title: "Installation", description: "Expert installation" },
              { step: "4", title: "Final Inspection", description: "Quality assurance check" }
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
              Ready to Install Your New Roof?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Get a free, detailed quote for your roof installation project. 
              Our team is ready to help you protect your home.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Installation;
