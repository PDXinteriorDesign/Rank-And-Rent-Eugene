
import React from 'react';
import LocationTemplate from '@/components/location/LocationTemplate';

const Lowell = () => {
  return (
    <LocationTemplate
      city="Lowell"
      title="Lowell & Dexter, OR Roof Repair & Replacement | Best Roofing Company"
      metaDescription="Serving Lowell, Dexter, and Fall Creek, OR with high-quality roofing services. Call now for affordable roof repairs and replacements!"
      neighborhoods={[
        "Lowell",
        "Dexter",
        "Fall Creek"
      ]}
    />
  );
};

export default Lowell;
