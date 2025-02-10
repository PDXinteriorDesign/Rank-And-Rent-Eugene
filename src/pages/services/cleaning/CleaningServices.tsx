
import React from 'react';
import { Brush, Droplet, Search, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const cleaningServices = [
  {
    title: "Roof Cleaning & Inspection",
    description: "Regular roof cleaning and inspection are vital for identifying potential issues early and maintaining roof health. We conduct thorough inspections and cleaning to remove dirt and debris.",
    icon: Search,
    features: ["Detailed Inspection", "Debris Removal", "Early Issue Detection"]
  },
  {
    title: "Moss Treatment",
    description: "Our roof cleaning and moss treatment service safely removes existing moss and applies eco-friendly treatments to prevent future growth, extending your roof's lifespan.",
    icon: Brush,
    features: ["Safe Removal", "Preventative Treatment", "Eco-friendly Solutions"]
  },
  {
    title: "Cleaning & Repair",
    description: "Comprehensive service that combines thorough cleaning with necessary repairs, addressing issues like damaged shingles or leaks promptly and efficiently.",
    icon: Wrench,
    features: ["Combined Service", "Immediate Repairs", "Quality Materials"]
  },
  {
    title: "Gutter Maintenance",
    description: "Ensure proper water drainage with our complete gutter cleaning and repair service, preventing water damage and maintaining your roof's structural integrity.",
    icon: Droplet,
    features: ["Debris Removal", "Gutter Repairs", "Flow Testing"]
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

export default CleaningServices;
