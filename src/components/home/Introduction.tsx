
import React from 'react';
import { Star, Shield, Award, Wrench } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Star className="w-6 h-6 text-yellow-400" />
          <Star className="w-6 h-6 text-yellow-400" />
          <Star className="w-6 h-6 text-yellow-400" />
          <Star className="w-6 h-6 text-yellow-400" />
          <Star className="w-6 h-6 text-yellow-400" />
          <span className="text-gray-600 ml-2">(200+ Reviews)</span>
        </div>
        
        <h1 className="text-4xl font-bold text-center mb-8">
          Professional Roofing Services in Eugene, Oregon
        </h1>
        
        <p className="text-lg text-gray-700 mb-8 text-center">
          As Eugene's most trusted roofing contractor, we specialize in residential and commercial roofing solutions designed for Oregon's unique climate. From expert roof repairs and installations to comprehensive maintenance services, our certified team delivers superior craftsmanship and reliable results.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Certified Excellence</h3>
            <p className="text-gray-600">GAF & CertainTeed certified contractors with proven expertise</p>
          </div>
          
          <div className="text-center">
            <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Local Experience</h3>
            <p className="text-gray-600">20+ years serving Eugene & Lane County homeowners</p>
          </div>
          
          <div className="text-center">
            <Tool className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Quality Materials</h3>
            <p className="text-gray-600">Premium Malarkey & GAF roofing products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
