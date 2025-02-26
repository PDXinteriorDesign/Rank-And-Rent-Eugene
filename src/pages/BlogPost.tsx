
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  
  // In a real application, this would fetch from an API
  const post = {
    title: "How Often Should You Clean Your Roof in Eugene?",
    content: `
      Regular roof cleaning is essential for maintaining your home in Eugene's wet climate. 
      With our abundant rainfall and humid conditions, moss and algae can quickly take hold 
      on your roof, potentially leading to damage if left unchecked.

      Here's what you need to know about roof cleaning frequency in Eugene:

      1. Inspect Annually
      At minimum, have your roof professionally inspected once a year. This allows us to catch 
      any potential issues early and determine if cleaning is needed.

      2. Clean Every 2-3 Years
      Most Eugene homes benefit from professional roof cleaning every 2-3 years. However, this 
      can vary depending on:
      - Tree coverage
      - Roof orientation
      - Local microclimate
      - Previous moss treatment

      3. Watch for Warning Signs
      Don't wait for scheduled cleaning if you notice:
      - Visible moss growth
      - Dark streaks on shingles
      - Accumulating debris
      - Water stains on interior ceilings
    `,
    date: "2024-03-14",
    readTime: "5 min read",
    author: "John Smith"
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      <Helmet>
        <title>{post.title} | Eugene Roofing NW Blog</title>
        <meta 
          name="description" 
          content="Learn about the optimal roof cleaning schedule for Eugene's climate and how to protect your roof from moss and algae growth." 
        />
        <link rel="canonical" href={`https://www.eugeneroofingnw.com/blog/${slug}`} />
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-gray-500 mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>

          <div className="prose max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
