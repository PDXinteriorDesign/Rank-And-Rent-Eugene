
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How much does a new roof cost in Eugene, Oregon?",
    answer: "A new roof in Eugene typically costs between $8,000 and $15,000, depending on your home's size, roof complexity, and chosen materials. We provide detailed, no-obligation estimates."
  },
  {
    question: "How long does a roof replacement take?",
    answer: "Most residential roof replacements in Eugene are completed in 2-3 days, weather permitting. Larger or more complex projects may take 4-5 days."
  },
  {
    question: "What roofing materials work best in Eugene's climate?",
    answer: "We recommend architectural shingles or metal roofing for Eugene's wet climate. Both options provide excellent protection against rain, moss growth, and wind."
  },
  {
    question: "Do you offer financing for roof replacement?",
    answer: "Yes, we offer flexible financing options with competitive rates and terms. We also work with all major insurance companies for storm damage claims."
  },
  {
    question: "What warranties do you offer?",
    answer: "We provide a lifetime workmanship warranty and manufacturer warranties ranging from 30 to 50 years, depending on the materials chosen."
  }
];

const ReplacementFAQ = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
        <h2 className="text-3xl font-bold text-center mb-12">Roof Replacement FAQs</h2>
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

export default ReplacementFAQ;
