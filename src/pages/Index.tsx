
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Clock, Wrench, Star, Users, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';

const Index = () => {
  const services = [
    {
      title: "Roof Repair",
      description: "Expert repair services for all types of roofs. Fix leaks, damage, and wear.",
      icon: Wrench,
      link: "/services/repair"
    },
    {
      title: "Roof Installation",
      description: "Professional installation of new roofs with quality materials and craftsmanship.",
      icon: ShieldCheck,
      link: "/services/installation"
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency roof repair services for unexpected damage and leaks.",
      icon: Clock,
      link: "/services/emergency"
    }
  ];

  const testimonials = [
    {
      text: "They fixed our roof quickly and professionally. Best service in Eugene!",
      author: "Sarah Johnson",
      rating: 5
    },
    {
      text: "Outstanding quality and customer service. Highly recommend!",
      author: "Mike Peterson",
      rating: 5
    },
    {
      text: "Fast response time for emergency repair. Saved our home from water damage.",
      author: "David Wilson",
      rating: 5
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Eugene Roofing Experts",
    "image": "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8",
    "description": "Professional roofing services in Eugene, Oregon. Specializing in roof repair, installation, and emergency services.",
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
    "areaServed": "Eugene, Oregon",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "87"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Eugene Roofing Experts | Professional Roof Repair & Installation Services</title>
        <meta name="description" content="Eugene's trusted roofing experts. Professional roof repair, installation & emergency services. Licensed & insured local roofers serving Eugene, Oregon." />
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
              Eugene's Most Trusted Roofing Experts
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Professional roof repair, installation & emergency services in Eugene, Oregon. 
              Licensed, insured, and committed to quality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto">
                <Link to="/contact">Get Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Roofing Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="p-6 rounded-lg border border-gray-100 hover:border-secondary/20 transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.author}
                className="bg-white p-6 rounded-lg shadow-sm animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-slideUp">
              <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
            </div>
            <div className="animate-slideUp" style={{ animationDelay: "100ms" }}>
              <BadgeCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">10-year workmanship warranty on all services</p>
            </div>
            <div className="animate-slideUp" style={{ animationDelay: "200ms" }}>
              <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5-Star Rated</h3>
              <p className="text-gray-600">Over 100+ satisfied customers in Eugene</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Roofing Expert in Eugene?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation estimate for your roofing project. 
              Our team is ready to help you protect your home.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

