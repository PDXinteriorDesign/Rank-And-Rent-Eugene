
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Best roofing contractor in Eugene! They fixed our storm damage quickly and professionally. The team was courteous, clean, and completed the work ahead of schedule.",
    author: "Sarah Johnson",
    location: "South Eugene",
    service: "Emergency Roof Repair",
    rating: 5,
    date: "2024-02"
  },
  {
    text: "Outstanding quality and service. Their team installed our new metal roof perfectly. The attention to detail and communication throughout the project was excellent.",
    author: "Mike Peterson",
    location: "West Eugene",
    service: "New Roof Installation",
    rating: 5,
    date: "2024-01"
  },
  {
    text: "Fast emergency response after a major leak. Saved us from extensive water damage. Their 24/7 service is truly reliable and professional.",
    author: "David Wilson",
    location: "Springfield",
    service: "Emergency Repair",
    rating: 5,
    date: "2024-03"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4">
        <h2 id="testimonials-title" className="text-3xl font-bold text-center mb-4">
          Trusted by Eugene Homeowners
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          See what our satisfied customers across Eugene and Lane County have to say about our roofing services.
        </p>
        <div 
          className="grid md:grid-cols-3 gap-8"
          role="list"
          aria-label="Customer testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <article 
              key={testimonial.author}
              className="bg-white p-6 rounded-lg shadow-sm animate-slideUp relative"
              style={{ animationDelay: `${index * 100}ms` }}
              role="listitem"
            >
              <Quote 
                className="w-8 h-8 text-secondary/20 absolute top-4 right-4" 
                aria-hidden="true"
              />
              <div 
                className="flex items-center mb-4" 
                aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <footer className="border-t pt-4">
                  <cite className="not-italic">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </cite>
                </footer>
              </blockquote>
            </article>
          ))}
        </div>

        {/* Review Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Eugene Roofing NW",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "200"
            },
            "review": testimonials.map(t => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating
              },
              "author": {
                "@type": "Person",
                "name": t.author
              },
              "reviewBody": t.text,
              "datePublished": t.date
            }))
          })}
        </script>
      </div>
    </section>
  );
};

export default Testimonials;
