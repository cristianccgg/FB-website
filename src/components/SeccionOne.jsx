const SeccionOne = () => {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Somos un verdadero <br />
            <span className="text-[#ffbc00] font-medium">
              socio para crecer
            </span>
          </h2>
          <hr className="my-8 w-[50%] mx-auto border-t-2 border-gray-600" />
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Hemos ayudado a empresas, consultorios y centros de estética a
            aumentar sus consultas, automatizar su agenda y escalar sus ventas
            sin esfuerzo. Nuestro sistema ya está funcionando en LATAM y USA,
            con clientes que confían en nosotros para optimizar su negocio. ¿Por
            qué? Simplemente porque ofrecemos{" "}
            <span className="text-[#ffbc00] font-medium">
              resultados garantizados
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeccionOne;
