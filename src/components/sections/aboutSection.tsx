import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        <div className="relative w-full h-[300px] overflow-hidden shadow-md p-10 border-solid border-foreground lg:h-[600px] rounded-md">
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          <Image
            src="/images/Planes_de_proteccion.jpg"
            alt="Amarres de barcos en puertos de Santa Fe"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative">
          <div className="bg-[#1a1332] text-secondary z-20 p-8 rounded-md lg:absolute lg:-left-24 lg:top-1/2 lg:-translate-y-1/2 lg:w-[120%] shadow-2xl">
            <h2 className="text-2xl font-extrabold mb-6 flex items-center md:text-4xl">
              <ChevronRight size={36} className="text-primary" />
              Sobre nosotros
            </h2>
            <div className="space-y-4">
              <p>
                LOGIPORT S.R.L. fundada en junio de 2018 y registrada ante
                Prefectura Naval Argentina, responde a la necesidad de asesorar
                a la comunidad portuaria en protección y gestión de
                instalaciones.
              </p>
              <p>
                Especializados en formación y capacitación según el Código PBIP,
                contamos con amplia experiencia en la protección de buques e
                instalaciones portuarias.
              </p>
            </div>
            <Button
              className="mt-8 bg-white text-[#1a1332] hover:bg-gray-100"
              size="lg"
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
