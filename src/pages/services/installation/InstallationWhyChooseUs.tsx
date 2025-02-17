
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InstallationWhyChooseUs = () => {
  return (
    <section id="why-choose" className="py-16 bg-white scroll-mt-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Expert Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Our certified team brings years of experience and expertise to every installation project.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quality Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">We use only premium roofing materials from trusted manufacturers to ensure lasting durability.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Warranty Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">All our installations come with comprehensive warranty coverage for your peace of mind.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InstallationWhyChooseUs;
