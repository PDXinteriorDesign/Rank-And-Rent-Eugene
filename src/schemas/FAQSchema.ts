
export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the average cost of roof repair in Eugene, OR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most homeowners in Eugene pay between $5,000 - $12,000 for a roof replacement. The cost depends on materials, roof size, and labor. Minor repairs typically range from $300 to $1,500. We provide detailed, upfront pricing and free estimates for all roofing projects."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a roof replacement take in Eugene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential roof replacements in Eugene can be completed in 2-3 days, weather permitting. Larger or more complex projects may take 4-5 days. We work efficiently while maintaining our high-quality standards."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer emergency roofing services in Eugene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide 24/7 emergency roof repair services throughout Eugene and Lane County. Our team can typically respond within 2 hours for urgent situations like storm damage or active leaks."
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
