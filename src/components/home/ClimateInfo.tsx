
import React from 'react';
import { Droplet, Thermometer, Wind, Cloud } from 'lucide-react';

const ClimateInfo: React.FC = () => {
  const climateFactors = [
    {
      icon: Droplet,
      title: "Heavy Rainfall",
      description: "Eugene receives 47+ inches of rain annually, making waterproof roofing essential"
    },
    {
      icon: Thermometer,
      title: "Temperature Fluctuations",
      description: "Seasonal changes from cold winters to warm summers require durable materials"
    },
    {
      icon: Wind,
      title: "Wind Exposure",
      description: "Strategic installation techniques to protect against wind damage"
    },
    {
      icon: Cloud,
      title: "High Humidity",
      description: "Moisture-resistant solutions to prevent mold and algae growth"
    }
  ];

  return (
    <section className="py-16 bg-muted/30" aria-labelledby="climate-title">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="climate-title" className="text-3xl font-bold text-center mb-8">
            Eugene's Climate & Your Roof
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Our local climate presents unique challenges for roofing. We specialize in solutions 
            designed specifically for Eugene's weather patterns.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {climateFactors.map((factor) => (
              <div 
                key={factor.title}
                className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <factor.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{factor.title}</h3>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimateInfo;
