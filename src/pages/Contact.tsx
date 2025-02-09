
import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';

const Contact = () => {
  const contactMethods = [
    {
      title: "Phone",
      value: "(541) 555-0123",
      icon: Phone,
      link: "tel:+15415550123"
    },
    {
      title: "Email",
      value: "info@eugeneroofing.com",
      icon: Mail,
      link: "mailto:info@eugeneroofing.com"
    },
    {
      title: "Office",
      value: "123 Main Street, Eugene, OR 97401",
      icon: MapPin,
      link: "https://maps.google.com"
    },
    {
      title: "Hours",
      value: "Mon-Fri: 8am-6pm",
      icon: Clock,
      link: null
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Eugene Roofing Experts",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Eugene",
        "addressRegion": "OR",
        "postalCode": "97401"
      },
      "telephone": "(541) 555-0123",
      "email": "info@eugeneroofing.com",
      "openingHours": "Mo-Fr 08:00-18:00"
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Eugene Roofing Experts | Get a Free Quote</title>
        <meta 
          name="description" 
          content="Contact Eugene Roofing Experts for all your roofing needs. Get a free quote today! Available 24/7 for emergency services. Serving Eugene and surrounding areas."
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Get in Touch With Us
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about our services? Need a quote? 
              We're here to help with all your roofing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="border border-gray-100 hover:border-secondary/20 transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <method.icon className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-semibold mb-2">{method.title}</h3>
                    {method.link ? (
                      <a 
                        href={method.link} 
                        className="text-gray-600 hover:text-secondary transition-colors"
                        target={method.link.startsWith('http') ? '_blank' : undefined}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-gray-600">{method.value}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                ></textarea>
              </div>
              <div className="text-center">
                <Button type="submit" size="lg" className="bg-secondary hover:bg-secondary/90">
                  <MessageSquare className="mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="Eugene Roofing Experts Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.2914029569713!2d-123.0897898!3d44.0520926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11e31824bdb99%3A0x7e8e1c6c6a0fc8ea!2sEugene%2C%20OR!5e0!3m2!1sen!2sus!4v1629308075754!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
