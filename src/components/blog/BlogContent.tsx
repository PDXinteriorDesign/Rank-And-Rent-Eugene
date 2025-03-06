
import React from 'react';
import { Heading2, ListCheck, CheckCircle2 } from 'lucide-react';

type BlogContentProps = {
  content: string;
};

const BlogContent = ({ content }: BlogContentProps) => {
  const formatContent = (content: string) => {
    const sections = content.split('\n\n');
    return sections.map((section, index) => {
      // Handle headings (## for h2)
      if (section.startsWith('## ')) {
        const headingText = section.replace('## ', '');
        const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return (
          <h2 
            id={headingId}
            key={index} 
            className="text-3xl font-semibold mt-12 mb-6 scroll-mt-24 text-gray-900"
          >
            {headingText}
          </h2>
        );
      }
      
      // Handle subheadings (### for h3)
      if (section.startsWith('### ')) {
        const headingText = section.replace('### ', '');
        return (
          <h3 
            key={index} 
            className="text-2xl font-semibold mt-8 mb-4 text-gray-800"
          >
            {headingText}
          </h3>
        );
      }
      
      // Handle bullet points
      if (section.includes('\n- ')) {
        const lines = section.split('\n').filter(line => line.trim());
        return (
          <div key={index} className="my-8">
            <ul className="space-y-4">
              {lines.map((line, lineIndex) => {
                const content = line.replace(/^-\s*/, '');
                return (
                  <li key={lineIndex} className="flex items-start gap-3 text-lg text-gray-700">
                    <ListCheck className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span>{content}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
      
      // Handle nested bullet points (○)
      if (section.includes('\n○ ')) {
        const lines = section.split('\n').filter(line => line.trim());
        return (
          <div key={index} className="my-8">
            <ul className="space-y-3">
              {lines.map((line, lineIndex) => {
                const content = line.replace(/^○\s*/, '');
                return (
                  <li key={lineIndex} className="flex items-start gap-3 ml-8 text-lg text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{content}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
      
      // Regular paragraphs
      return (
        <p key={index} className="text-lg text-gray-700 leading-relaxed mb-8">
          {section}
        </p>
      );
    });
  };

  return <div className="mt-8">{formatContent(content)}</div>;
};

export default BlogContent;
