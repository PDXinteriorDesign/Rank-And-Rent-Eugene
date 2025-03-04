
import React from 'react';
import { Star, Shield, Award, Wrench } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16" aria-labelledby="intro-title">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400" />
          ))}
          <span className="text-gray-600 ml-2">(200+ Reviews)</span>
        </div>
        
        <h2 id="intro-title" className="text-4xl font-bold text-center mb-8">
          Eugene's Most Trusted Roofing Company
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 text-center">
          With over two decades of experience, we deliver superior roofing solutions designed specifically for Oregon's unique climate. Our certified team combines expert craftsmanship with premium materials to ensure your roof stands the test of time.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Industry Certified</h3>
            <p className="text-gray-600">GAF & CertainTeed certified experts you can trust</p>
          </div>
          
          <div className="text-center">
            <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">20+ Years Experience</h3>
            <p className="text-gray-600">Serving Eugene & Lane County since 2003</p>
          </div>
          
          <div className="text-center">
            <Wrench className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Premium Materials</h3>
            <p className="text-gray-600">Using only top-quality roofing products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
