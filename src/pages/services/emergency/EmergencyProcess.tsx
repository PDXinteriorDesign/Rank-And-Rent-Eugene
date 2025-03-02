
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Phone, Truck, ClipboardCheck } from 'lucide-react';

const EmergencyProcess = () => {
  const steps = [
    {
      icon: Phone,
      title: "24/7 Response",
      description: "Call us anytime, day or night. Our emergency team is always ready to respond."
    },
    {
      icon: Truck,
      title: "Quick Arrival",
      description: "We arrive within 60 minutes in Eugene and surrounding areas."
    },
    {
      icon: ClipboardCheck,
      title: "Damage Assessment",
      description: "Thorough inspection to identify all damage and necessary repairs."
    },
    {
      icon: Clock,
      title: "Immediate Action",
      description: "Fast implementation of temporary or permanent solutions."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Emergency Response Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <step.icon className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyProcess;
