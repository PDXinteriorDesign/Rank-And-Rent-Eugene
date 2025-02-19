
import React from 'react';
import { Phone } from 'lucide-react';

const InspectionCTA: React.FC = () => {
  return (
    <section className="container mx-auto px-4 mt-16">
      <div className="max-w-4xl mx-auto bg-primary/5 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Phone className="w-8 h-8" /> Get Your Free Roof Inspection & Estimate Today!
        </h2>
        <p className="text-lg">
          Your roof is your home's first line of defense against harsh Oregon weather. Whether you need roof installation in Eugene, OR, emergency repairs, or moss cleaning, trust Eugene Roofing NW to deliver exceptional service and lasting results.
        </p>
      </div>
    </section>
  );
};

export default InspectionCTA;
