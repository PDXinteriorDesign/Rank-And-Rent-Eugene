
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Clock, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured experts for your peace of mind"
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "Industry-certified cleaning specialists with proven experience"
    },
    {
      icon: Clock,
      title: "Prompt Service",
      description: "Quick response times and efficient service delivery"
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction guarantee on all our cleaning services"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us for Roof Cleaning</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <benefit.icon className="w-12 h-12 mx-auto text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
