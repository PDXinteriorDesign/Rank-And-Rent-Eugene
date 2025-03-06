
import React from 'react';
import { getSchemaMarkup } from '@/schemas/BusinessSchema';
import { getBreadcrumbSchema } from '@/schemas/BreadcrumbSchema';
import { getBlogSchema } from '@/schemas/BlogSchema';
import { getFAQSchema } from '@/schemas/FAQSchema';

const SeoSchema: React.FC = () => {
  React.useEffect(() => {
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify([
      getSchemaMarkup(),
      getBreadcrumbSchema(),
      getBlogSchema(),
      getFAQSchema()
    ]);
    document.head.appendChild(schemaScript);

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  return null;
};

export default SeoSchema;
