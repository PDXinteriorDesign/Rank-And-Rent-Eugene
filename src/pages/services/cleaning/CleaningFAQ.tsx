
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqCategories = {
  general: [
    {
      question: "How often should I have my roof cleaned in Eugene?",
      answer: "Due to Eugene's wet climate and abundant vegetation, we recommend professional roof cleaning every 1-2 years to prevent moss growth and maintain your roof's integrity."
    },
    {
      question: "What's included in a roof cleaning service in Eugene?",
      answer: "Our Eugene roof cleaning service includes moss removal, gutter cleaning, debris removal, and preventative treatment application. We also inspect for potential damage or maintenance needs."
    }
  ],
  seasonal: [
    {
      question: "What maintenance is needed in spring?",
      answer: "Spring maintenance includes post-winter inspection, cleaning gutters of winter debris, checking for winter damage, and moss treatment application."
    },
    {
      question: "How do you prepare a roof for winter in Eugene?",
      answer: "Winter preparation includes thorough gutter cleaning, moss prevention treatment, checking for loose shingles, and ensuring proper drainage systems are working."
    }
  ],
  safety: [
    {
      question: "How do you remove moss from roofs in Eugene safely?",
      answer: "We use eco-friendly, Oregon-approved cleaning solutions and soft-wash techniques that effectively remove moss without damaging your roofing materials or surrounding vegetation."
    },
    {
      question: "Can roof cleaning prevent damage to my Eugene home?",
      answer: "Yes, regular roof cleaning prevents moisture retention, extends roof life, and helps avoid costly repairs. It's particularly important in Eugene's climate to prevent moss and algae damage."
    }
  ]
};

const CleaningFAQ = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof faqCategories>('general');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Roof Cleaning FAQs for Eugene Homeowners</h2>
        
        <div className="flex justify-center gap-4 mb-8">
          <Button 
            variant={activeCategory === 'general' ? 'default' : 'outline'}
            onClick={() => setActiveCategory('general')}
          >
            General
          </Button>
          <Button 
            variant={activeCategory === 'seasonal' ? 'default' : 'outline'}
            onClick={() => setActiveCategory('seasonal')}
          >
            Seasonal
          </Button>
          <Button 
            variant={activeCategory === 'safety' ? 'default' : 'outline'}
            onClick={() => setActiveCategory('safety')}
          >
            Safety
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqCategories[activeCategory].map((item, index) => (
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
