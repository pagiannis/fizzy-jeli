import { CardContainer } from "../ui/CardContainer";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What makes Fizy-Jeli products special?",
    answer: "Our fizzy jellies and drinks combine minimalist ingredients with maximum fizz for a uniquely clean, refreshing experience."
  },
  {
    question: "Are your products vegan?",
    answer: "Yes! All Fizy-Jeli products are 100% plant-based and cruelty-free."
  },
  {
    question: "How long does shipping take?",
    answer: "Orders ship within 1-2 business days. Delivery typically takes 3-5 days in the EU."
  },
  {
    question: "Can I recycle the packaging?",
    answer: "Absolutely. We use 100% recyclable materials with minimal design to reduce waste."
  },
  {
    question: "Do you offer sugar-free options?",
    answer: "Yes, we have a naturally sweetened line using plant-based alternatives."
  }
];

const FaqItem = ({ question, answer }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 py-4">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-gray-900">{question}</h3>
        <ChevronDownIcon 
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600">{answer}</p>
      )}
    </div>
  );
};

const FaqDiv = () => {
  return (
    <CardContainer title="FAQ" width={4}>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </CardContainer>
  );
};

export default FaqDiv;