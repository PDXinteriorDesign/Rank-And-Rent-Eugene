import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, CheckCircle, Calendar, Wrench } from 'lucide-react';

const RepairContent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Expert Roof Repair Services in Eugene, Oregon</h2>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700 mb-6">
              With over two decades of experience serving Eugene homeowners, our certified roofing experts 
              specialize in comprehensive roof repair services designed to protect your home from Oregon's 
              challenging weather conditions. From minor leak repairs to major storm damage restoration, 
              we deliver lasting solutions backed by industry-leading warranties.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Why Choose Our Roof Repair Services?</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: Clock,
                  title: "Fast Response Times",
                  desc: "24/7 emergency repair service available for Eugene residents"
                },
                {
                  icon: CheckCircle,
                  title: "Certified Expertise",
                  desc: "GAF and CertainTeed certified contractors"
                },
                {
                  icon: Calendar,
                  title: "Flexible Scheduling",
                  desc: "Work around your schedule with minimal disruption"
                },
                {
                  icon: Wrench,
                  title: "Quality Materials",
                  desc: "Premium materials backed by manufacturer warranties"
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

            <h3 className="text-2xl font-semibold mb-4">Our Repair Process</h3>
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li className="text-gray-700">
                <span className="font-semibold">Thorough Inspection:</span> Complete assessment of your roof's condition
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Detailed Report:</span> Documentation of all issues with photo evidence
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Written Estimate:</span> Clear pricing with no hidden fees
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Professional Repair:</span> Expert repairs using premium materials
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Final Inspection:</span> Quality assurance check of all repairs
              </li>
            </ol>

            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Common Roof Repairs in Eugene</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Shingle replacement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Leak repair</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Storm damage repair</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Flashing repair</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Gutter repair</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Ventilation improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairContent;
