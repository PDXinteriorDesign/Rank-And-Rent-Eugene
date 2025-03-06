
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

interface RelatedPostsProps {
  currentSlug: string;
  category: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentSlug, category }) => {
  const relatedPosts = Object.entries(blogPosts)
    .filter(([slug, post]) => post.category === category && slug !== currentSlug)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedPosts.map(([slug, post]) => (
          <Link 
            key={slug} 
            to={`/roofing-tips/${slug}`}
            className="group"
          >
            <div className="bg-gray-50 rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg">
              <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {post.excerpt.slice(0, 120)}...
              </p>
              <span className="inline-flex items-center text-primary gap-2 font-medium">
                Read More
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
