
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Leaf, Shield, Droplets } from 'lucide-react';

const MossRemoval = () => {
  const benefits = [
    {
      title: "Structural Protection",
      description: "Prevents moisture retention and material deterioration",
      icon: Shield
    },
    {
      title: "Eco-Friendly Solutions",
      description: "Safe for your garden and local environment",
      icon: Leaf
    },
    {
      title: "Long-Term Prevention",
      description: "Treatment that inhibits future moss growth",
      icon: Droplets
    },
    {
      title: "Enhanced Durability",
      description: "Extends roof lifespan by preventing damage",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Expert Moss Removal Services</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Our specialized moss removal process combines immediate treatment with long-term 
            prevention, ensuring your roof stays moss-free while protecting its structural integrity.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <benefit.icon className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Why Professional Moss Removal Matters</h3>
            <p className="text-gray-600 mb-4">
              Eugene's climate creates perfect conditions for moss growth. Without proper 
              treatment, moss can cause significant damage to your roof by:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Trapping moisture under shingles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Lifting and separating roofing materials</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Creating paths for water infiltration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Accelerating shingle deterioration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MossRemoval;
