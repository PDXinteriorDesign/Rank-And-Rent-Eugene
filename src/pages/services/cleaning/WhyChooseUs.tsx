
import React from 'react';
import { Shield, Users, MapPin, Award } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Experienced Professionals",
    description: "Skilled technicians with extensive experience in roof maintenance"
  },
  {
    icon: Shield,
    title: "Comprehensive Solutions",
    description: "Full range of services from cleaning to preventative treatments"
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Understanding Eugene's climate and roofing challenges"
  },
  {
    icon: Award,
    title: "Customer Satisfaction",
    description: "High-quality workmanship and exceptional service"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us for Roof Cleaning?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-6 bg-white rounded-lg shadow-sm animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
