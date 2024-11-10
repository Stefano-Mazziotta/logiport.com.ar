"use client";
import { useEffect, useState } from "react";

function Hero() {
  const [typedText, setTypedText] = useState("");
  const textToType = "v alor, seguridad y confianza.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText((prevText) => {
        // Solo agregamos un nuevo caracter si currentIndex está dentro del rango
        if (currentIndex < textToType.length) {
          return prevText + textToType[currentIndex];
        }
        return prevText;
      });
      currentIndex++;
      if (currentIndex >= textToType.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[85vh] bg-hero-img bg-cover bg-center relative flex items-start justify-start">
      <div className="bg-black bg-opacity-90 absolute inset-0"></div>
      <div className="text-white relative p-5">
        <h1 className="text-4xl md:text-7xl mb-4">
          El <span className="font-bold text-background">puerto</span> necesita,
          <br />
          <span className="font-extrabold text-primary">LOGIPORT</span>.
        </h1>
        <p className="text-xl">Ofrecemos {typedText}</p>
      </div>
    </section>
  );
}

export default Hero;
