
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InstallationHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Professional Roof Installation in Eugene, Oregon
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            When it comes to protecting your home, nothing is more critical than a properly installed roof. 
            Trust our expert team for reliable, durable, and affordable roofing solutions.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <Link to="/contact">Get Free Installation Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstallationHero;
