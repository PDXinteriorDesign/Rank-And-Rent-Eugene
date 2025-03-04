
import React from 'react';

const ContactMap = () => {
  return (
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
  );
};

export default ContactMap;
