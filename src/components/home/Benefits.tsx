
import React from 'react';
import { Check } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="mt-16 bg-muted/20 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <span role="img" aria-label="house">🏠</span> Why Homeowners Choose Eugene Roofing NW
      </h2>
      <div className="grid gap-4">
        <div className="flex items-start gap-3">
          <Check className="w-6 h-6 text-primary mt-1" />
          <p className="m-0"><strong>Licensed, Bonded & Insured</strong> – Peace of mind knowing you're working with certified professionals.</p>
        </div>
        <div className="flex items-start gap-3">
          <Check className="w-6 h-6 text-primary mt-1" />
          <p className="m-0"><strong>Locally Owned & Operated</strong> – Proudly serving Eugene, Springfield, and surrounding communities.</p>
        </div>
        <div className="flex items-start gap-3">
          <Check className="w-6 h-6 text-primary mt-1" />
          <p className="m-0"><strong>No-Obligation Free Roof Inspections</strong> – Get expert recommendations without any pressure.</p>
        </div>
        <div className="flex items-start gap-3">
          <Check className="w-6 h-6 text-primary mt-1" />
          <p className="m-0"><strong>Flexible Roofing Financing Options</strong> – Affordable payment plans tailored to your budget.</p>
        </div>
        <div className="flex items-start gap-3">
          <Check className="w-6 h-6 text-primary mt-1" />
          <p className="m-0"><strong>Premium Workmanship & Warranty Protection</strong> – We back our work with industry-leading warranties.</p>
        </div>
        <div className="flex items-start gap-3">
          <Check className="w-6 h-6 text-primary mt-1" />
          <p className="m-0"><strong>Customer-Centric Approach</strong> – Transparent pricing, honest assessments, and no pushy sales tactics.</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
