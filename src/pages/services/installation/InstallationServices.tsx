
import React from 'react';
import { House, HomeIcon, Leaf, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const installationServices = [
  {
    title: "New Roof Construction",
    description: "Expert installation for new homes and buildings with premium materials",
    icon: House,
    features: ["Premium materials", "Expert installation", "Warranty coverage"]
  },
  {
    title: "Roof Replacement",
    description: "Efficient removal of old roofing and seamless new installations",
    icon: HomeIcon,
    features: ["Old roof removal", "Structural inspection", "Complete replacement"]
  },
  {
    title: "Energy-Efficient Roofing",
    description: "Options that reduce energy costs and improve insulation",
    icon: Leaf,
    features: ["Lower utility bills", "Improved insulation", "Eco-friendly options"]
  },
  {
    title: "Custom Solutions",
    description: "Tailored designs to match your home's style and architecture",
    icon: Wrench,
    features: ["Custom designs", "Multiple material options", "Architectural compatibility"]
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
