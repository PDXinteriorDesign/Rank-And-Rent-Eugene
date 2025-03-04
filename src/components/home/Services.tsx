
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Wrench, Clock } from 'lucide-react';

const services = [
  {
    title: "Expert Roof Repair",
    description: "Professional repair services for leaks, storm damage, and general wear. Available 24/7 for emergencies.",
    icon: Wrench,
    link: "/services/eugene-or-roof-repair",
    image: {
      src: "/lovable-uploads/5e9bb16f-eef5-4713-b4c8-71245b0d5562.png",
      alt: "Recently completed residential roof repair in Eugene, Oregon featuring high-quality architectural shingles, brick facade, and craftsman-style dormers"
    }
  },
  {
    title: "New Roof Installation",
    description: "Quality installations using premium materials. Enhance your home's value with our expert craftsmanship.",
    icon: ShieldCheck,
    link: "/services/eugene-or-roof-installation",
    image: {
      src: "/lovable-uploads/9f507841-9578-4498-b919-0385967ccedb.png",
      alt: "New residential roof installation in progress showing professional roofing underlayment and OSB sheathing with precise installation techniques"
    }
  },
  {
    title: "Emergency Services",
    description: "Immediate response for unexpected damage. Available 24/7 to protect your home from further damage.",
    icon: Clock,
    link: "/services/emergency-roof-repair-eugene-or",
    image: {
      src: "/lovable-uploads/5997350c-7571-42cc-b7c1-6b57b007c504.png",
      alt: "Close-up detail of premium metal roofing tiles showing professional installation and weather-resistant construction for Eugene homes"
    }
  }
];

const Services = () => {
  return (
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
                className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center gap-2"
                aria-label={`Learn more about ${service.title.toLowerCase()}`}
              >
                Learn More 
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 transition-colors"
          >
            Get Your Free Estimate Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
