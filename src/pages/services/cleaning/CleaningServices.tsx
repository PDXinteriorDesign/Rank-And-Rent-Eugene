
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brush, Droplet, Search, Wrench, Shield, Leaf } from 'lucide-react';

const cleaningServices = [
  {
    title: "Professional Roof Inspection & Cleaning",
    description: "Our comprehensive inspection and cleaning service identifies potential issues early while ensuring your roof stays in pristine condition. We use specialized equipment and eco-friendly cleaning solutions.",
    icon: Search,
    features: [
      "Detailed Visual Inspection",
      "Gutter System Check",
      "Debris Removal",
      "Surface Cleaning",
      "Photo Documentation"
    ]
  },
  {
    title: "Advanced Moss Treatment",
    description: "Our specialized moss treatment service combines immediate removal with long-term prevention. We use EPA-approved solutions that are tough on moss but gentle on your roof and the environment.",
    icon: Brush,
    features: [
      "Eco-friendly Solutions",
      "Root Elimination",
      "Preventative Treatment",
      "pH-balanced Products",
      "Surface Protection"
    ]
  },
  {
    title: "Comprehensive Maintenance",
    description: "Regular maintenance prevents costly repairs and extends your roof's lifespan. Our service includes cleaning, minor repairs, and preventative treatments to keep your roof in optimal condition.",
    icon: Wrench,
    features: [
      "Seasonal Inspections",
      "Minor Repairs",
      "Preventative Care",
      "Performance Reports",
      "Weather Protection"
    ]
  },
  {
    title: "Complete Gutter Care",
    description: "Our professional gutter maintenance service ensures proper water drainage and prevents water damage. We clean, repair, and optimize your gutter system for maximum performance.",
    icon: Droplet,
    features: [
      "Deep Cleaning",
      "Flow Testing",
      "Downspout Clearing",
      "Guard Installation",
      "Leak Prevention"
    ]
  }
];

const CleaningServices = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Professional Cleaning Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cleaningServices.map((service, index) => (
            <Card 
              key={service.title}
              className="border border-gray-100 hover:border-secondary/20 transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <service.icon className="w-8 h-8 text-secondary shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-secondary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningServices;
