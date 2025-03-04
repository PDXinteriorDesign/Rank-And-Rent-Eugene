
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Clock } from 'lucide-react';

const contactMethods = [
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

const ContactMethods = () => {
  return (
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
  );
};

export default ContactMethods;
