
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Wrench, Clock, Home } from 'lucide-react';

const RepairContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Roof Repair Services in Eugene, Oregon
          </h2>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed mb-6">
              At Eugene Roofing NW, we understand that a damaged roof can cause significant stress and potential damage to your home. Our expert team specializes in comprehensive roof repair services, addressing everything from minor leaks to major storm damage throughout Eugene, Springfield, and Lane County.
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              Expert Roof Repair in Eugene's Unique Climate
            </h3>
            <p className="mb-6">
              Eugene's climate presents unique challenges for roofs, with frequent rain, occasional wind storms, and seasonal temperature variations. Our local expertise ensures repairs that stand up to Oregon's weather patterns, using materials and techniques specifically chosen for our region's conditions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-secondary" />
                    Quality Guarantee
                  </h4>
                  <ul className="space-y-2">
                    <li>Licensed and insured contractors</li>
                    <li>Warranty-backed repairs</li>
                    <li>Premium materials used</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-secondary" />
                    Fast Response Times
                  </h4>
                  <ul className="space-y-2">
                    <li>24/7 emergency service</li>
                    <li>Same-day inspections</li>
                    <li>Quick repair scheduling</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Comprehensive Repair Solutions
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Wrench className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <strong>Leak Repair & Prevention</strong>
                  <p>Expert detection and repair of roof leaks, including preventative measures to protect against future water damage.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Home className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <strong>Storm Damage Repair</strong>
                  <p>Comprehensive repair services for wind, hail, and storm-related damage, including emergency temporary repairs when needed.</p>
                </div>
              </li>
            </ul>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">
                Serving Eugene & Surrounding Areas
              </h4>
              <p>
                We provide expert roof repair services throughout Eugene, including Downtown, South Eugene, West Eugene, and neighboring communities like Springfield, Junction City, and Cottage Grove. Our local knowledge ensures repairs that meet both regional building codes and weather requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairContent;
