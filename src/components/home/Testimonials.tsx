
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Best roofing contractor in Eugene! They fixed our storm damage quickly and professionally.",
    author: "Sarah Johnson",
    rating: 5
  },
  {
    text: "Outstanding quality and service. Their team installed our new metal roof perfectly.",
    author: "Mike Peterson",
    rating: 5
  },
  {
    text: "Fast emergency response after a major leak. Saved us from extensive water damage.",
    author: "David Wilson",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="bg-white p-6 rounded-lg shadow-sm animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
