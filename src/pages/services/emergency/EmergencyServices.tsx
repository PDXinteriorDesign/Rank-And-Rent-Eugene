
import React from 'react';
import { Shield, House, Wrench, Hammer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EmergencyServices = () => {
  const services = [
    {
      title: "Storm Damage",
      description: "High winds, hail, and heavy rain can cause severe roof damage",
      icon: Shield,
      features: ["Wind damage", "Hail damage", "Rain protection"]
    },
    {
      title: "Severe Leaks",
      description: "Rapid detection and repair to prevent water damage inside your home",
      icon: House,
      features: ["Leak detection", "Water damage prevention", "Interior protection"]
    },
    {
      title: "Structural Repairs",
      description: "Quick response for fallen tree limbs and structural damage",
      icon: Wrench,
      features: ["Debris removal", "Structural assessment", "Emergency reinforcement"]
    },
    {
      title: "Immediate Solutions",
      description: "Fast replacement of blown-off shingles and compromised sections",
      icon: Hammer,
      features: ["Shingle replacement", "Quick fixes", "Roof stabilization"]
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Common Roofing Emergencies We Handle</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
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

export default EmergencyServices;
