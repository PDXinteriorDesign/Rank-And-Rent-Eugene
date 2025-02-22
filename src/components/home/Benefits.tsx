
import React from 'react';
import { Shield, Clock, Award, Tool } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Licensed & Insured Eugene Roofers",
      description: "Fully licensed, bonded, and insured roofing contractors serving Eugene and Lane County with comprehensive coverage for your peace of mind."
    },
    {
      icon: Clock,
      title: "Fast Response Times",
      description: "Emergency roofing services available 24/7 throughout Eugene, with typical response times under 2 hours for urgent situations."
    },
    {
      icon: Award,
      title: "Eugene's Top-Rated Roofers",
      description: "Consistently rated as one of Eugene's best roofing companies, with over 200 five-star reviews from satisfied local customers."
    },
    {
      icon: Tool,
      title: "Local Expertise",
      description: "Specialized knowledge of Eugene's climate challenges and building codes, ensuring your roof meets all local requirements and weather demands."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Eugene Roofing NW?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center p-6 rounded-lg border border-gray-100 hover:border-secondary/20 transition-all duration-300"
            >
              <benefit.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
