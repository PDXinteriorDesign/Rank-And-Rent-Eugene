
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RepairCTA = () => {
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
              <Link to="/contact-eugene-roofing">Schedule Inspection</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white hover:bg-white/90">
              <Link to="/contact-eugene-roofing">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairCTA;
