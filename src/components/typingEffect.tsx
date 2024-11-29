"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  texts: string[];
  className: string;
  fixedText: string; // Nueva propiedad
  dynamicTextClassName: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  className,
  fixedText,
  dynamicTextClassName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && currentIndex < texts[currentTextIndex].length) {
      const typingInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearInterval(typingInterval);
    } else if (isDeleting && currentIndex > 0) {
      const deletingInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }, 50);

      return () => clearInterval(deletingInterval);
    } else if (!isDeleting && currentIndex === texts[currentTextIndex].length) {
      const nextTextTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);

      return () => clearTimeout(nextTextTimeout);
    } else if (isDeleting && currentIndex === 0) {
      const nextTextTimeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 500);

      return () => clearTimeout(nextTextTimeout);
    }
  }, [currentIndex, currentTextIndex, isDeleting, texts]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  if (texts.length === 0) {
    return null;
  }

  return (
    <span className={`inline-block ${className}`} style={{ minWidth: "100px" }}>
      {fixedText}{" "}
      <span className={dynamicTextClassName}>
        {texts[currentTextIndex].slice(0, currentIndex)}
      </span>
      <span className={`ml-1 ${isCursorVisible ? "opacity-100" : "opacity-0"}`}>
        |
      </span>
    </span>
  );
};

export default TypingEffect;
