import { CardContainer } from "../ui/CardContainer";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "WHAT MAKES FIZZY-JELI PRODUCTS SPECIAL?",
    answer:
      "Our fizzy jellies and drinks combine minimalist ingredients with maximum fizz for a uniquely clean, refreshing experience.",
  },
  {
    question: "ARE YOUR PRODUCTS VEGAN?",
    answer:
      "Yes! All Fizy-Jeli products are 100% plant-based and cruelty-free.",
  },
  {
    question: "HOW LONG DOES SHIPPING TAKE?",
    answer:
      "Orders ship within 1-2 business days. Delivery typically takes 3-5 days in the EU.",
  },
  {
    question: "CAN I RECYCLE THE PACKAGING?",
    answer:
      "Absolutely. We use 100% recyclable materials with minimal design to reduce waste.",
  },
  {
    question: "DO YOU OFFER SUGAR-FREE OPTIONS?",
    answer:
      "Yes, we have a naturally sweetened line using plant-based alternatives.",
  },
];

const FaqItem = ({ question, answer }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`py-4 px-4 rounded-lg transition-colors duration-200 ${
        isOpen ? "bg-pink-400" : ""
      }`}
    >
      <button
        className="flex w-full items-center justify-between text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3
          className={`text-lg ${
            isOpen ? "text-purple-200" : "text-pink-400"
          } font-extrabold `}
        >
          {question}
        </h3>
        <ChevronDownIcon
          className={`h-5 w-5 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-purple-200" : "text-pink-400"
          }`}
        />
      </button>
      {isOpen && <p className="mt-2 text-purple-200">{answer}</p>}
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
