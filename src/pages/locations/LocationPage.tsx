
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { locations } from '@/data/locations';
import { getLocalBusinessSchema } from '@/utils/localSeoSchema';

const LocationPage = () => {
  const { slug } = useParams();
  const location = locations.find(loc => loc.slug === slug);

  if (!location) {
    return <div>Location not found</div>;
  }

  const schema = getLocalBusinessSchema(location.name);

  return (
    <>
      <Helmet>
        <title>{location.meta.title}</title>
        <meta name="description" content={location.meta.description} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-secondary" />
              <h1 className="text-4xl font-bold">
                Professional Roofing Services in {location.name}, {location.region}
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Expert roofing solutions tailored to {location.name}'s unique {location.weatherDesc}
            </p>
          </div>

          {/* Services Section */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">
                Trusted {location.name} Roofing Contractors
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We provide comprehensive roofing services designed specifically for {location.name}'s climate conditions:
              </p>
              <div className="grid gap-4">
                <Link 
                  to="/services/roof-installation-eugene-oregon" 
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium">New Roof Installation</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  to="/services/roof-repair-eugene-oregon"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium">Roof Repair Services</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  to="/services/emergency-roof-repair-eugene-oregon"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium">Emergency Repairs</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Areas Section */}
          {location.neighborhoods && location.neighborhoods.length > 0 && (
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">Areas We Serve</h2>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {location.neighborhoods.map((neighborhood) => (
                    <div key={neighborhood} className="p-3 bg-gray-50 rounded-lg">
                      {neighborhood}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* CTA Section */}
          <Card className="bg-primary text-white">
            <CardContent className="p-8 text-center space-y-4">
              <h2 className="text-2xl font-semibold">
                Get Your Free Roofing Estimate
              </h2>
              <p>
                Looking for affordable roofing contractors in {location.name}, {location.region}? 
                Contact us today for a comprehensive inspection and estimate!
              </p>
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="w-full md:w-auto"
              >
                <a 
                  href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Free Estimate
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LocationPage;
