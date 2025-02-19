
import React from 'react';
import { Droplet } from 'lucide-react';

const ClimateInfo: React.FC = () => {
  return (
    <section className="container mx-auto px-4 mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <span role="img" aria-label="globe">🌍</span> Eugene's Climate & Your Roof – What You Need to Know
        </h2>
        <div className="flex items-start gap-4 mb-8">
          <Droplet className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
          <p className="m-0">
            Eugene's heavy rainfall and frequent moisture exposure make proper roofing maintenance crucial. Choosing weather-resistant roofing materials and regular moss removal can prevent long-term damage. Our team specializes in climate-adapted roofing solutions to keep your home safe year-round.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClimateInfo;
