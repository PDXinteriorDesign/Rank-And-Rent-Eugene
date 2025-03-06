
import React from 'react';
import { Heading2, ListCheck, CheckCircle2 } from 'lucide-react';

type BlogContentProps = {
  content: string;
};

const BlogContent = ({ content }: BlogContentProps) => {
  const formatContent = (content: string) => {
    const sections = content.split('\n\n');
    return sections.map((section, index) => {
      // Handle headings with IDs for table of contents
      if (section.endsWith('?') || section.endsWith(':')) {
        const headingId = section.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return (
          <h2 
            id={headingId}
            key={index} 
            className="text-3xl font-semibold mt-12 mb-6 flex items-center gap-3 scroll-mt-24 text-gray-900"
          >
            <Heading2 className="w-6 h-6 text-primary" />
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
            <div key={index} className="my-8">
              <ol className="list-decimal list-inside space-y-4">
                {lines.map((line, lineIndex) => {
                  const content = line.replace(/^\d+\.\s*/, '');
                  return (
                    <li key={lineIndex} className="flex items-start gap-3 text-lg text-gray-700">
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
            <div key={index} className="my-8">
              <ul className={`space-y-${isSubList ? '3' : '4'}`}>
                {lines.map((line, lineIndex) => {
                  const content = line.replace(/^[●○]\s*/, '');
                  const isSubItem = line.trim().startsWith('○');
                  return (
                    <li key={lineIndex} className={`flex items-start gap-3 ${isSubItem ? 'ml-8' : ''} text-lg text-gray-700`}>
                      {isSubItem ? (
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      ) : (
                        <ListCheck className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
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
        <p key={index} className="text-lg text-gray-700 leading-relaxed mb-8">
          {section}
        </p>
      );
    });
  };

  return <div className="mt-8">{formatContent(content)}</div>;
};

export default BlogContent;
