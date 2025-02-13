import { delay, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const DecorativeBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      initial={false}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 0.3 }}
      className="absolute w-200 h-100
        bg-gradient-to-tr from-orange-800 via-yellow-400 to-transparent
        blur-3xl
        bottom-1/3 left-1/2 transform -translate-x-1/2"
    />
  </div>
);

const ProcessStep = ({ number, title, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 500);

    return () => clearTimeout(timer);
  }, [delay]);

  const variants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
      variants={variants}
      transition={{ duration: 0.3, delay: 1 }}
      className="group relative flex items-center space-x-6 p-4
        bg-gray-800/40 border border-gray-700/50
        rounded-2xl overflow-hidden
        hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/20"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-yellow-500/0
          via-yellow-500/5 to-yellow-500/0 opacity-0 group-hover:opacity-100
          transition-opacity duration-300"
      />

      <motion.div
        className="relative flex-shrink-0"
        whileHover={{ scale: prefersReducedMotion ? 1 : 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div
          className="w-8 h-8 flex items-center justify-center
            bg-yellow-500 rounded-xl text-black text-xl font-bold
            ring-2 ring-yellow-500/50 group-hover:ring-yellow-500
            shadow-md shadow-black/40"
        >
          {number}
        </div>
      </motion.div>

      <div className="flex-grow flex items-center justify-between">
        <span
          className="text-white text-xl font-medium
            group-hover:text-yellow-500 transition-colors"
        >
          {title}
        </span>
        <ArrowRight
          className="w-6 h-6 text-gray-500 transform translate-x-4 opacity-0
            group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-yellow-500
            transition-all duration-300"
        />
      </div>
    </motion.div>
  );
};

const AutomationSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeño delay para asegurar que el componente esté montado
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 3,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <div className="relative py-20 bg-black isolate">
      <DecorativeBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
          transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-white ">
            Tu día: proceso de automatización
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="border-5 border-yellow-500/30 bg-gray-800/30 backdrop-blur-xl w-fit px-8 pt-10 mx-auto rounded-3xl overflow-hidden"
        >
          <div className="grid gap-6 max-w-xl md:w-md mx-auto">
            {[
              { number: "1", title: "Bienvenida personalizada" },
              { number: "2", title: "Seguimiento continuo" },
              { number: "3", title: "Reserva de turno" },
              { number: "4", title: "Recordatorio" },
              { number: "5", title: "Finalizado con éxito" },
            ].map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                delay={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.3 }}
            className="text-center my-10"
          >
            <motion.button
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="group relative inline-flex items-center justify-center h-14 px-8
                text-lg font-medium text-black bg-yellow-500 rounded-full
                ring-2 ring-yellow-500/50 hover:ring-yellow-500
                shadow-md shadow-black/40"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-white/20 rounded-full
                  via-transparent to-transparent opacity-0 group-hover:opacity-100
                  transition-opacity duration-300"
              />
              <span className="relative">Reservar una llamada</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AutomationSection;
