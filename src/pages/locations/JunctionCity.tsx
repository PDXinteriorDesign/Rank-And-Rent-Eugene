
import React from 'react';
import LocationTemplate from '@/components/location/LocationTemplate';

const JunctionCity = () => {
  return (
    <LocationTemplate
      city="Junction City"
      title="Roofing Experts in Coburg & Junction City, OR | Free Roofing Estimates"
      metaDescription="Need roofing in Coburg, Junction City, or Harrisburg, OR? We provide durable and weather-resistant roofing solutions. Contact us today for a free consultation!"
      neighborhoods={[
        "Coburg",
        "Junction City",
        "Harrisburg"
      ]}
    />
  );
};

export default JunctionCity;
