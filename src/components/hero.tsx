import Link from "next/link";
import React from "react";
import TypingEffect from "./typingEffect";
import ImageBlur from "./ui/blur";
import { Button } from "./ui/button";

const Hero: React.FC = async () => {
  // Datos que podrían venir de una API
  const title = "Potenciamos los ";
  const texts = ["logística.", "gestión.", "operación.", "protección."];

  // Divide el título en palabras
  const words = title.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <header className="flex flex-col gap-5" id="home">
      {/* Contenido */}
      <section className="flex flex-col px-2 text-left md:px-10 xl:px-20">
        {/* Título Principal */}
        <h1 className="mb-4 text-4xl font-extrabold text-foreground md:text-6xl lg:text-7xl xl:text-8xl">
          {title}
          <span className="text-primary">puertos.</span>
        </h1>

        {/* Descripción secundaria con efecto de typing */}
        <p className="mb-5 text-lg text-primary md:text-xl lg:text-2xl">
          <TypingEffect
            className="font-base inline-block max-w-[800px] text-foreground/80"
            fixedText="Tu aliado estratégico para lograr la mejor"
            texts={texts}
            dynamicTextClassName="text-primary font-base"
          />
        </p>

        {/* Botón de acción */}
        <div>
          <Link href={"#contact"}>
            <Button
              className="bg-foreground px-6 py-3 text-base text-secondary shadow-md transition duration-300 hover:bg-primary md:rounded-md md:text-xl"
              size={"lg"}
            >
              Haz tu consulta ahora
            </Button>
          </Link>
        </div>
      </section>
      <section className="md:px-10 xl:px-20">
        <div className="relative flex h-[40vh] items-center justify-center md:rounded-md md:shadow-xl xl:h-[66vh]">
          <ImageBlur
            src="/images/hero.jpg"
            className="h-full w-full bg-center object-cover md:rounded-md"
            alt="Logiport SRL,protección y capacitación marítima."
          />
          <div className="absolute inset-0 rounded-md bg-black bg-opacity-40"></div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
