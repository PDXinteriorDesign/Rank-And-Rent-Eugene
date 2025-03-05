
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InstallationCTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Install Your New Roof?
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Get a free, detailed quote for your roof installation project. 
            Our team is ready to help you protect your home with quality roofing solutions.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <a 
              href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstallationCTA;
