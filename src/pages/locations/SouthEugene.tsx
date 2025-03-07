
import React from 'react';
import LocationTemplate from '@/components/location/LocationTemplate';

const SouthEugene = () => {
  return (
    <LocationTemplate
      city="South Eugene"
      title="Best Roofing Contractors in South Eugene, OR | Free Estimates"
      metaDescription="Looking for roofing services in South Eugene, OR? We specialize in durable, weather-resistant roofs in Amazon, Friendly Area, and College Hill. Call now for a free quote!"
      neighborhoods={[
        "Amazon",
        "Friendly Area",
        "College Hill",
        "Laurel Hill Valley",
        "Southeast Eugene"
      ]}
    />
  );
};

export default SouthEugene;
