import React from "react";
import { motion } from "framer-motion";
import { UsersRound, Sparkles, TrendingUp } from "lucide-react";

const Card = ({ number, title, description, Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3, delay: 1 }}
    className="group relative bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl
      border border-gray-700/50 shadow-xl shadow-black/40
      hover:shadow-yellow-500/20 hover:border-[#ffbc00]/30 h-full"
  >
    {/* Number */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="absolute -top-4 left-8 w-8 h-8 flex items-center justify-center
        bg-[#ffbc00] rounded-full text-black font-bold text-sm"
    >
      {number}
    </motion.div>

    {/* Icon */}
    <motion.div
      className="mb-8"
      whileHover={{ rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon
        size={40}
        className="text-gray-500 group-hover:text-[#ffbc00] transition-colors duration-300"
        strokeWidth={1.5}
      />
    </motion.div>

    {/* Content */}
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white group-hover:text-[#ffbc00] transition-colors">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
        {description}
      </p>
    </div>
  </motion.div>
);

const StartSimple = () => {
  const cards = [
    {
      number: "1",
      title: "Transformamos tu gestión",
      description:
        "Centralizamos y ordenamos tus clientes, tanto los nuevos como los actuales, para que no pierdas ninguna oportunidad.",
      Icon: UsersRound,
    },
    {
      number: "2",
      title: "Automatización sin límites",
      description:
        "Las consultas, los turnos y el seguimiento de clientes se manejan solos, eliminando tareas repetitivas y optimizando la atención.",
      Icon: Sparkles,
    },
    {
      number: "3",
      title: "Más clientes, más ingresos",
      description:
        "Al mejorar la organización y respuesta, aumentás la conversión sin esfuerzo, generando más ventas y fidelizando a tus clientes.",
      Icon: TrendingUp,
    },
  ];

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Comenzar es <span className="italic font-medium">sencillo</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Automatizamos tus operaciones para optimizar y escalar tu negocio.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card
                number={card.number}
                title={card.title}
                description={card.description}
                Icon={card.Icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartSimple;
