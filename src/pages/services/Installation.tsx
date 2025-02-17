
import React from 'react';
import { Helmet } from 'react-helmet';
import { Building, Wrench, House, HomeIcon, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import InstallationFAQ from './installation/InstallationFAQ';
import RepairContent from './repair/RepairContent';

const Installation = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Roof Installation Services in Eugene",
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
    "description": "Professional roof installation services in Eugene, Oregon. We offer new roof installation, replacement, and energy-efficient roofing solutions with premium materials and expert craftsmanship.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roof Installation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "New Roof Construction",
            "description": "Expert installation for new homes and buildings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Replacement",
            "description": "Complete roof replacement services"
          }
        }
      ]
    }
  };

  const installationServices = [
    {
      title: "New Roof Construction",
      description: "Expert installation for new homes and buildings with premium materials",
      icon: House,
      features: ["Premium materials", "Expert installation", "Warranty coverage"]
    },
    {
      title: "Roof Replacement",
      description: "Efficient removal of old roofing and seamless new installations",
      icon: HomeIcon,
      features: ["Old roof removal", "Structural inspection", "Complete replacement"]
    },
    {
      title: "Energy-Efficient Roofing",
      "description": "Options that reduce energy costs and improve insulation",
      icon: Leaf,
      features: ["Lower utility bills", "Improved insulation", "Eco-friendly options"]
    },
    {
      title: "Custom Solutions",
      description: "Tailored designs to match your home's style and architecture",
      icon: Wrench,
      features: ["Custom designs", "Multiple material options", "Architectural compatibility"]
    }
  ];

  const roofingMaterials = [
    {
      title: "Asphalt Shingles",
      description: "Durable, cost-effective, and versatile roofing solution",
      features: ["Cost-effective", "Various styles", "Easy maintenance"]
    },
    {
      title: "Metal Roofing",
      description: "Long-lasting, energy-efficient, and low maintenance option",
      features: ["Long lifespan", "Energy efficient", "Weather resistant"]
    },
    {
      title: "Tile Roofing",
      description: "Elegant, durable, and weather-resistant roofing choice",
      features: ["Aesthetic appeal", "Durability", "Weather protection"]
    },
    {
      title: "Flat Roofing",
      description: "Ideal for modern homes and commercial properties",
      features: ["Modern design", "Commercial grade", "Space efficient"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Professional Roof Installation Eugene, OR | Expert Installation Services</title>
        <meta 
          name="description" 
          content="Expert roof installation services in Eugene, Oregon. New construction, replacement & energy-efficient roofing solutions. Local expertise, quality materials, free estimates!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Professional Roof Installation Eugene, OR | Expert Installation Services" />
        <meta property="og:description" content="Expert roof installation services in Eugene. New construction, replacement & energy-efficient solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eugeneroofing.com/services/eugene-or-roof-installation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Roof Installation Eugene, OR | Expert Installation Services" />
        <meta name="twitter:description" content="Expert roof installation services in Eugene. Quality materials and craftsmanship." />
        <meta name="keywords" content="roof installation Eugene, new roof Eugene, roof replacement Eugene OR, residential roofing Eugene, commercial roofing Eugene" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Eugene Roofing NW" />
        <link rel="canonical" href="https://eugeneroofing.com/services/eugene-or-roof-installation" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />
      <main id="main-content" role="main" className="space-y-20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fadeIn">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Professional Roof Installation in Eugene, Oregon
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                When it comes to protecting your home, nothing is more critical than a properly installed roof. 
                Trust our expert team for reliable, durable, and affordable roofing solutions.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link to="/contact">Get Free Installation Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        <nav aria-label="Page sections" className="sticky top-20 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 hidden md:block">
          <div className="container mx-auto px-4">
            <ul className="flex space-x-8 py-4 text-sm">
              <li><a href="#overview" className="text-gray-600 hover:text-primary transition-colors">Overview</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#why-choose" className="text-gray-600 hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#materials" className="text-gray-600 hover:text-primary transition-colors">Materials</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </nav>

        {/* Overview Section */}
        <section id="overview" className="py-16 bg-white">
          <RepairContent />
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16 bg-muted/30">
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

        {/* Why Choose Us Section */}
        <section id="why-choose" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Expert Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Our certified team brings years of experience and expertise to every installation project.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quality Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">We use only premium roofing materials from trusted manufacturers to ensure lasting durability.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Warranty Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">All our installations come with comprehensive warranty coverage for your peace of mind.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section id="materials" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Types of Roofing Materials We Install</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {roofingMaterials.map((material, index) => (
                <Card 
                  key={material.title}
                  className="animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{material.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{material.description}</p>
                    <ul className="space-y-2">
                      {material.features.map((feature) => (
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

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-muted/30 max-w-5xl mx-auto">
          <InstallationFAQ />
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Install Your New Roof?
              </h2>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                Get a free, detailed quote for your roof installation project. 
                Our team is ready to help you protect your home with quality roofing solutions.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Installation;
