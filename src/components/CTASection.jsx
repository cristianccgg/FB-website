import React from "react";
import { Calendar, Video } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Content */}
          <div
            className="relative rounded-2xl overflow-hidden
            bg-gray-800/50 backdrop-blur-xl hover:shadow-xl  shadow-yellow-500/50 
            border border-[#ffbc00] p-12"
          >
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Title */}
              <h2 className="text-4xl font-bold text-white">
                Consultoría gratuita
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-300 max-w-2xl">
                Agenda una videollamada de diagnóstico y consultoría totalmente
                gratuita. Nuestros especialistas realizarán un diagnóstico y te
                brindarán una evaluación de posibles alternativas para tu plan
                de crecimiento!
              </p>

              {/* Features */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-gray-300">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-[#ffbc00]/10 border border-[#ffbc00]/20"
                  >
                    <Video className="w-5 h-5 text-[#ffbc00]" />
                  </div>
                  <span>Videollamada personalizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-[#ffbc00]/10 border border-[#ffbc00]/20"
                  >
                    <Calendar className="w-5 h-5 text-[#ffbc00]" />
                  </div>
                  <span>Agenda en tu mejor horario</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="group relative inline-flex items-center justify-center px-8 py-4 
                text-lg font-medium text-black bg-[#ffbc00] rounded-full overflow-hidden 
                transition-all duration-300 hover:bg-[#ffc526] active:scale-95
                shadow-lg hover:shadow-[#ffbc00]/50"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 
                  via-transparent to-transparent opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300"
                />
                <span className="relative">Reservar una llamada</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
