import React from 'react';

export const getSchemaMarkup = () => ({
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Eugene Roofing NW",
  "image": "https://eugeneroofingnw.com/lovable-uploads/b161862e-e6ae-4e2d-ac94-f4d465c5d06d.png",
  "description": "Eugene's trusted roofing experts specializing in residential & commercial roofing. Professional repairs, installations & moss removal with 24/7 emergency service. Licensed & insured local roofers serving Eugene, Oregon.",
  "@id": "https://eugeneroofingnw.com",
  "url": "https://eugeneroofingnw.com",
  "telephone": "+1-541-555-0123",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Eugene",
    "addressRegion": "OR",
    "postalCode": "97401",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.0521,
    "longitude": -123.0868
  },
  "sameAs": [
    "https://www.facebook.com/eugeneroofingnw",
    "https://www.instagram.com/eugeneroofingnw",
    "https://www.linkedin.com/company/eugene-roofing-nw"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Eugene",
      "sameAs": "https://en.wikipedia.org/wiki/Eugene,_Oregon"
    },
    {
      "@type": "City",
      "name": "Springfield"
    },
    {
      "@type": "City",
      "name": "Lane County"
    },
    {
      "@type": "City",
      "name": "Junction City"
    },
    {
      "@type": "City",
      "name": "Cottage Grove"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Repair",
          "description": "Expert repair services for leaks, storm damage, and moss removal in Eugene's wet climate."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "New Roof Installation",
          "description": "Premium roof installations using weather-resistant materials designed for Oregon weather."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Roofing Services",
          "description": "24/7 emergency roofing repair services in Eugene and surrounding areas."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Cleaning",
          "description": "Professional roof cleaning and moss removal services."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Replacement",
          "description": "Complete roof replacement services with premium materials and expert installation."
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87",
    "bestRating": "5",
    "worstRating": "1"
  }
});

export const getBreadcrumbSchema = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://eugeneroofingnw.com"
  }]
});

const blogPosts = [
  {
    id: 1,
    title: "Professional Roof Inspection Guide",
    excerpt: "Learn about the importance of regular roof inspections, what inspectors look for, and how often you should schedule inspections in Eugene's climate.",
    date: "2024-03-18",
    readTime: "6 min read",
    author: "John Smith",
    category: "Maintenance",
    slug: "professional-roof-inspection-guide"
  },
  {
    id: 2,
    title: "Metal Roofing: Benefits and Considerations",
    excerpt: "Discover the advantages of metal roofing, different types available, and whether it's the right choice for your Eugene home.",
    date: "2024-03-16",
    readTime: "7 min read",
    author: "Sarah Johnson",
    category: "Materials",
    slug: "metal-roofing-benefits-considerations"
  },
  {
    id: 3,
    title: "Essential Roof Maintenance Tips",
    excerpt: "Your comprehensive guide to year-round roof maintenance, including seasonal care tips and preventive measures.",
    date: "2024-03-14",
    readTime: "8 min read",
    author: "Mike Wilson",
    category: "Maintenance",
    slug: "essential-roof-maintenance-tips"
  },
  {
    id: 4,
    title: "Understanding Roof Inspections in Eugene",
    excerpt: "Everything you need to know about professional roof inspections, from what to expect to how to prepare.",
    date: "2024-03-12",
    readTime: "6 min read",
    author: "John Smith",
    category: "Maintenance",
    slug: "understanding-roof-inspections-eugene"
  },
  {
    id: 5,
    title: "Metal Roofing Installation Process",
    excerpt: "A detailed look at metal roofing installation, materials, and what to expect during the process.",
    date: "2024-03-10",
    readTime: "7 min read",
    author: "Sarah Johnson",
    category: "Installation",
    slug: "metal-roofing-installation-process"
  },
  {
    id: 6,
    title: "Preventative Maintenance Guide",
    excerpt: "Learn about essential preventative maintenance practices to extend your roof's lifespan and prevent costly repairs.",
    date: "2024-03-08",
    readTime: "5 min read",
    author: "Mike Wilson",
    category: "Maintenance",
    slug: "preventative-maintenance-guide"
  }
];

export const getBlogSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Eugene Roofing NW Blog",
  "description": "Expert roofing tips, maintenance advice, and insights for Eugene homeowners.",
  "publisher": {
    "@type": "Organization",
    "name": "Eugene Roofing NW",
    "logo": {
      "@type": "ImageObject",
      "url": "https://eugeneroofingnw.com/lovable-uploads/b161862e-e6ae-4e2d-ac94-f4d465c5d06d.png"
    }
  },
  "blogPost": blogPosts.map(post => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    }
  }))
});

export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the average cost to replace a roof in Eugene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The average cost for roof replacement in Eugene ranges from $8,200 to $14,500, depending on your home's size, roof complexity, and chosen materials. Call us at 541-555-0123 for a free, personalized estimate."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a roof replacement take in Eugene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential roof replacements in Eugene are completed in 2-3 days, weather permitting. Larger or more complex projects may take 4-5 days. We work efficiently while maintaining our high-quality standards."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer emergency roofing services in Eugene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide 24/7 emergency roof repair services throughout Eugene and Lane County. Our team typically responds within 2 hours for urgent situations like storm damage or active leaks."
      }
    },
    {
      "@type": "Question",
      "name": "What roofing materials work best in Eugene's climate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For Eugene's wet climate, we recommend architectural shingles, metal roofing, or slate tiles. These materials offer excellent water resistance and longevity, with warranties ranging from 30-50 years."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I have my roof inspected in Eugene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Due to Eugene's heavy rainfall and potential moss growth, we recommend annual roof inspections. Regular inspections help identify and address issues before they become major problems."
      }
    }
  ]
});

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
