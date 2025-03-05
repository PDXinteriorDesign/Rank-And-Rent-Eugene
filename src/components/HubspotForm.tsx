
import React, { useEffect } from 'react';

interface HubspotFormProps {
  portalId: string;
  formId: string;
  region?: string;
}

const HubspotForm = ({ portalId, formId, region = 'na2' }: HubspotFormProps) => {
  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement('script');
    script.src = `https://js-${region}.hsforms.net/forms/embed/${portalId}.js`;
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, [portalId, region]);

  return (
    <div 
      className="hs-form-frame" 
      data-region={region} 
      data-form-id={formId} 
      data-portal-id={portalId}
    />
  );
};

export default HubspotForm;
