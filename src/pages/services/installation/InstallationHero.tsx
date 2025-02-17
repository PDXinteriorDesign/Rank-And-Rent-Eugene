
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InstallationHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Expert Roof Installation in Eugene, Oregon
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Eugene's weather demands roofing solutions that can withstand everything from heavy winter rains 
            to summer heat. Our expert installation team specializes in durable, energy-efficient roofing 
            systems designed specifically for the Pacific Northwest climate.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="text-sm"><span className="font-semibold">Weather Resistant:</span> 120+ MPH</p>
              <p className="text-xs text-gray-600">Wind uplift rated materials</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="text-sm"><span className="font-semibold">Energy Savings:</span> Up to 23%</p>
              <p className="text-xs text-gray-600">With proper installation</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="text-sm"><span className="font-semibold">Warranty:</span> Up to 50 Years</p>
              <p className="text-xs text-gray-600">Manufacturer backed</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <Link to="/contact">Get Free Installation Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstallationHero;
