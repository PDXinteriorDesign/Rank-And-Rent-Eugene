
import React from 'react';
import { Star, Shield, Award, Wrench } from 'lucide-react';
import { Card } from "@/components/ui/card";
import RoofingProcess from './RoofingProcess';

const MainContent = () => {
  return (
    <section className="container mx-auto px-4 py-16 space-y-12" aria-labelledby="main-content-title">
      <div className="max-w-4xl mx-auto">
        {/* Review Stars */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          ))}
          <span className="text-gray-600 ml-2">(200+ Reviews)</span>
        </div>
        
        {/* Main Title */}
        <h1 id="main-content-title" className="text-4xl md:text-5xl font-bold text-center mb-12">
          Eugene's Premier Roofing Experts
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Welcome Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-semibold mb-6 text-primary">Your Trusted Local Roofing Partner</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Eugene Roofing NW – where quality craftsmanship meets unmatched customer service. For over 20 years, we've been protecting Eugene homes and businesses with expert roofing solutions.
            </p>

            <p className="text-gray-700 leading-relaxed">
              From routine maintenance to complete roof replacements, our team brings the expertise, dedication, and attention to detail your property deserves.
            </p>
          </div>

          {/* Services Overview */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-semibold mb-6 text-primary">Complete Roofing Solutions</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you need repairs for a leaky roof or it's time for a full replacement, we've got you covered. Our comprehensive services include:
            </p>

            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Residential roof repairs and replacements</li>
              <li>Commercial roofing solutions</li>
              <li>Emergency roof repairs</li>
              <li>Preventive maintenance</li>
              <li>Roof inspections and assessments</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Every project begins with a thorough inspection and detailed consultation to ensure you receive the perfect solution for your needs and budget.
            </p>
          </div>

          {/* Expertise Cards */}
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Card className="p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-3">
                <Shield className="w-5 h-5 text-primary" />
                Licensed & Factory-Certified
              </h3>
              <p className="text-gray-700">
                Our team holds certifications from leading manufacturers like GAF and CertainTeed. This ensures you receive the highest quality materials and installation, backed by industry-leading warranties.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-3">
                <Award className="w-5 h-5 text-primary" />
                Local Climate Expertise
              </h3>
              <p className="text-gray-700">
                We understand Eugene's unique weather challenges. Our roofing solutions are specifically designed to handle heavy rainfall, wind storms, and seasonal temperature changes while protecting your property.
              </p>
            </Card>
          </div>

          {/* Warning Signs Section */}
          <div className="bg-muted rounded-lg p-6">
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

            <p className="text-gray-700">
              Notice any of these signs? Contact us for a free inspection. Early detection can prevent costly repairs down the road.
            </p>
          </div>

          {/* Emergency Services */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-semibold mb-4 text-primary">24/7 Emergency Roofing Services</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Roof emergencies don't wait for business hours. That's why our emergency response team is available 24/7 to protect your property when you need us most.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We provide rapid response times and temporary solutions until permanent repairs can be completed, ensuring your peace of mind during stressful situations.
            </p>
          </div>

          {/* Financing Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Flexible Financing Solutions</h3>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Quality roofing is an investment in your property's future. We offer various financing options to help make your roofing project affordable:
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Competitive payment plans</li>
              <li>Insurance claim assistance</li>
              <li>Special financing for qualified customers</li>
              <li>Free, detailed cost estimates</li>
            </ul>
          </div>
        </div>
      </div>

      <RoofingProcess />
    </section>
  );
};

export default MainContent;
