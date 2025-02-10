
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Eugene's Top-Rated Residential Roofing Experts
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            For over two decades, Eugene Roofing NW has been your trusted local roofing contractor. 
            We specialize in expert roof repairs, new installations, and 24/7 emergency services. 
            Our licensed and insured team delivers superior craftsmanship and exceptional customer service 
            to protect your biggest investment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto">
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
