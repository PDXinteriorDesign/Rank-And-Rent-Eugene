
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MapPin } from 'lucide-react';
import { locations } from '@/data/locations';

const Locations = () => {
  const cities = locations.filter(loc => loc.type === 'city');
  const neighborhoods = locations.filter(loc => loc.type === 'neighborhood');

  return (
    <>
      <Helmet>
        <title>Service Areas | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Eugene Roofing NW provides professional roofing services throughout Eugene, Springfield, and surrounding areas in Oregon. Find your location for specialized service."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <MapPin className="h-6 w-6 text-secondary" />
          <h1 className="text-4xl font-bold">Our Service Areas</h1>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Cities We Serve</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/locations/${city.slug}`}
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{city.name}, {city.region}</h3>
                <p className="text-gray-600">Professional roofing services in {city.name}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Eugene Neighborhoods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.slug}
                to={`/locations/${neighborhood.slug}`}
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{neighborhood.name}</h3>
                <p className="text-gray-600">Local roofing services in {neighborhood.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
