
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import BlogPostMeta from '@/components/blog/BlogPostMeta';
import BlogContent from '@/components/blog/BlogContent';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedPosts from '@/components/blog/RelatedPosts';
import HomeCTA from '@/components/home/HomeCTA';
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
    <div className="min-h-screen bg-white">
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

      <div className="bg-primary/10 py-20 mt-16">
        <div className="container mx-auto px-4">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link to="/roofing-tips" className="text-gray-600 hover:text-primary">Blog</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-700">{post.title}</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mb-6">
            {post.title}
          </h1>

          <BlogPostMeta 
            date={post.date}
            readTime={post.readTime}
            author={post.author}
            category={post.category}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-24">
              <TableOfContents content={post.content} />
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                    <Tag className="w-4 h-4 mr-1" />
                    {post.category}
                  </span>
                </div>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-9 order-1 lg:order-2">
            <div className="prose prose-lg max-w-none">
              <BlogContent content={post.content} />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <RelatedPosts currentSlug={slug as string} category={post.category} />
            </div>
          </article>
        </div>
      </div>

      <div className="mt-12">
        <HomeCTA />
      </div>
    </div>
  );
};

export default BlogPost;
