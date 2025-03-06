
import React from 'react';
import { Calendar, Clock, User, Tag } from 'lucide-react';

type BlogPostMetaProps = {
  date: string;
  readTime: string;
  author: string;
  category: string;
};

const BlogPostMeta = ({ date, readTime, author, category }: BlogPostMetaProps) => {
  return (
    <div className="flex flex-wrap items-center gap-6 text-gray-600 mt-4">
      <span className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-primary" />
        {date}
      </span>
      <span className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-primary" />
        {readTime}
      </span>
      <span className="flex items-center gap-2">
        <User className="w-4 h-4 text-primary" />
        {author}
      </span>
      <span className="flex items-center gap-2">
        <Tag className="w-4 h-4 text-primary" />
        {category}
      </span>
    </div>
  );
};

export default BlogPostMeta;
