
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CleaningCTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Restore Your Roof's Beauty?
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Invest in regular roof cleaning and treatment to enhance your home's appeal 
            and prevent costly repairs. Contact us today for a professional consultation.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <Link to="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CleaningCTA;
