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
