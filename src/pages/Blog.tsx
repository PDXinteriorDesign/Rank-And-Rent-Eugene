import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User } from 'lucide-react';

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

const Blog = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <Helmet>
        <title>Roofing Tips & Insights | Eugene Roofing NW Blog</title>
        <meta 
          name="description" 
          content="Expert roofing tips, maintenance advice, and insights for Eugene homeowners. Learn about roof care, repairs, and more from Eugene's trusted roofing professionals." 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/blog" />
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Roofing Tips & Insights</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Stay informed about roofing best practices, maintenance tips, and industry insights 
          specifically tailored for Eugene homeowners.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-4 flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
