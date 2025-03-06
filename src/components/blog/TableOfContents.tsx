
import React from 'react';
import { ListCheck } from 'lucide-react';

interface TableOfContentsProps {
  content: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const extractHeadings = (content: string) => {
    const lines = content.split('\n');
    return lines
      .filter(line => line.endsWith('?') || line.endsWith(':'))
      .map(line => line.trim());
  };

  const headings = extractHeadings(content);

  if (headings.length === 0) return null;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <ListCheck className="w-5 h-5 text-primary" />
        Table of Contents
      </h2>
      <ul className="space-y-3">
        {headings.map((heading, index) => (
          <li key={index} className="border-l-2 border-primary/20 hover:border-primary pl-4 transition-colors">
            <a 
              href={`#${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
