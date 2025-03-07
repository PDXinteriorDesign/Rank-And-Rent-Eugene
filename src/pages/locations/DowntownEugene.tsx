
import React from 'react';
import LocationTemplate from '@/components/location/LocationTemplate';

const DowntownEugene = () => {
  return (
    <LocationTemplate
      city="Downtown Eugene"
      title="Downtown Eugene, OR Roofing Services | Top Roofers in Eugene"
      metaDescription="Need expert roofing services in Downtown Eugene, OR? Eugene Roofing NW provides roof repair, installation, and maintenance in Whiteaker, West University, and nearby areas. Get a free estimate today!"
      neighborhoods={[
        "Downtown Eugene",
        "Whiteaker",
        "Jefferson Westside",
        "West University",
        "South University"
      ]}
    />
  );
};

export default DowntownEugene;
