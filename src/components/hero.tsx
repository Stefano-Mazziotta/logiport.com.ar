import React from "react";
import TypingEffect from "./typingEffect";
import { Button } from "./ui/button";

const Hero: React.FC = async () => {
  // Datos que podrían venir de una API
  const title = "Potenciamos los puertos";
  const texts = ["logística.", "gestión.", "operación."];

  // Divide el título en palabras
  const words = title.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <section className="h-[85vh] bg-hero-img bg-cover bg-center relative flex items-center justify-center">
      {/* Fondo oscuro */}
      <div className="bg-black bg-opacity-85 absolute inset-0"></div>

      {/* Contenido */}
      <div className="text-white relative flex flex-col p-4 text-left">
        {/* Título Principal */}
        <h1 className="text-4xl font-extrabold mb-4 md:text-6xl lg:text-7xl xl:text-8xl text-primary">
          {title}
        </h1>

        {/* Descripción secundaria con efecto de typing */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 text-left mb-8">
          <TypingEffect
            className="min-w-[100px] max-w-[800px] inline-block font-light"
            fixedText="Somos el aliado estratégico para lograr la mejor"
            texts={texts}
            dynamicTextClassName="text-gray-200 font-bold"
          />
        </p>

        {/* Botón de acción */}
        <div>
          <Button
            className="rounded-sm text-secondary bg-primary/60 transition duration-300 text-base md:text-xl py-3 px-6 shadow-md hover:bg-primary/80"
            size={"lg"}
          >
            Contáctanos ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
