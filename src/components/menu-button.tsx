"use client";
// This is a Client Component
import { useState } from "react";
import { MenuIcon } from "./icons/menu-icon";

export default function MenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button className="z-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MenuIcon />
      </button>

      {isMenuOpen && (
        <nav className="absolute top-0 left-0 w-screen h-screen bg-sky-100 z-10 flex justify-center">
          <ul className="flex flex-col justify-start items-center w-full">
            <li className="p-4 border border-black w-full">
              <a href="#services">Our Services</a>
            </li>
            <li className="p-4 w-full">
              <a href="#about">About Us</a>
            </li>
            <li className="p-4 w-full">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
