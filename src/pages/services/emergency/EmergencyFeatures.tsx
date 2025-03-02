
import React from 'react';
import { Clock, House, Shield, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EmergencyFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us for Emergency Repair?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Rapid Response", description: "Available day or night for immediate assistance", icon: Clock },
            { title: "Local Expertise", description: "Understanding Eugene's weather conditions helps us act fast", icon: House },
            { title: "Certified Technicians", description: "Skilled professionals with emergency repair experience", icon: Shield },
            { title: "Complete Solutions", description: "Quick fixes and comprehensive permanent repairs", icon: Wrench }
          ].map((feature, index) => (
            <Card 
              key={feature.title}
              className="border border-gray-100 hover:border-secondary/20 transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyFeatures;
