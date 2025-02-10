
import React from 'react';
import { Award, BadgeCheck, Users } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-slideUp">
            <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
            <p className="text-gray-600">Your peace of mind is our priority</p>
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "100ms" }}>
            <BadgeCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">10-year workmanship warranty</p>
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "200ms" }}>
            <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">5-Star Rated</h3>
            <p className="text-gray-600">Over 100+ satisfied customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
