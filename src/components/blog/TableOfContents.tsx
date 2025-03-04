
import React from 'react';

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
    <div className="bg-muted/30 p-4 rounded-lg mb-8">
      <h2 className="text-lg font-semibold mb-2">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li key={index}>
            <a 
              href={`#${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="text-primary hover:underline"
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
