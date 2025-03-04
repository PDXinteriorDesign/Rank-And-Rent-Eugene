
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Heading2, ListCheck } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  
  // In a real application, this would fetch from an API
  const posts = {
    'professional-roof-inspection-guide': {
      title: "Why Regular Roof Inspections Are Essential for Eugene Homeowners",
      content: `Your roof is your home's first line of defense against Eugene's unpredictable weather. From heavy rainfall to strong winds, your roof takes a beating year-round. That's why regular professional roof inspections are crucial to keeping your home safe and secure.

What Does a Roof Inspection Cover?
During a roof inspection, a certified professional will:

Check for damaged or missing shingles.

Inspect flashing around chimneys, vents, and skylights.

Examine gutters and drainage systems for clogs or damage.

Look for signs of leaks, mold, or rot in your attic.

These steps help identify small issues before they turn into costly repairs.

How Often Should You Schedule Inspections?
In Eugene's climate, it's recommended to schedule roof inspections:

Twice a Year: Ideally in spring and fall to address seasonal wear and tear.

After Severe Weather: High winds, heavy rain, or hail can cause hidden damage.

Before Buying or Selling a Home: Ensure the roof is in good condition for the next owner.

The Benefits of Regular Inspections
Save Money: Catching problems early prevents expensive repairs.

Extend Roof Lifespan: Proper maintenance can add years to your roof's life.

Peace of Mind: Know your home is protected from the elements.

Don't wait for a leak to appear—schedule a professional roof inspection today and keep your Eugene home in top shape!`,
      date: "2024-03-18",
      readTime: "6 min read",
      author: "John Smith"
    },
    'metal-roofing-benefits-considerations': {
      title: "Is Metal Roofing the Right Choice for Your Eugene Home?",
      content: `Metal roofing is becoming an increasingly popular choice for homeowners in Eugene, and for good reason. It's durable, energy-efficient, and built to withstand the Pacific Northwest's unique climate. But is it the right option for your home? Let's break it down.

Benefits of Metal Roofing
Durability: Metal roofs can last 50 years or more, outlasting traditional asphalt shingles.

Weather Resistance: They're designed to handle heavy rain, wind, and even snow.

Energy Efficiency: Metal roofs reflect sunlight, reducing cooling costs in the summer.

Eco-Friendly: Many metal roofs are made from recycled materials and are fully recyclable at the end of their lifespan.

Things to Consider
Upfront Cost: Metal roofing is more expensive initially, but its longevity often makes up for the investment.

Noise: While some worry about noise during rain, proper insulation can minimize this.

Aesthetic Options: Metal roofs come in a variety of styles and colors to match your home's design.

Is Metal Roofing Right for You?
If you're looking for a long-term, low-maintenance roofing solution that can handle Eugene's weather, metal roofing is worth considering. Contact a local roofing expert to discuss your options and get a personalized recommendation.`,
      date: "2024-03-16",
      readTime: "7 min read",
      author: "Sarah Johnson"
    },
    'essential-roof-maintenance-tips': {
      title: "Top Roof Maintenance Tips to Protect Your Eugene Home",
      content: `Your roof is one of the most important parts of your home, and regular maintenance is key to keeping it in great shape. Here are some essential tips to help you protect your roof and extend its lifespan.

Seasonal Maintenance Checklist
Spring: Inspect for winter damage, clean gutters, and remove debris.

Summer: Check for signs of sun damage, such as cracked or curled shingles.

Fall: Clear leaves and debris, and ensure gutters are ready for rain.

Winter: Look for ice dams and ensure proper attic insulation.

Preventative Measures
Trim Overhanging Branches: Prevent damage from falling limbs and reduce moss growth.

Clean Gutters Regularly: Clogged gutters can lead to water damage and roof leaks.

Inspect for Moss and Algae: Eugene's damp climate makes roofs prone to moss growth. Remove it promptly to avoid damage.

When to Call a Professional
While DIY maintenance is helpful, some tasks require expert attention. If you notice leaks, sagging, or significant damage, contact a local roofing professional to address the issue before it worsens.

By following these tips, you can keep your roof in excellent condition and avoid costly repairs down the road.`,
      date: "2024-03-14",
      readTime: "8 min read",
      author: "Mike Wilson"
    },
    'understanding-roof-inspections-eugene': {
      title: "What to Expect During a Roof Inspection in Eugene",
      content: `If you've never had a professional roof inspection, you might be wondering what it entails. Here's a breakdown of what to expect and why it's so important for your Eugene home.

The Inspection Process
Exterior Inspection: The inspector will examine your roof's surface for damaged or missing shingles, cracked flashing, and signs of wear.

Interior Inspection: They'll check your attic for leaks, mold, and proper ventilation.

Gutter and Drainage Check: Clogged or damaged gutters can cause water to pool and damage your roof.

Why Inspections Matter
Regular inspections help:

Identify hidden issues before they become major problems.

Extend the life of your roof.

Maintain your home's value and curb appeal.

How to Prepare for an Inspection
Clear access to your attic and roof.

Remove debris from gutters and downspouts.

Note any concerns, such as leaks or drafts, to share with the inspector.

A professional roof inspection is a small investment that can save you thousands in repairs. Schedule yours today and keep your Eugene home in top condition!`,
      date: "2024-03-12",
      readTime: "6 min read",
      author: "John Smith"
    },
    'metal-roofing-installation-process': {
      title: "What to Expect During a Metal Roofing Installation",
      content: `Thinking about installing a metal roof? Here's what you need to know about the process, from start to finish.

Step-by-Step Installation
Initial Consultation: A roofing expert will assess your home and discuss your options.

Preparation: The old roof is removed, and the deck is inspected for damage.

Installation: Metal panels or shingles are carefully installed, ensuring proper alignment and sealing.

Finishing Touches: Flashing, trim, and gutters are added to complete the look.

How Long Does It Take?
Most metal roofing installations take 1-3 days, depending on the size of your home and the complexity of the project.

Why Choose a Professional?
While DIY might seem tempting, professional installation ensures:

Proper sealing and waterproofing.

Compliance with local building codes.

A warranty on materials and labor.

If you're ready to upgrade to a metal roof, contact a trusted Eugene roofing company to get started.`,
      date: "2024-03-10",
      readTime: "7 min read",
      author: "Sarah Johnson"
    },
    'preventative-maintenance-guide': {
      title: "How to Extend Your Roof's Lifespan",
      content: `Your roof is a significant investment, and with proper care, it can protect your home for decades. Preventative maintenance is the key to avoiding costly repairs and ensuring your roof stays in great condition. Here's a guide to help you keep your roof in great shape year-round.

Why Preventative Maintenance Matters
Regular maintenance helps:

Prevent Small Issues from Becoming Big Problems: Catching minor damage early can save you thousands in repairs.

Extend Your Roof's Lifespan: A well-maintained roof can last significantly longer than one that's neglected.

Protect Your Home: A healthy roof keeps your home safe from leaks, mold, and structural damage.

Essential Preventative Maintenance Tips
Inspect Your Roof Regularly

Look for missing, cracked, or curling shingles.

Check for signs of moss, algae, or debris buildup.

Examine flashing around chimneys, vents, and skylights for damage.

Keep Gutters Clean

Clogged gutters can cause water to pool and damage your roof.

Clean gutters at least twice a year, especially in fall and spring.

Trim Overhanging Branches

Branches can scrape against your roof and damage shingles.

Falling leaves and debris can also trap moisture, leading to moss growth.

Address Moss and Algae Promptly

Eugene's damp climate makes roofs prone to moss and algae.

Use a gentle cleaning solution or hire a professional to remove growth safely.

Ensure Proper Attic Ventilation

Poor ventilation can cause heat and moisture to build up, damaging your roof from the inside out.

Check that your attic has adequate airflow to prevent issues like ice dams in winter.

When to Call a Professional
While DIY maintenance is helpful, some tasks require expert attention. Schedule a professional inspection if you:

Notice leaks or water stains on your ceiling.

See sagging or uneven areas on your roof.

Are unsure about the condition of your roof after severe weather.

The Bottom Line
Preventative maintenance is a small investment that pays off in the long run. By taking care of your roof, you can avoid costly repairs, extend its lifespan, and keep your home safe and dry.

If you're due for a roof inspection or need help with maintenance, contact a trusted Eugene roofing professional today. Your roof—and your wallet—will thank you!`,
      date: "2024-03-08",
      readTime: "5 min read",
      author: "Mike Wilson"
    }
  };

  const post = posts[slug as keyof typeof posts];

  // Function to format the content with proper structure
  const formatContent = (content: string) => {
    const sections = content.split('\n\n');
    return sections.map((section, index) => {
      // Check if the section is a heading
      if (section.endsWith('?') || section.endsWith(':')) {
        return (
          <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
            <Heading2 className="w-5 h-5" />
            {section}
          </h2>
        );
      }
      
      // Check if the section contains list items
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
      
      // Regular paragraphs
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-6">
          {section}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      <Helmet>
        <title>{post.title} | Eugene Roofing NW Blog</title>
        <meta 
          name="description" 
          content={post.excerpt || "Learn about roofing maintenance, repairs, and best practices for Eugene homeowners."} 
        />
        <link rel="canonical" href={`https://www.eugeneroofingnw.com/roofing-tips/${slug}`} />
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/roofing-tips" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-gray-500 mb-8 border-b border-gray-200 pb-6">
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

          <div className="mt-8">
            {formatContent(post.content)}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
