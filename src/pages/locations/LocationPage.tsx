
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <MapPin className="h-5 w-5 text-secondary" />
          <h1 className="text-4xl font-bold">
            Professional Roofing Services in {location.name}, {location.region}
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Trusted {location.name} Roofing Contractors
            </h2>
            <p className="text-gray-600 mb-4">
              We provide expert roofing services tailored to {location.name}'s unique {location.weatherDesc}. 
              Our team of licensed and insured professionals delivers top-quality:
            </p>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/services/roof-repair-eugene-oregon" className="text-secondary hover:underline">
                  Emergency Roof Repair
                </Link>
              </li>
              <li>
                <Link to="/services/roof-installation-eugene-oregon" className="text-secondary hover:underline">
                  New Roof Installation
                </Link>
              </li>
              <li>
                <Link to="/services/roof-replacement-eugene-oregon" className="text-secondary hover:underline">
                  Complete Roof Replacement
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Schedule Your Free Estimate
            </h2>
            <p className="text-gray-600 mb-6">
              Looking for affordable roofing contractors in {location.name}, {location.region}? 
              Get a free inspection and estimate from our experienced team today!
            </p>
            <Button asChild size="lg" className="w-full">
              <a 
                href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Estimate
              </a>
            </Button>
          </div>
        </div>

        {location.neighborhoods && location.neighborhoods.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Areas We Serve</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {location.neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="p-4 bg-gray-50 rounded-lg">
                  {neighborhood}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LocationPage;
