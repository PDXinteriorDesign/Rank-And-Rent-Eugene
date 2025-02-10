
import React from 'react';
import { Wrench, Shield, House, Hammer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const repairServices = [
  {
    title: "Leak Detection & Repair",
    description: "Stop water damage before it spreads with our professional leak detection and repair services. We identify the source quickly and provide lasting solutions.",
    icon: Shield,
    features: ["Advanced Detection Methods", "Immediate Response", "Permanent Solutions"]
  },
  {
    title: "Shingle Replacement",
    description: "Fix missing, cracked, or curling shingles with our expert replacement service. We use high-quality materials to ensure durability and protection.",
    icon: House,
    features: ["Premium Materials", "Expert Installation", "Color Matching"]
  },
  {
    title: "Storm Damage Repair",
    description: "Fast, reliable solutions for wind, hail, and rain damage. Our emergency team is ready to respond quickly to protect your home from further damage.",
    icon: Wrench,
    features: ["24/7 Response", "Insurance Support", "Complete Assessment"]
  },
  {
    title: "Preventative Maintenance",
    description: "Regular inspections and maintenance to catch issues early and extend your roof's lifespan. Save money by preventing major repairs.",
    icon: Hammer,
    features: ["Regular Inspections", "Detailed Reports", "Cost-Effective Plans"]
  }
];

const RepairServices = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Professional Repair Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {repairServices.map((service, index) => (
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

export default RepairServices;
