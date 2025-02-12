import React, { useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    company: "Alliance Aviation",
    videoUrl: "/videos/testimony1.mp4",
    quote:
      "Our results and online presence went through the roof more or less overnight, mind-blowing!",
    person: "Malik Shkraba",
    role: "COO of Alliance Aviation",
    logo: "/api/placeholder/120/40",
  },
  {
    id: 2,
    company: "GlowMed",
    videoUrl: "/videos/testimony2.mp4",
    quote:
      "These guys don't mess around. we saw results from month one. If you want to grow your business, look no further.",
    person: "Tony Gomez",
    role: "Founder of GlowMed",
    logo: "/api/placeholder/120/40",
  },
  {
    id: 3,
    company: "Smart Technology",
    videoUrl: "/videos/testimony3.mp4",
    quote:
      "Conversion absolutely blew the previous agency we were working with out of the water.",
    person: "Naomi Campbell",
    role: "CEO of Smart Technology",
    logo: "/api/placeholder/120/40",
  },
  {
    id: 4,
    company: "Roca Viviendas",
    videoUrl: "/videos/testimony4.mp4",
    quote: "Best decision we've made for our business growth strategy.",
    person: "Ana Martínez",
    role: "Marketing Director",
    logo: "/api/placeholder/120/40",
  },
  {
    id: 5,
    company: "Dr. Garay",
    videoUrl: "/videos/testimony5.mp4",
    quote: "The results exceeded our expectations by far.",
    person: "Dr. Carlos Garay",
    role: "Founder",
    logo: "/api/placeholder/120/40",
  },
];

const VideoCard = ({
  company,
  videoUrl,
  quote,
  person,
  role,
  logo,
  isCenter,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full transition-all duration-500 ease-out transform ${
        isCenter ? "opacity-100 scale-100" : "opacity-50 scale-95"
      }`}
    >
      <div
        className={`mx-4 h-[600px] rounded-2xl overflow-hidden backdrop-blur-xl
          bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90
          border-2 border-gray-700/50 shadow-xl
          transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/40 hover:border-[#ffbc00]/30
          ${isHovered ? "translate-y-1" : ""}`}
      >
        <div
          className="relative aspect-video group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src="/api/placeholder/640/360"
            alt={`${company} testimonial`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <button
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              w-20 h-20 flex items-center justify-center bg-[#ffbc00] rounded-full
              transform transition-all duration-300 
              ${
                isHovered
                  ? "scale-110 shadow-lg shadow-yellow-500/20"
                  : "scale-100"
              }
              hover:bg-[#ffbc00]/90 group`}
          >
            <Play
              size={40}
              className="text-black ml-1 transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
            />
          </button>
        </div>

        <div className="p-8 space-y-6 h-[calc(600px-aspect-video)] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="relative h-10 transition-transform duration-300 hover:scale-105">
              <img
                src={logo}
                alt={`${company} logo`}
                className="h-full object-contain"
              />
            </div>

            <div className="relative">
              <span className="absolute -left-2 -top-2 text-4xl text-[#ffbc00]/20">
                "
              </span>
              <p className="text-lg text-gray-200 leading-relaxed pl-4">
                {quote}
              </p>
              <span className="absolute -right-2 bottom-0 text-4xl text-[#ffbc00]/20">
                "
              </span>
            </div>
          </div>

          <div className="border-t border-gray-700/50 pt-6">
            <h4 className="font-medium text-white text-lg tracking-wide">
              {person}
            </h4>
            <p className="text-sm text-gray-400 mt-1 tracking-wider uppercase">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Crear el array infinito duplicando los testimonios
    const extendedSlides = [...testimonials, ...testimonials, ...testimonials];
    setSlides(extendedSlides);
  }, []);

  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const handleSlideChange = (direction) => {
    const slidesPerView = getSlidesPerView();
    const totalSlides = testimonials.length;

    if (direction === "next") {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        // Si llegamos al final del segundo set, saltamos al inicio del segundo set
        if (nextSlide >= totalSlides * 2) {
          return totalSlides;
        }
        return nextSlide;
      });
    } else {
      setCurrentSlide((prev) => {
        const prevSlide = prev - 1;
        // Si llegamos al final del primer set, saltamos al inicio del tercer set
        if (prevSlide < 0) {
          return totalSlides - 1;
        }
        return prevSlide;
      });
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Testimonios de empresas que automatizamos
          </h2>
          <div className="relative w-40 h-1 mx-auto">
            {/* Animated gradient layer */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffbc00]/0 via-[#ffbc00] to-[#ffbc00]/0 animate-shimmer" />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-[#ffbc00] blur-md animate-pulse opacity-10" />
          </div>
        </div>

        {/* Desktop View (3 cards) */}
        <div className="hidden lg:block relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {slides.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="w-1/3 flex-shrink-0"
                >
                  <VideoCard {...testimonial} isCenter={true} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet View (2 cards) */}
        <div className="hidden md:block lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 2)}%)` }}
            >
              {slides.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="w-1/2 flex-shrink-0"
                >
                  <VideoCard {...testimonial} isCenter={true} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View (1 card) */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="w-full flex-shrink-0"
                >
                  <VideoCard {...testimonial} isCenter={true} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons with enhanced styling */}
        <button
          onClick={() => handleSlideChange("prev")}
          className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 
            p-4 rounded-full bg-black/50 text-white border border-gray-700/30
            hover:bg-[#ffbc00] hover:text-black hover:border-transparent
            transition-all duration-300 z-20 group"
        >
          <ChevronLeft
            size={24}
            className="transition-transform group-hover:scale-110"
          />
        </button>
        <button
          onClick={() => handleSlideChange("next")}
          className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 
            p-4 rounded-full bg-black/50 text-white border border-gray-700/30
            hover:bg-[#ffbc00] hover:text-black hover:border-transparent
            transition-all duration-300 z-20 group"
        >
          <ChevronRight
            size={24}
            className="transition-transform group-hover:scale-110"
          />
        </button>

        {/* Enhanced Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(testimonials.length)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index + testimonials.length)}
              className={`h-2 rounded-full transition-all duration-300 
                ${
                  currentSlide % testimonials.length === index
                    ? "w-8 bg-[#ffbc00]"
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
