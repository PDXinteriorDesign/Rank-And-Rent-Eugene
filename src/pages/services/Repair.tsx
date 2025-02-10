import React from 'react';
import { Helmet } from 'react-helmet';
import { Wrench, Shield, House, Hammer, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Repair = () => {
  const repairServices = [
    {
      title: "Leak Detection & Repair",
      description: "Stop water damage before it spreads with our professional leak detection and repair services. We identify the source quickly and provide lasting solutions.",
      icon: Shield,
      features: ["Advanced Detection Methods", "Immediate Response", "Permanent Solutions"]
    },
    {
      title: "Shingle Replacement",
      description: "Fix missing, cracked, or curling shingles with our expert replacement service. We use high-quality materials to ensure durability and protection.",
      icon: House,
      features: ["Premium Materials", "Expert Installation", "Color Matching"]
    },
    {
      title: "Storm Damage Repair",
      description: "Fast, reliable solutions for wind, hail, and rain damage. Our emergency team is ready to respond quickly to protect your home from further damage.",
      icon: Wrench,
      features: ["24/7 Response", "Insurance Support", "Complete Assessment"]
    },
    {
      title: "Preventative Maintenance",
      description: "Regular inspections and maintenance to catch issues early and extend your roof's lifespan. Save money by preventing major repairs.",
      icon: Hammer,
      features: ["Regular Inspections", "Detailed Reports", "Cost-Effective Plans"]
    }
  ];

  const warningSignsList = [
    "Water stains on ceilings or walls",
    "Missing or damaged shingles",
    "Sagging roof sections",
    "Mold or moss growth",
    "Higher energy bills due to poor insulation"
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
        <title>Roof Repair in Eugene, Oregon – Reliable, Fast, and Affordable Services | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Expert roof repair in Eugene, OR. Specializing in leak detection, storm damage repair, and emergency services. Local specialists with years of experience. Free estimates!"
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
              Protect Your Home with Expert Roof Repair in Eugene, OR
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Whether it's minor leaks, storm damage, or aging shingles, our professional roof repair services 
              are designed to keep your home safe and secure. We understand Oregon's unique weather conditions 
              and provide tailored solutions to ensure your roof withstands the test of time.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link to="/contact">Get Free Inspection</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us for Your Roof Repair in Eugene?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Local Expertise", description: "Serving Eugene community with deep understanding of Oregon's climate" },
              { title: "Emergency Repairs", description: "Quick response times for urgent repairs to prevent further damage" },
              { title: "Quality Craftsmanship", description: "Premium materials and proven techniques for lasting results" },
              { title: "Free Estimates", description: "Transparent pricing with no hidden fees or surprises" }
            ].map((item, index) => (
              <div key={item.title} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Professional Repair Services</h2>
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

      {/* Warning Signs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Signs You Need Roof Repair</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {warningSignsList.map((sign) => (
                <li key={sign} className="flex items-center gap-3 text-lg">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get a Free Roof Inspection Today!
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Don't wait until a small issue becomes a costly problem. Contact Eugene Roofing NW now 
              for a free roof inspection and estimate. Proudly serving Eugene, Springfield, and 
              surrounding areas in Lane County, Oregon.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link to="/contact">Schedule Inspection</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white hover:bg-white/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Repair;
