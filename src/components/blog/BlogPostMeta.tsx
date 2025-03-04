
import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

type BlogPostMetaProps = {
  date: string;
  readTime: string;
  author: string;
};

const BlogPostMeta = ({ date, readTime, author }: BlogPostMetaProps) => {
  return (
    <div className="flex items-center gap-6 text-gray-500 mb-8 border-b border-gray-200 pb-6">
      <span className="flex items-center gap-1">
        <Calendar className="w-4 h-4" />
        {date}
      </span>
      <span className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        {readTime}
      </span>
      <span className="flex items-center gap-1">
        <User className="w-4 h-4" />
        {author}
      </span>
    </div>
  );
};

export default BlogPostMeta;
