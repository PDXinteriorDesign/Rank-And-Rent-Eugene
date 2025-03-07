
import React from 'react';
import LocationTemplate from '@/components/location/LocationTemplate';

const Veneta = () => {
  return (
    <LocationTemplate
      city="Veneta"
      title="Veneta & Elmira, OR Roofing Services | Trusted Local Roofers"
      metaDescription="For expert roofing in Veneta, Elmira, and surrounding areas, call Eugene Roofing NW. We offer roof repairs, replacements, and inspections. Schedule your free quote!"
      neighborhoods={[
        "Veneta",
        "Elmira"
      ]}
    />
  );
};

export default Veneta;
