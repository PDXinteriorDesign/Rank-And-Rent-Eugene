
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HomeCTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Roofing Services in Eugene?
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether it's repairs, installation, or emergency services, our expert team is ready 
            to help protect your home. Contact us for a free, no-obligation estimate.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <Link to="/contact">Get Free Estimate</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
