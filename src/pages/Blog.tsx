import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

const Blog = () => {
  const blogPostsArray = Object.entries(blogPosts).map(([slug, post]) => ({
    slug,
    ...post,
  }));

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
          {blogPostsArray.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
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
                    to={`/roofing-tips/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.content.substring(0, 150)}...</p>
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
