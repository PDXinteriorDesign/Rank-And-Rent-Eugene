
import React from 'react';
import LocationTemplate from '@/components/location/LocationTemplate';

const Springfield = () => {
  return (
    <LocationTemplate
      city="Springfield"
      title="Springfield, OR Roofing Contractors | Local Roof Repair & Installation"
      metaDescription="Need a roofing company in Springfield, OR? We provide expert roof repairs and replacements in Thurston, Glenwood, and Hayden Bridge. Call today for a free quote!"
      neighborhoods={[
        "Springfield",
        "Thurston",
        "Hayden Bridge",
        "Glenwood"
      ]}
    />
  );
};

export default Springfield;
