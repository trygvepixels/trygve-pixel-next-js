"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircle, MinusCircle } from "lucide-react";

const faqData = [
  {
    question: "How much does web design and development typically cost?",
    answer:
      "The cost of web design and development varies depending on the complexity and features required. Typically, it can range from a few thousand to tens of thousands of dollars.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines depend on the scope and requirements. On average, a standard website takes 4-8 weeks to complete.",
  },
  {
    question: "Can your creative agency accommodate tight deadlines?",
    answer:
      "Yes, we can work with tight deadlines, but it may affect the cost and available features.",
  },
  {
    question: "What ongoing support and maintenance do you offer post-launch?",
    answer:
      "We offer various maintenance packages, including updates, security checks, and content management.",
  },
  {
    question:
      "How do you handle revisions and feedback during the design process?",
    answer:
      "We value client feedback and allow multiple revision rounds to ensure satisfaction.",
  },
  {
    question:
      "Are there additional costs for digital marketing services integrated into web projects?",
    answer:
      "Yes, digital marketing services are priced separately based on the chosen package and strategy.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" bg-black py-16 c1 flex items-center justify-center">
      <div className="max-w-7xl w-full px-4">
        <h1 className="bg-gradient-to-r special-font from-white via-sky-100 to-sky-300 bg-clip-text text-transparent text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl mb-10">FAQ's</h1>
        <ul className="space-y-4">
          {faqData.map((item, index) => (
            <li
              key={index}
              className=" p-4 hover:bgc3 transition-all ease-in-out duration-300 hover:px-8"
              onClick={() => toggleFAQ(index)}
            >
              <button className="w-full text-left flex justify-between items-center md:text-2xl font-semibld  focus:outline-none">
                <span>{item.question}</span>
                {activeIndex === index ? (
                  <MinusCircle className="w-6 h-6 text-gray-400" />
                ) : (
                  <PlusCircle className="w-6 h-6 text-gray-400" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-gray-800 mt-2"
                  >
                    <p className="text-white md:text-2xl">Answer: {item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
