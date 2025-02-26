
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const MossRemoval = () => {
  const benefits = [
    "Prevents structural damage to your roof",
    "Extends the life of your roofing materials",
    "Improves your home's curb appeal",
    "Reduces the risk of leaks and water damage",
    "Maintains proper drainage",
    "Prevents spread of moss to other areas"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Professional Moss Removal</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Our specialized moss removal process safely eliminates harmful growth while protecting 
            your roof's integrity. We use eco-friendly solutions that prevent regrowth and extend 
            your roof's lifespan.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MossRemoval;
