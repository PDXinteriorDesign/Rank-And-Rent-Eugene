
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How much does roof repair cost in Eugene, Oregon?",
    answer: "Roof repair costs in Eugene typically range from $300-$1,500, depending on the extent of damage and materials needed. We provide free detailed estimates and work with all major insurance companies for storm damage claims."
  },
  {
    question: "How quickly can you repair a leaking roof in Eugene?",
    answer: "We offer same-day emergency roof repair services in Eugene and surrounding areas. For non-emergency repairs, we typically complete work within 1-3 business days after assessment."
  },
  {
    question: "Do you repair storm damage to roofs in Eugene's rainy season?",
    answer: "Yes, we specialize in storm damage repair during Eugene's wet season. Our team is experienced with local weather patterns and uses weather-resistant materials suitable for the Pacific Northwest climate."
  },
  {
    question: "Will my insurance cover roof repair in Eugene?",
    answer: "Most homeowner's insurance policies in Oregon cover roof repairs caused by sudden damage like storms or fallen trees. We work directly with insurance companies and can help document damage for your claim."
  },
  {
    question: "How long does a roof repair last in Eugene's climate?",
    answer: "Our roof repairs in Eugene typically last 10-15 years or longer, depending on the type of repair and materials used. We use high-grade materials designed for the Pacific Northwest's weather conditions."
  }
];

const RepairFAQ = () => {
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
        <h2 className="text-3xl font-bold text-center mb-12">Common Roof Repair Questions in Eugene</h2>
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

export default RepairFAQ;
