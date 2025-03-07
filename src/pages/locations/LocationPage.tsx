
import React from 'react';
import { Helmet } from 'react-helmet';
import LocationHero from '@/components/locations/LocationHero';
import LocationServices from '@/components/locations/LocationServices';
import LocationContact from '@/components/locations/LocationContact';
import { getLocalBusinessSchema } from '@/utils/localSeoSchema';

interface LocationPageProps {
  city: string;
  isNeighborhood?: boolean;
}

const LocationPage: React.FC<LocationPageProps> = ({ city, isNeighborhood = false }) => {
  const location = isNeighborhood ? `${city} neighborhood of Eugene` : city;
  const schema = getLocalBusinessSchema(city);

  return (
    <>
      <Helmet>
        <title>Roofing Services in {location}, OR | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content={`Looking for expert roofing services in ${location}, OR? Eugene Roofing NW provides professional roof installation, repair, and replacement. Get a free estimate today!`}
        />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <LocationHero city={city} isNeighborhood={isNeighborhood} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Trusted {location}, OR Roofing Contractors
          </h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Eugene Roofing NW is your trusted roofing contractor in {location}, OR, 
              providing comprehensive roofing services tailored to local weather conditions. 
              Our experienced team understands the unique challenges posed by Oregon's climate, 
              from heavy rainfall to occasional windstorms.
            </p>
            <p>
              We offer a full range of roofing services including installation, repair, 
              replacement, and maintenance. As licensed and insured roofers serving {location}, 
              we're committed to delivering quality workmanship and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      <LocationServices city={city} />
      <LocationContact city={city} />
    </>
  );
};

export default LocationPage;
