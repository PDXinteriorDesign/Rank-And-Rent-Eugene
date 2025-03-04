
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BlogPostMeta from '@/components/blog/BlogPostMeta';
import BlogContent from '@/components/blog/BlogContent';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return null;
  }

  // Generate meta description based on post content
  const metaDescription = `${post.excerpt.slice(0, 155)}... Learn more about ${post.title.toLowerCase()} from Eugene's trusted roofing experts.`;

  return (
    <div className="min-h-screen bg-white pt-32">
      <Helmet>
        <title>{post.title} | Eugene Roofing NW Blog</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://www.eugeneroofingnw.com/roofing-tips/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": metaDescription,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "datePublished": post.date,
            "image": post.image || "https://eugeneroofingnw.com/og-image.png",
            "publisher": {
              "@type": "Organization",
              "name": "Eugene Roofing NW",
              "logo": {
                "@type": "ImageObject",
                "url": "https://eugeneroofingnw.com/lovable-uploads/b161862e-e6ae-4e2d-ac94-f4d465c5d06d.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/roofing-tips" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <BlogPostMeta 
            date={post.date}
            readTime={post.readTime}
            author={post.author}
          />
          <TableOfContents content={post.content} />
          <BlogContent content={post.content} />
          <RelatedPosts currentSlug={slug as string} category={post.category} />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
