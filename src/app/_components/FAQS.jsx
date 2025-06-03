"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

export default function FAQS() {
  const faqs = [
    {
      question: "Do I need a visa for India?",
      answer:
        "Yes, most travelers will require a visa. Please check with your country’s Indian consulate for details.",
    },
    {
      question: "Do I need to purchase travel insurance before travelling?",
      answer:
        "It is highly recommended to purchase comprehensive travel insurance that includes medical coverage.",
    },
    {
      question: "Is tipping customary in India?",
      answer:
        "Tipping is expected in many service areas such as restaurants, hotels, and tours.",
    },
    {
      question: "What should I pack for a trip to India?",
      answer:
        "Comfortable clothing, power adapter, medications, sunscreen, and insect repellent are essential.",
    },
    {
      question: "Can I drink the water in India?",
      answer:
        "It’s advised to drink bottled or filtered water to avoid waterborne illnesses.",
    },
    {
      question: "What is internet access like in India?",
      answer:
        "Internet is widely available in cities via Wi-Fi and mobile data. Rural areas may have limited access.",
    },
    {
      question: "Can I use my mobile phone in India?",
      answer:
        "Yes, but ensure your phone is unlocked. You can buy a local SIM card for better rates.",
    },
    {
      question: "What are the toilets like in India?",
      answer:
        "You’ll find both western-style and squat toilets. Carry toilet paper and hand sanitizer.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 m-8 py-12">
      <h2 className="text-3xl font-semibold mb-8">India travel FAQs</h2>
      <Accordion
        type="single"
        collapsible
        className="border divide-y rounded-md"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="[&[data-state=open]]:bg-muted px-4"
          >
            <AccordionTrigger className="text-left text-xl py-4 hover:no-underline [&[data-state=open]>svg]:rotate-180 transition-transform">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
