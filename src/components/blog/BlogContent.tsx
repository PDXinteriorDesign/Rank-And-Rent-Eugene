
import React from 'react';
import { Heading2, ListCheck, CheckCircle2 } from 'lucide-react';

type BlogContentProps = {
  content: string;
};

const BlogContent = ({ content }: BlogContentProps) => {
  const formatContent = (content: string) => {
    const sections = content.split('\n\n');
    return sections.map((section, index) => {
      // Handle headings
      if (section.endsWith('?') || section.endsWith(':')) {
        return (
          <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
            <Heading2 className="w-5 h-5" />
            {section}
          </h2>
        );
      }
      
      // Handle bullet points and numbered lists
      if (section.includes('\n')) {
        const lines = section.split('\n').filter(line => line.trim());
        
        // Check if it's a numbered list
        if (lines.some(line => line.match(/^\d+\./))) {
          return (
            <div key={index} className="my-6">
              <ol className="list-decimal list-inside space-y-3">
                {lines.map((line, lineIndex) => {
                  const content = line.replace(/^\d+\.\s*/, '');
                  return (
                    <li key={lineIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1">{content}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        }
        
        // Handle bullet points (both ● and ○)
        if (lines.some(line => line.trim().startsWith('●') || line.trim().startsWith('○'))) {
          const isSubList = lines.some(line => line.trim().startsWith('○'));
          return (
            <div key={index} className="my-6">
              <ul className={`space-y-${isSubList ? '2' : '3'}`}>
                {lines.map((line, lineIndex) => {
                  const content = line.replace(/^[●○]\s*/, '');
                  const isSubItem = line.trim().startsWith('○');
                  return (
                    <li key={lineIndex} className={`flex items-start gap-2 ${isSubItem ? 'ml-6' : ''}`}>
                      {isSubItem ? (
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      ) : (
                        <ListCheck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      )}
                      <span>{content}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }
      }
      
      // Regular paragraphs
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
