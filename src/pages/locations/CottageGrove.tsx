
import React from 'react';
import LocationTemplate from '@/components/location/LocationTemplate';

const CottageGrove = () => {
  return (
    <LocationTemplate
      city="Cottage Grove"
      title="Creswell & Cottage Grove, OR Roofing | Affordable Roofers Near You"
      metaDescription="Looking for professional roofing services in Creswell and Cottage Grove, OR? Get high-quality roof installations, repairs, and maintenance. Free estimates available!"
      neighborhoods={[
        "Creswell",
        "Cottage Grove",
        "Pleasant Hill"
      ]}
    />
  );
};

export default CottageGrove;
