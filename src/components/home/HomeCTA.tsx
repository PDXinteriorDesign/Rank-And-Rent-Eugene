import React from 'react';
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
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90"
            asChild
          >
            <a 
              href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Free Estimate
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
