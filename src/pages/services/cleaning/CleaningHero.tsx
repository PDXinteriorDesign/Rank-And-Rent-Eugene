
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CleaningHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Professional Moss & Roof Cleaning in Eugene
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Eugene's damp climate makes moss and algae growth a common problem for homeowners. 
            Left unchecked, moss can trap moisture, causing shingles to deteriorate and leading 
            to costly roof repairs. Our expert roof cleaning services safely remove moss, algae, 
            and debris to extend the life of your roof.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="text-sm"><span className="font-semibold">Annual Rainfall:</span> 47 inches</p>
              <p className="text-xs text-gray-600">Perfect conditions for moss growth</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="text-sm"><span className="font-semibold">Humidity Levels:</span> 71-89%</p>
              <p className="text-xs text-gray-600">Ideal for algae development</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="text-sm"><span className="font-semibold">Shade Coverage:</span> 40% of homes</p>
              <p className="text-xs text-gray-600">Increases moss growth risk</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <Link to="/contact">Schedule Free Inspection</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CleaningHero;
