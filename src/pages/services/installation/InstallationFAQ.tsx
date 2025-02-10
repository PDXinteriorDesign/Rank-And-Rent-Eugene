
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is the average cost of a new roof installation in Eugene?",
    answer: "New roof installation costs in Eugene typically range from $8,000-$15,000 for most homes, varying based on size, materials, and complexity. We offer competitive financing options and free detailed estimates."
  },
  {
    question: "Which roofing materials work best in Eugene's climate?",
    answer: "For Eugene's wet climate, we recommend architectural shingles, metal roofing, or slate tiles. These materials provide excellent protection against rain, moss growth, and are rated for our local weather conditions."
  },
  {
    question: "How long does a roof installation take in Eugene?",
    answer: "Most residential roof installations in Eugene take 2-5 days, depending on the home's size and weather conditions. We work efficiently while maintaining strict quality standards and local building codes."
  },
  {
    question: "Do I need permits for roof installation in Eugene, Oregon?",
    answer: "Yes, roof installations in Eugene require building permits. As a licensed contractor, we handle all necessary permits and ensure compliance with Lane County building codes."
  },
  {
    question: "What warranties do you offer for new roofs in Eugene?",
    answer: "We provide manufacturer warranties ranging from 25-50 years on materials and our own 10-year workmanship warranty. All installations are backed by our local Eugene-based service guarantee."
  }
];

const InstallationFAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Roof Installation FAQs in Eugene</h2>
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

export default InstallationFAQ;
