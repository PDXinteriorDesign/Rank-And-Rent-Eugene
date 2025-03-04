
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { BlogPost } from '@/types/blog';

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
    <div className="mt-12 border-t border-gray-200 pt-8">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map(([slug, post]) => (
          <Link 
            key={slug} 
            to={`/roofing-tips/${slug}`}
            className="group hover:no-underline"
          >
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {post.excerpt.slice(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
