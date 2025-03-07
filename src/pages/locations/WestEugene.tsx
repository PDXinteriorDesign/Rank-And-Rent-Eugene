
import React from 'react';
import LocationTemplate from '@/components/location/LocationTemplate';

const WestEugene = () => {
  return (
    <LocationTemplate
      city="West Eugene"
      title="West Eugene, OR Roofing Services | Residential & Commercial Roofers"
      metaDescription="From Churchill to West Eugene, our professional roofers offer high-quality roof repairs and replacements. Contact us for a free estimate!"
      neighborhoods={[
        "Churchill",
        "West Eugene",
        "Danebo"
      ]}
    />
  );
};

export default WestEugene;
