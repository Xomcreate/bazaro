import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Constants & Data ---
const ORANGERED = "#FF4500";
const ACCENT_CLASS = "text-[#FF4500] hover:text-[#CC4000] transition duration-200";

const faqData = [
  {
    id: 1,
    question: "How do I place an order on ErrandBox?",
    answer:
      "Placing an order is simple! Browse our categories or use the search bar to find products. Add items to your cart, navigate to checkout, and follow the steps to enter your shipping details and choose a payment method. You'll receive a confirmation email once your order is placed.",
  },
  {
    id: 2,
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit and debit cards (Visa, MasterCard, Verve), secure bank transfers, and mobile money payments. All transactions are protected by industry-leading encryption to ensure your security.",
  },
  {
    id: 3,
    question: "How long does shipping typically take?",
    answer:
      "Shipping times vary based on the vendor location and your destination. Standard delivery typically takes 3-7 business days. You can see estimated delivery windows for each item on its product page before checkout.",
  },
  {
    id: 4,
    question: "Can I track my order in real-time?",
    answer:
      "Absolutely. Once your order is shipped, you will receive a tracking number via email and SMS. You can use this number directly on the courier's website or via the 'My Orders' section in your ErrandBox account.",
  },
  {
    id: 5,
    question: "What is the return and refund policy?",
    answer:
      "We offer a 7-day return policy for most items, provided they are unused and in original packaging. To initiate a return, please go to the 'Returns' section in your account. Refunds are processed immediately upon receipt and inspection of the item, and funds typically reflect in your bank within 3-5 business days.",
  },
  {
    id: 6,
    question: "How can I become a vendor on the ErrandBox Marketplace?",
    answer:
      "We welcome new vendors! Visit our 'Sell on ErrandBox' page and fill out the vendor application form. Our team will review your application and guide you through the setup process, which includes verifying your business details and listing your first products.",
  },
];

// --- Single FAQ Item ---
const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <motion.div
      className="border-b border-gray-200 p-4 cursor-pointer"
      initial={false}
      animate={{ backgroundColor: isOpen ? "#FFFDFD" : "#FFFFFF" }}
    >
      <div
        className="flex justify-between items-start py-2"
        onClick={toggleOpen}
      >
        <h3 className={`text-lg font-semibold pr-4 ${isOpen ? ACCENT_CLASS : "text-gray-800"}`}>
          {question}
        </h3>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-500 shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isOpen ? ACCENT_CLASS : "text-gray-400"}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-2 pb-4 text-gray-600 leading-relaxed text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main Component ---
export default function ContactD() {
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className="bg-gray-50 py-16 md:py-24"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
            style={{ color: ORANGERED }}
          >
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-lg text-gray-600">
            Everything you need to know about shopping, selling, and support on ErrandBox.
          </p>
        </motion.div>

        {/* FAQ Box */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl border border-gray-200 divide-y divide-gray-100"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              toggleOpen={() => toggleOpen(item.id)}
            />
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="mt-12 text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p className="text-xl font-semibold text-gray-800">
            Still have questions?
          </p>
          <p className="mt-2 text-gray-600">
            Our dedicated support team is ready to help you directly.
          </p>
          <a
            href="mailto:support@errandbox.com"
            className="mt-4 inline-flex items-center justify-center px-8 py-3 rounded-full font-bold uppercase tracking-wider shadow-lg transform hover:scale-[1.02] text-white transition duration-300"
            style={{ backgroundColor: ORANGERED }}
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
