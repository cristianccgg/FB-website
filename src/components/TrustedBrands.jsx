import React from "react";

const brands = [
  {
    id: 1,
    name: "Alliance",
    logo: "/logos/AllianceAviation.png",
  },
  {
    id: 2,
    name: "DrGaray",
    logo: "/logos/dr-garay.webp",
  },
  {
    id: 3,
    name: "Exunet",
    logo: "/logos/exunet.png",
  },
  {
    id: 4,
    name: "GlowMed",
    logo: "/logos/GLOWMED.png",
  },
  {
    id: 5,
    name: "Linux",
    logo: "/logos/Linux.webp",
  },
  {
    id: 6,
    name: "MiguelPuga",
    logo: "/logos/MiguelPuga.jpg",
  },
  {
    id: 7,
    name: "RocaViviendas",
    logo: "/logos/roca-viviendas.webp",
  },
  {
    id: 8,
    name: "Smart",
    logo: "/logos/Smart.webp",
  },
  {
    id: 9,
    name: "tourmalhyn",
    logo: "/logos/tourmalhyn.png",
  },
];

const LogoCard = ({ brand, isDuplicate = false }) => (
  <div
    key={isDuplicate ? `${brand.id}-duplicate` : brand.id}
    className="group w-80 h-52 flex-shrink-0 bg-gray-800/30 backdrop-blur-xl 
      rounded-xl p-4 flex items-center justify-center
      border border-gray-700/50 transition-all duration-300
      hover:border-[#ffbc00]/30 hover:shadow-lg hover:shadow-yellow-500/20"
  >
    <img
      src={brand.logo}
      alt={brand.name}
      className="max-w-full max-h-full object-contain
        opacity-50 group-hover:opacity-100 transition-all duration-300
        filter grayscale group-hover:grayscale-0"
    />
  </div>
);

const TrustedBrands = () => {
  return (
    <div className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold text-white text-center">
          Empresas que confiaron <br />
          en nosotros
        </h2>
      </div>

      {/* Contenedor del carrusel */}
      <div className="relative w-full mt-20">
        {/* Gradiente izquierdo */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>

        {/* Gradiente derecho */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Track del carrusel */}
        <div className="flex animate-scroll">
          {/* Primera copia de logos */}
          <div className="flex space-x-12 items-center">
            {brands.map((brand) => (
              <LogoCard key={brand.id} brand={brand} />
            ))}
          </div>

          {/* Segunda copia de logos para el efecto infinito */}
          <div className="flex space-x-12 items-center">
            {brands.map((brand) => (
              <LogoCard
                key={`${brand.id}-duplicate`}
                brand={brand}
                isDuplicate={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
