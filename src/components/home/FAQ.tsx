
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How much does a new roof cost in Eugene, Oregon?",
      answer: "The cost of a new roof in Eugene varies depending on factors like size, materials, and complexity. Our residential roofing projects typically range from $8,000 to $20,000. Contact us for a free, detailed estimate specific to your home."
    },
    {
      question: "How long does a roof replacement take in Eugene?",
      answer: "Most residential roof replacements in Eugene can be completed in 2-3 days, weather permitting. Larger or more complex projects may take 4-5 days. We work efficiently while maintaining our high-quality standards."
    },
    {
      question: "Do you offer emergency roof repair services in Eugene?",
      answer: "Yes, we provide 24/7 emergency roof repair services throughout Eugene and Lane County. Our team can typically respond within 2 hours for urgent situations like storm damage or active leaks."
    },
    {
      question: "What types of roofing materials do you recommend for Eugene's climate?",
      answer: "For Eugene's wet climate, we recommend architectural shingles, metal roofing, or slate tiles. These materials offer excellent water resistance and longevity, with warranties ranging from 30-50 years."
    },
    {
      question: "How often should I have my roof inspected in Eugene?",
      answer: "Due to Eugene's heavy rainfall and potential moss growth, we recommend annual roof inspections. Regular inspections help identify and address issues before they become major problems."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions About Roofing in Eugene
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* FAQ Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </section>
  );
};

export default FAQ;
