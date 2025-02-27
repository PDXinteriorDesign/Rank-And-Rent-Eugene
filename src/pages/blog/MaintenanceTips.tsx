
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

const MaintenanceTips = () => {
  const post = {
    title: "Essential Roof Maintenance Tips for Eugene Homeowners",
    date: "2024-03-15",
    readTime: "8 min read",
    author: "Mike Wilson",
    content: `
      Living in Eugene's unique climate requires special attention to roof maintenance. 
      Here's your comprehensive guide to keeping your roof in top condition throughout the year.

      1. Regular Inspections
      - Schedule professional inspections twice yearly (spring and fall)
      - Check for loose, damaged, or missing shingles
      - Inspect flashing around chimneys and vents
      - Look for signs of moss or algae growth

      2. Gutter Maintenance
      - Clean gutters at least twice a year
      - Install gutter guards to prevent debris accumulation
      - Check downspouts for proper drainage
      - Ensure gutters are properly secured

      3. Moss Prevention
      - Install zinc or copper strips near the roof peak
      - Keep trees trimmed away from the roof
      - Address moss growth immediately when spotted
      - Use appropriate moss treatment products

      4. Ventilation
      - Ensure proper attic ventilation
      - Check soffit vents are clear of obstruction
      - Monitor attic temperature and moisture levels
      - Address condensation issues promptly

      5. Storm Preparation
      - Remove dead tree limbs near your home
      - Secure loose roofing materials
      - Clear debris from valleys and gutters
      - Have emergency repair contacts ready

      6. Professional Maintenance
      - Schedule annual professional cleaning
      - Address repairs promptly
      - Document all maintenance work
      - Keep warranty information accessible
    `
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      <Helmet>
        <title>{post.title} | Eugene Roofing NW</title>
        <meta 
          name="description" 
          content="Learn essential roof maintenance tips for Eugene's climate. Expert advice on moss prevention, gutter care, and year-round roof maintenance." 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/blog/maintenance-tips" />
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-gray-500 mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>

          <div className="prose max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default MaintenanceTips;
