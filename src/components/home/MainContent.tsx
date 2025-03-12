import React from 'react';
import { Star, Shield, Award, Wrench } from 'lucide-react';
import { Card } from "@/components/ui/card";

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
        <h1 id="main-content-title" className="text-4xl font-bold text-center mb-12">
          Trusted Roofing Contractors in Eugene – EugeneRoofingNW.com
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Residential Services Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Expert Residential Roofing Services in Eugene, OR</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Eugene Roofing NW, your trusted partner for comprehensive roofing solutions in Eugene, Oregon. With over two decades of experience, we've established ourselves as the leading roofing contractor in Lane County, delivering superior craftsmanship and exceptional customer service to homeowners and businesses alike.
            </p>
          </div>

          {/* Commercial Solutions Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Commercial Roofing Solutions for Businesses in Eugene</h2>
            <p className="text-gray-700 leading-relaxed">
              Our commercial roofing division specializes in delivering durable, cost-effective roofing solutions for businesses throughout Eugene and the surrounding areas. We understand that commercial roofing projects require minimal disruption to your operations, which is why our team works efficiently while maintaining the highest standards of quality and safety.
            </p>
          </div>

          {/* Certification Section */}
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Card className="p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-3">
                <Shield className="w-5 h-5 text-primary" />
                Certified & Licensed Roofing Experts
              </h3>
              <p className="text-gray-700">
                As GAF and CertainTeed certified contractors, our team brings unmatched expertise to every project. Our comprehensive training and ongoing education ensure we stay current with the latest roofing technologies and installation techniques.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-3">
                <Award className="w-5 h-5 text-primary" />
                Best Roofing Materials for Oregon's Climate
              </h3>
              <p className="text-gray-700">
                Eugene's unique climate demands specific roofing solutions. We carefully select and recommend materials that withstand our region's heavy rainfall, occasional wind storms, and varying temperatures.
              </p>
            </Card>
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Our Roofing Process – What to Expect</h2>
            <p className="text-gray-700 leading-relaxed">
              When you choose Eugene Roofing NW, you're partnering with a company that values transparency and communication. Our process begins with a thorough inspection and detailed consultation, followed by a comprehensive proposal that outlines every aspect of your roofing project. We maintain clear communication throughout the installation or repair process, ensuring you're informed and comfortable every step of the way.
            </p>
          </div>

          {/* Warning Signs Section */}
          <div className="bg-muted rounded-lg p-6">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-3">
              <Wrench className="w-5 h-5 text-primary" />
              Signs You Need a Roof Replacement or Repair
            </h3>
            <p className="text-gray-700">
              Understanding when your roof needs attention is crucial for maintaining your property's integrity. Watch for signs such as missing or curling shingles, water stains on your ceiling, excessive granules in gutters, or daylight visible through your roof boards. Our experts can assess these issues and recommend the most cost-effective solutions.
            </p>
          </div>

          {/* Emergency Services Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Eugene Roof Repair & Emergency Services</h2>
            <p className="text-gray-700 leading-relaxed">
              When unexpected roofing emergencies strike, our 24/7 emergency response team is ready to protect your property from further damage. We provide rapid response times and temporary solutions until permanent repairs can be completed, ensuring your peace of mind during stressful situations.
            </p>
          </div>

          {/* Affordable Solutions Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Affordable Roofing Solutions for Every Budget</h3>
            <p className="text-gray-700">
              We believe quality roofing shouldn't break the bank. Our team works with you to find solutions that fit your budget while never compromising on quality. We offer flexible financing options and help you understand potential insurance coverage for qualifying repairs or replacements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
