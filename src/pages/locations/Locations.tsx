
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CITIES, NEIGHBORHOODS } from './index';

const Locations = () => {
  return (
    <>
      <Helmet>
        <title>Service Areas in Eugene, OR & Surrounding Cities | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Eugene Roofing NW provides expert roofing services throughout Eugene, Springfield, and surrounding areas in Oregon. Find your location for specialized roofing solutions."
        />
      </Helmet>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            Our Service Areas
          </h1>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Cities We Serve</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CITIES.map((city) => (
                <Card key={city} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{city}, OR</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link 
                      to={`/locations/${city.toLowerCase().replace(/ /g, '-')}`}
                      className="text-primary hover:underline"
                    >
                      View Roofing Services →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Eugene Neighborhoods</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {NEIGHBORHOODS.map((neighborhood) => (
                <Card key={neighborhood} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{neighborhood}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link 
                      to={`/locations/${neighborhood.toLowerCase().replace(/ /g, '-')}`}
                      className="text-primary hover:underline"
                    >
                      View Roofing Services →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
