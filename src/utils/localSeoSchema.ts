
export const getLocalBusinessSchema = (location: string = 'Eugene') => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `Eugene Roofing NW - ${location}`,
  "image": "https://eugeneroofingnw.com/lovable-uploads/b161862e-e6ae-4e2d-ac94-f4d465c5d06d.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": location,
    "addressRegion": "OR",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": location === "Eugene" ? 44.0521 : 
      location === "Springfield" ? 44.0462 : 
      location === "Junction City" ? 44.2151 : 
      location === "Cottage Grove" ? 43.7976 : 44.0521,
    "longitude": location === "Eugene" ? -123.0868 : 
      location === "Springfield" ? -123.0220 : 
      location === "Junction City" ? -123.2044 : 
      location === "Cottage Grove" ? -123.0595 : -123.0868
  },
  "url": `https://www.eugeneroofingnw.com/locations/${location.toLowerCase().replace(/\s+/g, '-')}`,
  "telephone": "+1-541-555-0123",
  "areaServed": location,
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "potentialAction": {
    "@type": "RequestQuote",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.eugeneroofingnw.com/contact",
      "inLanguage": "en-US",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "Quote",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  }
});

export const getBlogPostSchema = (post: {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
  url: string;
  keywords?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.excerpt,
  "author": {
    "@type": "Person",
    "name": post.author
  },
  "datePublished": post.date,
  "dateModified": post.date,
  "image": post.image || "https://eugeneroofingnw.com/og-image.png",
  "url": post.url,
  "keywords": post.keywords?.join(", ") || "roofing, Eugene, roof repair, roof maintenance",
  "publisher": {
    "@type": "Organization",
    "name": "Eugene Roofing NW",
    "logo": {
      "@type": "ImageObject",
      "url": "https://eugeneroofingnw.com/lovable-uploads/b161862e-e6ae-4e2d-ac94-f4d465c5d06d.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": post.url
  }
});

export const getServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string[];
  minPrice?: number;
  maxPrice?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Eugene Roofing NW",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Eugene",
      "addressRegion": "OR",
      "postalCode": "97401",
      "addressCountry": "US"
    }
  },
  "serviceType": service.name.split(" ").slice(-1)[0],
  "areaServed": service.areaServed ? service.areaServed.map(area => ({
    "@type": "City",
    "name": area,
    "addressRegion": "OR"
  })) : {
    "@type": "City",
    "name": "Eugene",
    "addressRegion": "OR"
  },
  "url": service.url,
  "offers": service.minPrice ? {
    "@type": "Offer",
    "price": service.minPrice.toString(),
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": service.minPrice.toString(),
      "maxPrice": service.maxPrice ? service.maxPrice.toString() : undefined
    },
    "description": `Professional ${service.name.toLowerCase()} starting at $${service.minPrice}`
  } : undefined,
  "image": service.image || "https://eugeneroofingnw.com/og-image.png"
});

export const getFAQPageSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
