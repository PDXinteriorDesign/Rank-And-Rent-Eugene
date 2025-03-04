
import React from 'react';
import { Heading2, ListCheck } from 'lucide-react';

type BlogContentProps = {
  content: string;
};

const BlogContent = ({ content }: BlogContentProps) => {
  const formatContent = (content: string) => {
    const sections = content.split('\n\n');
    return sections.map((section, index) => {
      if (section.endsWith('?') || section.endsWith(':')) {
        return (
          <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
            <Heading2 className="w-5 h-5" />
            {section}
          </h2>
        );
      }
      
      if (section.includes('\n')) {
        const lines = section.split('\n').filter(line => line.trim());
        if (lines.every(line => line.includes(':'))) {
          return (
            <div key={index} className="my-6">
              <ul className="space-y-3">
                {lines.map((line, lineIndex) => (
                  <li key={lineIndex} className="flex items-start gap-2">
                    <ListCheck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      }
      
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-6">
          {section}
        </p>
      );
    });
  };

  return <div className="mt-8">{formatContent(content)}</div>;
};

export default BlogContent;
