import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ina - GlowMed",
    text: "Automatizamos la gestión de consultas y turnos, pero lo mejor es que seguimos brindando una atención cercana y personalizada.",
  },
  {
    name: "Agustin - Grupo max",
    text: "No solo organizamos mejor el negocio con automatización, sino que también mejoramos la experiencia del cliente. Ahora respondemos rápido sin perder el toque personal.",
  },
  {
    name: "Toti Smart parts",
    text: "No solo nos ayudaron a organizar y automatizar todo, sino que nos acompañaron en cada paso. Son personas cercanas y realmente comprometidas.",
  },
  {
    name: "Leo - Smart Technology",
    text: "Automatizamos procesos, pero lo mejor fue conocer a un equipo que realmente se preocupa por nuestro negocio y nos brinda un trato humano.",
  },
];

const TestimonialCard = ({ name, text }) => (
  <div
    className="h-full bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl shadow-xl shadow-black/40 
    border border-gray-700/50 transform transition-all duration-300 hover:scale-105 
    hover:shadow-yellow-500/20 hover:border-[#ffbc00]/30 group mx-4"
  >
    <div className="flex items-center space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="text-[#ffbc00] fill-[#ffbc00]" />
      ))}
    </div>
    <p className="text-gray-300 mb-6 text-lg italic group-hover:text-white transition-colors">
      {text}
    </p>
    <p className="text-white font-medium">{name}</p>
  </div>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Crear un array con testimonios duplicados para el efecto infinito
  const extendedTestimonials = [...testimonials, ...testimonials];
  const maxIndex = testimonials.length;

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth >= 768 ? 2 : 1);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, currentIndex]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsAutoPlaying(false);
    setIsTransitioning(true);

    if (currentIndex === 0) {
      setCurrentIndex(maxIndex - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }

    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentIndex >= maxIndex - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }

    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Lo que dicen nuestros clientes
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl py-8 -my-8">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsToShow)
                }%)`,
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 flex-shrink-0 px-4"
                  style={{
                    opacity: isTransitioning ? 0.5 : 1,
                    transition: "opacity 0.3s",
                  }}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full
              bg-gray-800/50 text-white hover:bg-[#ffbc00] hover:text-black transition-all duration-300
              backdrop-blur-xl border border-gray-700/50 hover:border-[#ffbc00]
              shadow-lg hover:shadow-yellow-500/20"
            aria-label="Previous testimonial"
            disabled={isTransitioning}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full
              bg-gray-800/50 text-white hover:bg-[#ffbc00] hover:text-black transition-all duration-300
              backdrop-blur-xl border border-gray-700/50 hover:border-[#ffbc00]
              shadow-lg hover:shadow-yellow-500/20"
            aria-label="Next testimonial"
            disabled={isTransitioning}
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center space-x-2 mt-8">
            {[...Array(maxIndex)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isTransitioning) return;
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-3 rounded-full transition-all duration-300 
                  ${
                    index === currentIndex % maxIndex
                      ? "w-8 bg-[#ffbc00]"
                      : "w-3 bg-gray-600 hover:bg-gray-500"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
