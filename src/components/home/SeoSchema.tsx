
import React from 'react';
import { getSchemaMarkup } from '@/schemas/BusinessSchema';
import { getBreadcrumbSchema } from '@/schemas/BreadcrumbSchema';
import { getBlogSchema } from '@/schemas/BlogSchema';
import { getFAQSchema } from '@/schemas/FAQSchema';
import { getLocalBusinessSchema } from '@/utils/localSeoSchema';

const SeoSchema: React.FC = () => {
  React.useEffect(() => {
    // Remove any existing schema scripts to prevent duplicates
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(script => {
      if (script.parentNode === document.head) {
        document.head.removeChild(script);
      }
    });

    // Insert main business schema
    const businessSchema = document.createElement('script');
    businessSchema.type = 'application/ld+json';
    businessSchema.text = JSON.stringify(getSchemaMarkup());
    document.head.appendChild(businessSchema);

    // Insert breadcrumb schema
    const breadcrumbSchema = document.createElement('script');
    breadcrumbSchema.type = 'application/ld+json';
    breadcrumbSchema.text = JSON.stringify(getBreadcrumbSchema());
    document.head.appendChild(breadcrumbSchema);

    // Insert blog schema
    const blogSchema = document.createElement('script');
    blogSchema.type = 'application/ld+json';
    blogSchema.text = JSON.stringify(getBlogSchema());
    document.head.appendChild(blogSchema);

    // Insert FAQ schema
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.text = JSON.stringify(getFAQSchema());
    document.head.appendChild(faqSchema);

    // Insert local business schema for Eugene
    const localBusinessSchema = document.createElement('script');
    localBusinessSchema.type = 'application/ld+json';
    localBusinessSchema.text = JSON.stringify(getLocalBusinessSchema('Eugene'));
    document.head.appendChild(localBusinessSchema);

    return () => {
      // Clean up on unmount
      [businessSchema, breadcrumbSchema, blogSchema, faqSchema, localBusinessSchema].forEach(script => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default SeoSchema;
