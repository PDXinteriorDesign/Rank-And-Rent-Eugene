import React from 'react';
import { Star, Shield, Award, Wrench } from 'lucide-react';
import { Card } from "@/components/ui/card";
import RoofingProcess from './RoofingProcess';

const MainContent = () => {
  return (
    <section className="container mx-auto px-4 py-16 space-y-12" aria-labelledby="main-content-title">
      <div className="flex items-center justify-center gap-2 mb-8">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        ))}
        <span className="text-gray-600 ml-2">(200+ Reviews)</span>
      </div>
      
      <h1 id="main-content-title" className="text-4xl md:text-5xl font-bold text-center mb-12">
        Eugene's Premier Roofing Experts
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-semibold text-primary mb-6">Your Trusted Local Roofing Partner</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Eugene Roofing NW – where quality craftsmanship meets unmatched customer service. For over 20 years, we've been protecting Eugene homes and businesses with expert roofing solutions.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                From routine maintenance to complete roof replacements, our team brings the expertise, dedication, and attention to detail your property deserves.
              </p>

              <h2 className="text-3xl font-semibold text-primary mb-6">Complete Roofing Solutions</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you need repairs for a leaky roof or it's time for a full replacement, we've got you covered. Our comprehensive services include:
              </p>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>Residential roof repairs and replacements</li>
                <li>Commercial roofing solutions</li>
                <li>Emergency roof repairs</li>
                <li>Preventive maintenance</li>
                <li>Roof inspections and assessments</li>
              </ul>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-3">
                  <Shield className="w-5 h-5 text-primary" />
                  Licensed & Factory-Certified
                </h3>
                <p className="text-gray-700">
                  Our team holds certifications from leading manufacturers like GAF and CertainTeed, ensuring you receive the highest quality materials and installation.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-3">
                  <Award className="w-5 h-5 text-primary" />
                  Local Climate Expertise
                </h3>
                <p className="text-gray-700">
                  We understand Eugene's unique weather challenges and design our roofing solutions specifically for our local climate.
                </p>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <img 
              src="/lovable-uploads/5997350c-7571-42cc-b7c1-6b57b007c504.png" 
              alt="Professional roofing services in Eugene"
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
            />
            <img 
              src="/lovable-uploads/b161862e-e6ae-4e2d-ac94-f4d465c5d06d.png" 
              alt="Quality roofing installation"
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
            />
          </div>
        </div>

        <div className="mt-12 bg-muted rounded-lg p-6">
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <Wrench className="w-5 h-5 text-primary" />
            Know When It's Time for Roofing Service
          </h3>
          
          <p className="text-gray-700 mb-4">
            Don't wait for a leak to appear before addressing roofing issues. Watch for these common warning signs:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Missing or curling shingles</li>
            <li>Water stains on your ceiling</li>
            <li>Excessive granules in gutters</li>
            <li>Visible daylight through roof boards</li>
            <li>Sagging roof deck</li>
          </ul>
        </div>
      </div>

      <RoofingProcess />
    </section>
  );
};

export default MainContent;
