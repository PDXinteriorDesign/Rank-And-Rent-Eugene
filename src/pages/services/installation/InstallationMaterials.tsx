
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Percent, CircleDollarSign, Clock, ShieldCheck } from 'lucide-react';

const InstallationMaterials = () => {
  return (
    <section id="materials" className="py-16 bg-white scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Premium Materials & Financing Options</h2>
          <p className="text-gray-600">
            We partner with industry-leading manufacturers to provide the highest quality roofing materials, 
            backed by comprehensive warranties. Our flexible financing options make quality roofing accessible 
            to Eugene homeowners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Premium Materials</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Architectural Shingles</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full" />
                      Lifetime material warranty
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full" />
                      130 MPH wind rating
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full" />
                      Class A fire rating
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Metal Roofing</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full" />
                      50-year warranty
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full" />
                      Energy efficient
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full" />
                      100% recyclable
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Financing Options</h3>
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Percent className="text-secondary w-5 h-5" />
                    <span>0% APR Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleDollarSign className="text-secondary w-5 h-5" />
                    <span>Flexible Terms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-secondary w-5 h-5" />
                    <span>Quick Approval</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="text-secondary w-5 h-5" />
                    <span>Secure Process</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                  <Link to="/contact">Get Free Estimate</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">Payment Options</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Major credit cards accepted
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Special financing up to 60 months
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Convenient online payments
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationMaterials;
