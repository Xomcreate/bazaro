import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Loading({ onEnter }) {
  const PRIMARY_ACCENT = "#FF4500"; // Orangered
  const BACKGROUND_COLOR = "#FFFFFF"; // Clean white
  const TEXT_COLOR = "#000000"; // Black

  // Automatically call onEnter after 3 seconds (3000ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnter();
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, [onEnter]);

  const ringWaveVariants = {
    start: (i) => ({ scale: 1, opacity: 0 }),
    expand: (i) => ({
      scale: 2.5,
      opacity: 0,
      transition: { duration: 2, ease: "easeOut", repeat: Infinity, delay: i * 0.5 },
    }),
  };

  const logoFloatVariants = {
    float: {
      y: [0, -5, 0],
      rotate: [0, 0.5, -0.5, 0],
      transition: { duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
    },
  };

  const dotScaleVariants = {
    scalePulse: {
      scale: [1, 1.5, 1],
      transition: { duration: 0.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen fixed inset-0 z-50"
      style={{ backgroundColor: BACKGROUND_COLOR }}
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="flex flex-col items-center">
        <div className="relative mb-12 flex items-center justify-center w-40 h-40">
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
          <motion.img
            src="/Images/pom1.png"
            alt="Bazaro Logo"
            className="w-24 h-24 rounded-2xl object-cover shadow-2xl relative z-10"
            style={{ border: `4px solid ${TEXT_COLOR}` }}
            variants={logoFloatVariants}
            animate="float"
          />
        </div>

        <motion.h1 className="text-6xl font-black mb-2 tracking-wide" style={{ color: PRIMARY_ACCENT }} variants={contentVariants}>
          ErrandBox
        </motion.h1>

        <motion.p className="mt-2 text-xl tracking-wider font-medium" style={{ color: TEXT_COLOR }} variants={contentVariants}>
          Where the world shops.
        </motion.p>

        <div className="flex items-center justify-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: PRIMARY_ACCENT }}
              variants={dotScaleVariants}
              animate="scalePulse"
              transition={{ ...dotScaleVariants.scalePulse.transition, delay: i * 0.2 }}
            />
          ))}
        </div>

        <motion.button
          className="mt-12 px-10 py-4 rounded-full font-extrabold text-white shadow-2xl transition duration-300"
          onClick={onEnter}
          style={{ backgroundColor: PRIMARY_ACCENT, boxShadow: `0 0 20px ${PRIMARY_ACCENT}80` }}
          whileHover={{ scale: 1.1, boxShadow: `0 0 30px ${PRIMARY_ACCENT}` }}
          whileTap={{ scale: 0.95 }}
          variants={contentVariants}
        >
          START SHOPPING NOW
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Loading;
