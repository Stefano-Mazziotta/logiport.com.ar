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
    <header className="flex flex-col gap-5">
      {/* Contenido */}
      <section className="flex flex-col text-left px-2 md:px-10 xl:px-20">
        {/* Título Principal */}
        <h1 className="text-foreground text-4xl font-extrabold mb-4 md:text-6xl lg:text-7xl xl:text-8xl ">
          {title}
          <span className="text-primary">.</span>
        </h1>

        {/* Descripción secundaria con efecto de typing */}
        <p className="text-lg text-primary md:text-xl lg:text-2xl mb-5">
          <TypingEffect
            className="max-w-[800px] inline-block text-foreground/80"
            fixedText="Tu aliado estratégico para lograr la mejor"
            texts={texts}
            dynamicTextClassName="text-primary font-bold"
          />
        </p>

        {/* Botón de acción */}
        <div>
          <Button
            className="bg-foreground text-base text-secondary transition duration-300 py-3 px-6 shadow-md md:text-xl md:rounded-md hover:bg-primary"
            size={"lg"}
          >
            Haz tu consulta ahora
          </Button>
        </div>
      </section>
      <section className="md:px-10 xl:px-20">
        <div className="h-[40vh] bg-hero-img bg-cover bg-center relative flex items-center justify-center md:shadow-xl md:rounded-md xl:h-[66vh]">
          <div className="bg-black bg-opacity-40 absolute inset-0 rounded-md"></div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
