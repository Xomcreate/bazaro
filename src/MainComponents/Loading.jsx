import React from 'react';
import { motion } from 'framer-motion';
// NOTE: You must use AnimatePresence in the parent component for the exit prop to work!
// import { AnimatePresence, motion } from 'framer-motion'; 

function Loading({ onEnter }) {
  const PRIMARY_ACCENT = "#FF4500"; // Orangered
  const BACKGROUND_COLOR = "#FFFFFF"; // Clean white
  const TEXT_COLOR = "#000000"; // Black

  // 1. Variants for the Expanding Wave/Ring Effect (Pulsating)
  const ringWaveVariants = {
    start: (i) => ({
      scale: 1,
      opacity: 0,
    }),
    expand: (i) => ({
      scale: 2.5,
      opacity: 0,
      transition: {
        duration: 2.0,
        ease: "easeOut",
        repeat: Infinity,
        delay: i * 0.5, 
      },
    }),
  };

  // 2. Variants for the Logo (subtle float/breathing)
  const logoFloatVariants = {
    float: {
        y: [0, -5, 0], 
        rotate: [0, 0.5, -0.5, 0], 
        transition: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
  };

  // 3. Variants for the Scaling/Pulsing Dots (Moved transition outside for clarity)
  const dotScaleVariants = {
    scalePulse: {
      scale: [1, 1.5, 1], // Scales up and then back down
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  // 4. MAIN Content Variants (Crucial addition: 'exit')
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.8, 
            staggerChildren: 0.1 
        } 
    },
    // 🔥 NEW: The 'Sweet' Exit Transition
    exit: { 
        opacity: 0, 
        scale: 0.95, // Slight scale down on exit
        transition: { 
            duration: 0.6, 
            ease: "easeOut" 
        } 
    },
  };

  return (
    // Add the 'exit' prop to the main motion.div
    <motion.div
      className="flex flex-col items-center justify-center h-screen fixed inset-0 z-50"
      style={{ backgroundColor: BACKGROUND_COLOR }}
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit" // This tells Framer Motion how to transition out
    >
      <motion.div
        className="flex flex-col items-center"
      >
        
        {/* Pulsating Logo Container - The Catchy Centerpiece */}
        <div className="relative mb-12 flex items-center justify-center w-40 h-40">
          
          {/* Expanding Wave Rings */}
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              custom={i}
              className="absolute w-28 h-28 rounded-full border-4"
              style={{ borderColor: PRIMARY_ACCENT, opacity: 0 }}
              variants={ringWaveVariants}
              initial="start"
              animate="expand"
            />
          ))}

          {/* Bazaro Logo Image (Centerpiece) */}
          <motion.img
            src="/Images/logo.jpeg"
            alt="Bazaro Logo"
            className="w-24 h-24 rounded-2xl object-cover shadow-2xl relative z-10"
            style={{ border: `4px solid ${TEXT_COLOR}` }} 
            variants={logoFloatVariants}
            animate="float" 
          />
        </div>

        {/* Bazaro Name */}
        <motion.h1
          className="text-6xl font-black mb-2 tracking-wide" 
          style={{ color: PRIMARY_ACCENT }} 
          variants={contentVariants} // Uses default variants for entrance
        >
          BAZARO
        </motion.h1>

        {/* Loading Text */}
        <motion.p
          className="mt-2 text-xl tracking-wider font-medium"
          style={{ color: TEXT_COLOR }} 
          variants={contentVariants} // Uses default variants for entrance
        >
          Where the world shops.
        </motion.p>
        
        {/* Scaling Dot Loader */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: PRIMARY_ACCENT }}
              variants={dotScaleVariants}
              animate="scalePulse"
              // Stagger the delay for a continuous pulse wave effect
              transition={{ ...dotScaleVariants.scalePulse.transition, delay: i * 0.2 }} 
            />
          ))}
        </div>

        {/* Catchy Enter Button */}
        <motion.button
          className="mt-12 px-10 py-4 rounded-full font-extrabold text-white shadow-2xl transition duration-300"
          onClick={onEnter}
          style={{ 
            backgroundColor: PRIMARY_ACCENT, 
            boxShadow: `0 0 20px ${PRIMARY_ACCENT}80` 
          }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: `0 0 30px ${PRIMARY_ACCENT}` 
          }}
          whileTap={{ scale: 0.95 }}
          variants={contentVariants} // Uses default variants for entrance
        >
          START SHOPPING NOW
        </motion.button>

      </motion.div>
    </motion.div>
  );
}

export default Loading;