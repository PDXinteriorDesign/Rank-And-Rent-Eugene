
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "How Often Should You Clean Your Roof in Eugene?",
    excerpt: "Learn about the optimal roof cleaning schedule for Eugene's climate and how to protect your roof from moss and algae growth.",
    date: "2024-03-14",
    readTime: "5 min read",
    author: "John Smith",
    category: "Maintenance",
    slug: "how-often-clean-roof-eugene"
  },
  {
    id: 2,
    title: "Signs You Need a Roof Replacement in Oregon",
    excerpt: "Discover the key indicators that it's time to replace your roof, from age-related wear to storm damage symptoms.",
    date: "2024-03-12",
    readTime: "7 min read",
    author: "Sarah Johnson",
    category: "Replacement",
    slug: "signs-need-roof-replacement-oregon"
  },
  {
    id: 3,
    title: "Best Roofing Materials for Eugene's Climate",
    excerpt: "Compare different roofing materials and find out which ones perform best in Eugene's wet weather conditions.",
    date: "2024-03-10",
    readTime: "6 min read",
    author: "Mike Wilson",
    category: "Materials",
    slug: "best-roofing-materials-eugene-climate"
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
