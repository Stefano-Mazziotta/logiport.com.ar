"use client";
import { useEffect, useState } from "react";

function Hero () {
  const [typedText, setTypedText] = useState("");
  const textToType = "Logistics solutions for your business";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText((prevText) => prevText + textToType[currentIndex]);
      currentIndex++;
      if (currentIndex === textToType.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[85vh] bg-hero-img bg-cover bg-center relative flex items-center justify-center">
      <div className="bg-black bg-opacity-80 absolute inset-0"></div>
      <div className="text-white text-center relative">
        <h1 className="text-4xl font-bold mb-4">Proteger es nuestra misión</h1>
        <p className="text-xl">{typedText}</p>
      </div>
    </section>
  );
}

export default Hero;
