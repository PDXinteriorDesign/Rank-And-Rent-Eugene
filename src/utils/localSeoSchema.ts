
export const getLocalBusinessSchema = (location: string = 'Eugene') => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Eugene Roofing NW",
  "image": "https://eugeneroofingnw.com/lovable-uploads/b161862e-e6ae-4e2d-ac94-f4d465c5d06d.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": location,
    "addressRegion": "OR",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.0521,
    "longitude": -123.0868
  },
  "url": "https://www.eugeneroofingnw.com",
  "telephone": "+1-541-555-0123",
  "areaServed": ["Eugene", "Springfield", "Lane County", "Junction City", "Cottage Grove"],
  "priceRange": "$$"
});

export const getBlogPostSchema = (post: {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
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
  "image": post.image || "https://eugeneroofingnw.com/og-image.png",
  "publisher": {
    "@type": "Organization",
    "name": "Eugene Roofing NW",
    "logo": {
      "@type": "ImageObject",
      "url": "https://eugeneroofingnw.com/lovable-uploads/b161862e-e6ae-4e2d-ac94-f4d465c5d06d.png"
    }
  }
});
