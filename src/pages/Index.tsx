import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Clock, Wrench, Star, Users, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';

const Index = () => {
  const services = [
    {
      title: "Expert Roof Repair",
      description: "Professional repair services for leaks, storm damage, and general wear. Available 24/7 for emergencies.",
      icon: Wrench,
      link: "/services/eugene-or-roof-repair",
      image: {
        src: "https://images.unsplash.com/photo-1632889148799-54339e89c5ab",
        alt: "Professional residential roof repair services in Eugene, Oregon - shows a well-maintained asphalt shingle roof"
      }
    },
    {
      title: "New Roof Installation",
      description: "Quality installations using premium materials. Enhance your home's value with our expert craftsmanship.",
      icon: ShieldCheck,
      link: "/services/eugene-or-roof-installation",
      image: {
        src: "https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac",
        alt: "Expert residential roof installation in Eugene, Oregon - featuring a new architectural shingle roof"
      }
    },
    {
      title: "Emergency Services",
      description: "Immediate response for unexpected damage. Available 24/7 to protect your home from further damage.",
      icon: Clock,
      link: "/services/emergency-roof-repair-eugene-or",
      image: {
        src: "https://images.unsplash.com/photo-1622993295842-4aece0c9769c",
        alt: "24/7 emergency residential roof repair services in Eugene - showing storm damage repair"
      }
    }
  ];

  const testimonials = [
    {
      text: "Best roofing contractor in Eugene! They fixed our storm damage quickly and professionally.",
      author: "Sarah Johnson",
      rating: 5
    },
    {
      text: "Outstanding quality and service. Their team installed our new metal roof perfectly.",
      author: "Mike Peterson",
      rating: 5
    },
    {
      text: "Fast emergency response after a major leak. Saved us from extensive water damage.",
      author: "David Wilson",
      rating: 5
    }
  ];

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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Eugene's Top-Rated Residential Roofing Experts
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              For over two decades, Eugene Roofing NW has been your trusted local roofing contractor. 
              We specialize in expert roof repairs, new installations, and 24/7 emergency services. 
              Our licensed and insured team delivers superior craftsmanship and exceptional customer service 
              to protect your biggest investment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto">
                <Link to="/contact">Get Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/services">Explore Services</Link>
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
                <img 
                  src={service.image.src} 
                  alt={service.image.alt}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading={index > 0 ? "lazy" : undefined}
                  width="400"
                  height="300"
                />
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
              <p className="text-gray-600">Your peace of mind is our priority</p>
            </div>
            <div className="animate-slideUp" style={{ animationDelay: "100ms" }}>
              <BadgeCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">10-year workmanship warranty</p>
            </div>
            <div className="animate-slideUp" style={{ animationDelay: "200ms" }}>
              <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5-Star Rated</h3>
              <p className="text-gray-600">Over 100+ satisfied customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Professional Roofing Services in Eugene?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Whether it's repairs, installation, or emergency services, our expert team is ready 
              to help protect your home. Contact us for a free, no-obligation estimate.
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
