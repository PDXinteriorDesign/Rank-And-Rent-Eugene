
export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the average cost to replace a roof in Eugene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The average cost for roof replacement in Eugene ranges from $8,200 to $14,500, depending on your home's size, roof complexity, and chosen materials. Call us at 541-555-0123 for a free, personalized estimate."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a roof replacement take in Eugene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential roof replacements in Eugene are completed in 2-3 days, weather permitting. Larger or more complex projects may take 4-5 days. We work efficiently while maintaining our high-quality standards."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer emergency roofing services in Eugene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide 24/7 emergency roof repair services throughout Eugene and Lane County. Our team typically responds within 2 hours for urgent situations like storm damage or active leaks."
      }
    },
    {
      "@type": "Question",
      "name": "What roofing materials work best in Eugene's climate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For Eugene's wet climate, we recommend architectural shingles, metal roofing, or slate tiles. These materials offer excellent water resistance and longevity, with warranties ranging from 30-50 years."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I have my roof inspected in Eugene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Due to Eugene's heavy rainfall and potential moss growth, we recommend annual roof inspections. Regular inspections help identify and address issues before they become major problems."
      }
    }
  ]
});
