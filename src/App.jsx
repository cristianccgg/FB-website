import React, { useState, useEffect } from "react";
import { ChevronRight, Star, Play, Menu, X } from "lucide-react";
import logo from "/src/assets/logo.png";
import TestimonialsSection from "./components/TestimonialsSection";
import TrustedBrands from "./components/TrustedBrands";
import SeccionOne from "./components/SeccionOne";
import SeccionTwo from "./components/SeccionTwo";
import StartSimple from "./components/StartSimple";
import VideoTestimonials from "./components/VideoTestimonials";
import CTASection from "./components/CTASection";
import AutomationSection from "./components/AutomationSection";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed max-w-4xl top-10 left-1/2 -translate-x-1/2 z-50 
        rounded-2xl border border-gray-700/50 
        bg-gray-800/30 backdrop-blur-xl
        transition-all duration-300 
        hover:border-[#ffbc00]/30 hover:shadow-lg hover:shadow-yellow-500/20"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 gap-5">
          <div className="flex items-center h-20">
            <img src={logo} alt="Logo" className="h-10" />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-[#ffbc00] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-[#ffbc00] transition-colors relative group"
            >
              Inicio
              <div className="absolute inset-x-0 -bottom-1 h-[1px] bg-[#ffbc00]/0 group-hover:bg-[#ffbc00]/50 transition-colors" />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#ffbc00] transition-colors relative group"
            >
              Clientes
              <div className="absolute inset-x-0 -bottom-1 h-[1px] bg-[#ffbc00]/0 group-hover:bg-[#ffbc00]/50 transition-colors" />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#ffbc00] transition-colors relative group"
            >
              Nosotros
              <div className="absolute inset-x-0 -bottom-1 h-[1px] bg-[#ffbc00]/0 group-hover:bg-[#ffbc00]/50 transition-colors" />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#ffbc00] transition-colors relative group"
            >
              Servicios
              <div className="absolute inset-x-0 -bottom-1 h-[1px] bg-[#ffbc00]/0 group-hover:bg-[#ffbc00]/50 transition-colors" />
            </a>
            <button
              className="h-10 px-6 flex items-center justify-center 
                bg-[#ffbc00] rounded-full text-black text-sm text-nowrap font-medium
                transition-all duration-300 transform hover:scale-105
                ring-2 ring-[#ffbc00]/50 hover:ring-[#ffbc00]
                shadow-md shadow-black/40"
            >
              <span className="relative">Reservar una llamada</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 
            ${isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0"} 
            overflow-hidden`}
        >
          <div className="pb-6 space-y-4">
            <a
              href="#"
              className="block text-white hover:text-[#ffbc00] transition-colors py-2 relative group"
            >
              Inicio
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#ffbc00]/0 group-hover:bg-[#ffbc00]/50 transition-colors" />
            </a>
            <a
              href="#"
              className="block text-white hover:text-[#ffbc00] transition-colors py-2 relative group"
            >
              Clientes
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#ffbc00]/0 group-hover:bg-[#ffbc00]/50 transition-colors" />
            </a>
            <a
              href="#"
              className="block text-white hover:text-[#ffbc00] transition-colors py-2 relative group"
            >
              Nosotros
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#ffbc00]/0 group-hover:bg-[#ffbc00]/50 transition-colors" />
            </a>
            <a
              href="#"
              className="block text-white hover:text-[#ffbc00] transition-colors py-2 relative group"
            >
              Servicios
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#ffbc00]/0 group-hover:bg-[#ffbc00]/50 transition-colors" />
            </a>
            <button
              className="w-full h-10 flex items-center justify-center 
                bg-[#ffbc00] rounded-full text-black font-medium
                transition-all duration-300 transform hover:scale-105
                ring-2 ring-[#ffbc00]/50 hover:ring-[#ffbc00]
                shadow-md shadow-black/40 px-2"
            >
              Reservar una llamada
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

<div className="relative w-40 h-1 mx-auto">
  {/* Animated gradient layer */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffbc00]/0 via-[#ffbc00] to-[#ffbc00]/0 animate-shimmer" />

  {/* Glow effect */}
  <div className="absolute inset-0 rounded-full bg-[#ffbc00] blur-md animate-pulse opacity-10" />
</div>;

const VideoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div
          className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden 
          bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 
          transition-all duration-300 hover:border-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Video Thumbnail */}
          <img
            src="/api/placeholder/1280/720"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className={`w-20 h-20 flex items-center justify-center bg-[#ffbc00] rounded-full
              transform transition-all duration-300 z-10
              ${isHovered ? "scale-110" : "scale-100"}
              hover:bg-[#ffbc00]/90 ring-2 ring-[#ffbc00]/50`}
            >
              <Play size={40} className="text-black ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen px-5 bg-black">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <VideoSection />
      <AutomationSection />
      <TrustedBrands />
      <SeccionOne />
      <TestimonialsSection />
      <SeccionTwo />
      <StartSimple />
      <VideoTestimonials />
      <CTASection />
    </div>
  );
};

export default App;
