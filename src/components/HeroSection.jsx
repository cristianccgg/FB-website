import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const wordArray = "IA".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const fadeUpVariants2 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 2,
        ease: "easeOut",
      },
    },
  };

  const sevenDaysVariants = {
    hidden: {
      opacity: 0,
      scaleX: 0,
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-48 pb-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl mx-auto max-w-2xl font-bold text-white leading-tight"
            variants={fadeUpVariants}
          >
            <motion.span className="block mb-4 pe-4">
              Ventas y agendas automatizadas con
              <motion.div
                className="relative inline-flex flex-wrap justify-center gap-x-4"
                variants={wordContainerVariants}
              >
                {wordArray.map((word, wordIndex) => (
                  <div key={wordIndex} className="relative ps-4">
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={letterIndex}
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </motion.div>
            </motion.span>
            <div className="relative mt-6">
              <motion.div
                className="relative inline-block"
                initial="hidden"
                animate="visible"
                variants={sevenDaysVariants}
                style={{ originX: 0.5 }}
              >
                <span className="italic font-medium relative pb-8 inline-block">
                  en solo 7 días
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-full h-[4px] bg-gradient-to-r from-transparent via-[#ffbc00] to-transparent opacity-80"
                  />
                </span>
              </motion.div>
            </div>
          </motion.h1>
          <motion.p
            variants={fadeUpVariants2}
            className="text-xl text-gray-300"
          >
            Organizamos, automatizamos y garantizamos resultados medibles
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
