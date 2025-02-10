
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How often should I have my roof cleaned in Eugene?",
    answer: "Due to Eugene's wet climate and abundant vegetation, we recommend professional roof cleaning every 1-2 years to prevent moss growth and maintain your roof's integrity."
  },
  {
    question: "What's included in a roof cleaning service in Eugene?",
    answer: "Our Eugene roof cleaning service includes moss removal, gutter cleaning, debris removal, and preventative treatment application. We also inspect for potential damage or maintenance needs."
  },
  {
    question: "How do you remove moss from roofs in Eugene safely?",
    answer: "We use eco-friendly, Oregon-approved cleaning solutions and soft-wash techniques that effectively remove moss without damaging your roofing materials or surrounding vegetation."
  },
  {
    question: "Can roof cleaning prevent damage to my Eugene home?",
    answer: "Yes, regular roof cleaning prevents moisture retention, extends roof life, and helps avoid costly repairs. It's particularly important in Eugene's climate to prevent moss and algae damage."
  },
  {
    question: "What time of year is best for roof cleaning in Eugene?",
    answer: "While we clean roofs year-round, spring and summer are ideal for roof cleaning in Eugene. However, our treatments are effective in any season, and we can work around local weather conditions."
  }
];

const CleaningFAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Roof Cleaning FAQs for Eugene Homeowners</h2>
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

export default CleaningFAQ;
