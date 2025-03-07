
import React from 'react';
import { Helmet } from 'react-helmet';
import LocationHero from '@/components/locations/LocationHero';
import LocationServices from '@/components/locations/LocationServices';
import LocationContact from '@/components/locations/LocationContact';
import LocationContent from '@/components/locations/LocationContent';
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
        <title>Expert Roofing Services in {location}, OR | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content={`Professional roofing services in ${location}, OR. Expert roof repairs, installations, replacements & maintenance. Licensed & insured local roofers. Free estimates!`}
        />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <LocationHero city={city} isNeighborhood={isNeighborhood} />
      <LocationContent city={city} isNeighborhood={isNeighborhood} />
      <LocationServices city={city} />
      <LocationContact city={city} />
    </>
  );
};

export default LocationPage;
