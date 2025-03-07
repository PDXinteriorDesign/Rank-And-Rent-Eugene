
import React from 'react';
import LocationTemplate from '@/components/location/LocationTemplate';

const EastEugene = () => {
  return (
    <LocationTemplate
      city="East Eugene"
      title="Reliable Roofing in East Eugene, OR | Expert Roof Installation"
      metaDescription="Looking for trusted roofing contractors in East Eugene? We serve Harlow, Fairmount, and Hendricks Hill with premium roofing solutions. Schedule a free consultation today!"
      neighborhoods={[
        "Harlow",
        "Fairmount",
        "Hendricks Hill",
        "Coburg Road Area"
      ]}
    />
  );
};

export default EastEugene;
