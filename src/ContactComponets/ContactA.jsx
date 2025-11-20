import React from "react";
import { motion } from "framer-motion";

// Custom SVG for a 'Help Desk' or 'Contact' theme, using brand colors
const ContactSVG = () => {
  const orangered = "#FF4500";
  const darkGray = "#1F2937"; // Tailwind gray-800 equivalent for black contrast
  const white = "#FFFFFF";

  const messageBounce = {
    y: ["-10%", "10%", "-10%"],
    transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
  };
  
  const envelopeWiggle = {
    rotate: [0, 1.5, -1.5, 0],
    transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className="max-w-xs md:max-w-sm h-auto"
      fill="none"
      role="img"
      aria-label="Animated Customer Support Illustration"
    >
      {/* Background Sphere/Halo (Subtle Black) */}
      <motion.circle
        cx="250"
        cy="250"
        r="240"
        fill={darkGray}
        opacity="0.05"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Main Support/Headset Icon (Orangered) */}
      <motion.g 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      >
        {/* Head Shape (Black) */}
        <circle cx="250" cy="270" r="120" fill={darkGray} />
        
        {/* Headset Mic (Orangered) */}
        <path d="M210 270 L190 310 C180 320, 170 320, 160 310 L150 270 L140 270" stroke={orangered} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Headset Arc (Orangered) */}
        <path d="M190 180 C230 140, 310 140, 350 180" stroke={orangered} strokeWidth="15" strokeLinecap="round" fill="none" />
        
        {/* Eye Blinks (White) - Simple animation for life */}
        <motion.circle 
          cx="220" 
          cy="250" 
          r="10" 
          fill={white} 
          animate={{ opacity: [1, 1, 0, 1] }} 
          transition={{ repeat: Infinity, duration: 5, times: [0, 0.9, 0.95, 1] }}
        />
        <motion.circle 
          cx="280" 
          cy="250" 
          r="10" 
          fill={white} 
          animate={{ opacity: [1, 1, 0, 1] }} 
          transition={{ repeat: Infinity, duration: 5, times: [0, 0.9, 0.95, 1] }}
        />
      </motion.g>

      {/* Floating Message Bubble (Animated) */}
      <motion.g 
        transform="translate(350, 150)"
        animate={messageBounce}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* Bubble */}
        <rect x="0" y="0" width="120" height="70" rx="15" fill={orangered} />
        {/* Text lines (White) */}
        <rect x="15" y="20" width="90" height="8" rx="4" fill={white} />
        <rect x="15" y="45" width="60" height="8" rx="4" fill={white} />
      </motion.g>

      {/* Floating Envelope (Animated) */}
      <motion.g 
        transform="translate(80, 100)"
        animate={envelopeWiggle}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <rect x="0" y="0" width="100" height="70" rx="10" fill={white} stroke={darkGray} strokeWidth="4" />
        <path d="M0 0 L50 40 L100 0" stroke={darkGray} strokeWidth="4" fill="none" />
        <path d="M5 65 L50 35 L95 65" stroke={orangered} strokeWidth="2" fill={orangered} />
      </motion.g>
    </motion.svg>
  );
};


// Main Component
export default function ContactA() {
  const orangered = "#FF4500";

  return (
    <section className="relative bg-white min-h-[70vh] flex items-center overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-12 w-full">
        
        {/* Left Text Section */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ y: 15 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Your support, <span style={{ color: orangered }}>effortless.</span>
          </motion.h1>

          <motion.p
            className="text-gray-700 text-lg md:text-xl max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Whether it's an order query, a payment issue, or setting up your shop, our friendly, dedicated team is here around the clock to ensure you move faster and shop smarter.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <motion.a
              href="mailto:support@bazaro.com"
              aria-label="Contact Bazaro support"
              className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-3 rounded-full shadow-xl font-semibold transition duration-300 transform"
              style={{ 
                border: `2px solid ${orangered}`, 
                background: `linear-gradient(to right, ${orangered}, ${orangered} 50%, #000 50%)`, 
                backgroundSize: '200% 100%',
                backgroundPosition: '100% 0',
              }}
              whileHover={{ 
                scale: 1.05, 
                backgroundPosition: '0 0',
                color: 'white',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Conversation
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </motion.a>

            {/* subtle secondary action */}
            <motion.button
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-900 bg-white font-medium shadow-md transition duration-300"
              whileHover={{ borderColor: orangered, color: orangered }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                // Example of where you might route to a FAQ page or open a help widget
                console.log("Navigating to Help Center...");
              }}
            >
              Browse Help Center
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Illustration (Animated SVG) */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end min-w-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <ContactSVG />
        </motion.div>
      </div>

      {/* Decorative pulse effect in the background */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl -z-10"
        style={{ background: orangered }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
    </section>
  );
}