
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Clock, CheckCircle } from 'lucide-react';

const ReplacementContent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Expert Roof Replacement in Eugene, Oregon</h2>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700 mb-6">
              When repairs aren't enough, our expert team provides comprehensive roof replacement services 
              using premium materials designed specifically for Eugene's climate. With our lifetime workmanship 
              warranty and manufacturer-backed material guarantees, you can trust your new roof will protect 
              your home for decades to come.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: Shield,
                  title: "Lifetime Warranty",
                  desc: "Guaranteed workmanship and materials"
                },
                {
                  icon: Award,
                  title: "Premium Materials",
                  desc: "GAF and CertainTeed certified products"
                },
                {
                  icon: Clock,
                  title: "Efficient Installation",
                  desc: "Most projects completed in 2-3 days"
                },
                {
                  icon: CheckCircle,
                  title: "Clean Worksite",
                  desc: "Daily cleanup and property protection"
                }
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="flex items-start gap-4 p-6">
                    <item.icon className="w-8 h-8 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-4">Our Replacement Process</h3>
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li className="text-gray-700">
                <span className="font-semibold">Initial Consultation:</span> Thorough inspection and detailed estimate
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Material Selection:</span> Choose from premium roofing options
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Project Planning:</span> Timeline and preparation details
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Installation:</span> Expert removal and replacement
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Final Inspection:</span> Quality assurance and cleanup
              </li>
            </ol>

            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Available Roofing Materials</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Architectural Shingles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Metal Roofing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Slate Tiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Cedar Shakes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplacementContent;
