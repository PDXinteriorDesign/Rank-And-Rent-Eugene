import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import EstimateFormModal from '@/components/EstimateFormModal';

const RepairCTA = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEstimateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get a Free Roof Inspection Today!
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Don't wait until a small issue becomes a costly problem. Contact Eugene Roofing NW now 
            for a free roof inspection and estimate. Proudly serving Eugene, Springfield, and 
            surrounding areas in Lane County, Oregon.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <a 
                href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Inspection
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white hover:bg-white/90">
              <a 
                href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
      <EstimateFormModal 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
};

export default RepairCTA;
