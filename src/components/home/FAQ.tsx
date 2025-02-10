
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How long does a typical roof repair take?",
    answer: "Most residential roof repairs can be completed within 1-3 days, depending on the extent of the damage and weather conditions."
  },
  {
    question: "Do you provide emergency roofing services?",
    answer: "Yes, we offer 24/7 emergency roofing services in Eugene and surrounding areas for urgent repairs and storm damage."
  },
  {
    question: "What types of roofing materials do you work with?",
    answer: "We work with all major roofing materials including asphalt shingles, metal roofing, tile, and flat roof systems."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed and insured in Oregon. We maintain comprehensive liability insurance and workers' compensation coverage."
  },
  {
    question: "Do you offer warranties?",
    answer: "Yes, we offer manufacturer warranties on materials and our own workmanship warranty on installations and repairs."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
