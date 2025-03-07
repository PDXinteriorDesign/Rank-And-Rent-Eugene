
import React from 'react';
import { Button } from '@/components/ui/button';

interface LocationContactProps {
  city: string;
}

const LocationContact: React.FC<LocationContactProps> = ({ city }) => {
  return (
    <section className="py-20 bg-black/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Get Your Free Roofing Estimate in {city}, OR
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Our experienced team is ready to help with all your roofing needs. 
          Contact us today for a free, no-obligation estimate.
        </p>
        <Button asChild size="lg">
          <a 
            href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary"
          >
            Schedule Free Estimate
          </a>
        </Button>
      </div>
    </section>
  );
};

export default LocationContact;
