
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BlogPostMeta from '@/components/blog/BlogPostMeta';
import BlogContent from '@/components/blog/BlogContent';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';
import { getBlogPostSchema, getLocalBusinessSchema } from '@/utils/localSeoSchema';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return null;
  }

  const metaDescription = `${post.excerpt.slice(0, 155)}... Learn more about ${post.title.toLowerCase()} from Eugene's trusted roofing experts serving Lane County and surrounding areas.`;

  const canonicalUrl = `https://www.eugeneroofingnw.com/roofing-tips/${slug}`;

  return (
    <div className="min-h-screen bg-white pt-32">
      <Helmet>
        <title>{`${post.title} | Eugene Roofing NW Blog - Expert Roofing Tips`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image || "https://eugeneroofingnw.com/og-image.png"} />
        <script type="application/ld+json">
          {JSON.stringify([
            getBlogPostSchema(post),
            getLocalBusinessSchema()
          ])}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-gray-500 hover:text-primary">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link to="/roofing-tips" className="text-gray-500 hover:text-primary">Blog</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">{post.title}</li>
          </ol>
        </nav>

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
