
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BlogPostMeta from '@/components/blog/BlogPostMeta';
import BlogContent from '@/components/blog/BlogContent';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white pt-32">
      <Helmet>
        <title>{post.title} | Eugene Roofing NW Blog</title>
        <meta 
          name="description" 
          content="Learn about roofing maintenance, repairs, and best practices for Eugene homeowners." 
        />
        <link rel="canonical" href={`https://www.eugeneroofingnw.com/roofing-tips/${slug}`} />
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/roofing-tips" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <BlogPostMeta 
            date={post.date}
            readTime={post.readTime}
            author={post.author}
          />
          <BlogContent content={post.content} />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
