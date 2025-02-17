
import React from 'react';
import { House, Home, Leaf, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const installationServices = [
  {
    title: "New Construction Installation",
    description: "Expert installation for new homes using premium materials rated for Eugene's climate patterns",
    icon: House,
    features: [
      "Comprehensive weather protection",
      "Energy-efficient designs",
      "50-year material warranties"
    ]
  },
  {
    title: "Complete Roof Replacement",
    description: "Professional removal and replacement with minimal disruption to your daily routine",
    icon: Home,
    features: [
      "Thorough old roof removal",
      "Structural integrity check",
      "Enhanced ventilation systems"
    ]
  },
  {
    title: "Energy-Efficient Solutions",
    description: "Modern roofing systems that reduce energy costs and improve home comfort",
    icon: Leaf,
    features: [
      "Energy Star certified materials",
      "Solar-ready installation",
      "Advanced insulation options"
    ]
  },
  {
    title: "Custom Installations",
    description: "Tailored solutions for Eugene's diverse architectural styles",
    icon: Wrench,
    features: [
      "Historic home expertise",
      "Modern design options",
      "Complex roof solutions"
    ]
  }
];

const InstallationServices = () => {
  return (
    <section id="services" className="py-16 bg-muted/30 scroll-mt-32">
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
  );
};

export default InstallationServices;
