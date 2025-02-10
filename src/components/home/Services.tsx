
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
                className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
