
import React from 'react';
import { Hammer, Shield, ArrowRight, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: "New Construction Installation",
    description: "Expert roofing installation for new homes and buildings",
    icon: Home,
  },
  {
    title: "Re-Roofing Services",
    description: "Complete roof replacement with minimal disruption",
    icon: Hammer,
  },
  {
    title: "Energy-Efficient Systems",
    description: "Modern roofing solutions that reduce energy costs",
    icon: ArrowRight,
  },
  {
    title: "Premium Materials",
    description: "Top-quality materials with extended warranties",
    icon: Shield,
  }
];

const InstallationServices = () => {
  return (
    <section 
      className="py-20 bg-muted/30"
      aria-labelledby="installation-services-title"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="installation-services-title" 
          className="text-3xl font-bold text-center mb-12"
        >
          Our Installation Services
        </h2>
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Installation services list"
        >
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-white hover:shadow-lg transition-shadow"
              role="listitem"
            >
              <CardContent className="p-6">
                <div aria-hidden="true">
                  <service.icon className="w-12 h-12 text-secondary mb-4" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationServices;
