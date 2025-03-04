import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Why Regular Roof Inspections Are Essential for Eugene Homeowners",
    excerpt: "Your roof is your home's first line of defense against Eugene's unpredictable weather. From heavy rainfall to strong winds, your roof takes a beating year-round. That's why regular professional roof inspections are crucial.",
    date: "2024-03-18",
    readTime: "6 min read",
    author: "John Smith",
    category: "Maintenance",
    slug: "professional-roof-inspection-guide"
  },
  {
    id: 2,
    title: "Is Metal Roofing the Right Choice for Your Eugene Home?",
    excerpt: "Metal roofing is becoming an increasingly popular choice for homeowners in Eugene, and for good reason. It's durable, energy-efficient, and built to withstand the Pacific Northwest's unique climate.",
    date: "2024-03-16",
    readTime: "7 min read",
    author: "Sarah Johnson",
    category: "Materials",
    slug: "metal-roofing-benefits-considerations"
  },
  {
    id: 3,
    title: "Top Roof Maintenance Tips to Protect Your Eugene Home",
    excerpt: "Your roof is one of the most important parts of your home, and regular maintenance is key to keeping it in great shape. Learn essential tips to help protect your roof and extend its lifespan.",
    date: "2024-03-14",
    readTime: "8 min read",
    author: "Mike Wilson",
    category: "Maintenance",
    slug: "essential-roof-maintenance-tips"
  },
  {
    id: 4,
    title: "What to Expect During a Roof Inspection in Eugene",
    excerpt: "If you've never had a professional roof inspection, you might be wondering what it entails. Here's a breakdown of what to expect and why it's so important for your Eugene home.",
    date: "2024-03-12",
    readTime: "6 min read",
    author: "John Smith",
    category: "Maintenance",
    slug: "understanding-roof-inspections-eugene"
  },
  {
    id: 5,
    title: "What to Expect During a Metal Roofing Installation",
    excerpt: "Thinking about installing a metal roof? Here's what you need to know about the process, from start to finish, including preparation, installation steps, and why professional installation matters.",
    date: "2024-03-10",
    readTime: "7 min read",
    author: "Sarah Johnson",
    category: "Installation",
    slug: "metal-roofing-installation-process"
  },
  {
    id: 6,
    title: "How to Extend Your Roof's Lifespan",
    excerpt: "Your roof is a significant investment, and with proper care, it can protect your home for decades. Learn essential preventative maintenance tips to avoid costly repairs and ensure your roof stays in top condition.",
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
                    to={`/roofing-tips/${post.slug}`}
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
