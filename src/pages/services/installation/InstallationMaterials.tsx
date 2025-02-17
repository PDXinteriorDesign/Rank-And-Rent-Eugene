
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const roofingMaterials = [
  {
    title: "Asphalt Shingles",
    description: "Durable, cost-effective, and versatile roofing solution",
    features: ["Cost-effective", "Various styles", "Easy maintenance"]
  },
  {
    title: "Metal Roofing",
    description: "Long-lasting, energy-efficient, and low maintenance option",
    features: ["Long lifespan", "Energy efficient", "Weather resistant"]
  },
  {
    title: "Tile Roofing",
    description: "Elegant, durable, and weather-resistant roofing choice",
    features: ["Aesthetic appeal", "Durability", "Weather protection"]
  },
  {
    title: "Flat Roofing",
    description: "Ideal for modern homes and commercial properties",
    features: ["Modern design", "Commercial grade", "Space efficient"]
  }
];

const InstallationMaterials = () => {
  return (
    <section id="materials" className="py-16 bg-muted/30 scroll-mt-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Types of Roofing Materials We Install</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roofingMaterials.map((material, index) => (
            <Card 
              key={material.title}
              className="animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{material.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{material.description}</p>
                <ul className="space-y-2">
                  {material.features.map((feature) => (
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

export default InstallationMaterials;
