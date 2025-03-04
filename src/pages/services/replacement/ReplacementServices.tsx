
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Shield, Sun, Cloud } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Complete Roof Replacement",
    description: "Full tear-off and replacement with premium materials"
  },
  {
    icon: Shield,
    title: "Storm Damage Replacement",
    description: "Insurance claim assistance and emergency service"
  },
  {
    icon: Sun,
    title: "Energy Efficient Solutions",
    description: "Cool roofing options to reduce energy costs"
  },
  {
    icon: Cloud,
    title: "Weather-Resistant Systems",
    description: "Designed for Eugene's wet climate"
  }
];

const ReplacementServices = () => {
  return (
    <section 
      className="py-20 bg-muted/30"
      aria-labelledby="replacement-services-title"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="replacement-services-title" 
          className="text-3xl font-bold text-center mb-12"
        >
          Our Replacement Services
        </h2>
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Replacement services list"
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

export default ReplacementServices;
