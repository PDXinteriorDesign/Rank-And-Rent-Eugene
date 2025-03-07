
import React from 'react';
import LocationTemplate from '@/components/location/LocationTemplate';

const NorthEugene = () => {
  return (
    <LocationTemplate
      city="North Eugene"
      title="North Eugene Roofing Experts | Roof Repair & Replacement in Eugene, OR"
      metaDescription="Protect your home with top-rated roofing in North Eugene, OR. Serving River Road, Santa Clara, and Bethel-Danebo. Get a free inspection today!"
      neighborhoods={[
        "River Road",
        "Santa Clara",
        "Cal Young",
        "Bethel-Danebo"
      ]}
    />
  );
};

export default NorthEugene;
