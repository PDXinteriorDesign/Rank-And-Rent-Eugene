
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EmergencyCTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-destructive rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't Wait - Get Emergency Help Now
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Every minute counts in a roofing emergency. Contact us now for immediate assistance 
            and prevent further damage to your property. Proudly serving Eugene, Springfield, 
            and surrounding communities in Lane County, Oregon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white">
              <Link to="/contact">Send Emergency Request</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
