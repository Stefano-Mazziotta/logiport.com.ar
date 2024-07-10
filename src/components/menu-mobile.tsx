"use client";
// This is a Client Component
import { useState } from "react";
import { MenuIcon } from "./icons/menu-icon";
import Link from "next/link";
import { HOME_LINKS } from "@/placeholder-data";

export default function MenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="md:hidden">
      <button className="relative z-20" onClick={handleClick}>
        <MenuIcon />
      </button>

      {isMenuOpen && (
        <nav className="fixed top-0 left-0 w-screen h-screen bg-sky-100 z-10 flex justify-center">
          <ul className="flex flex-col w-full absolute top-20 gap-1">
            {HOME_LINKS.map((link, index) => (
              <li key={index} className="flex justify-start items-start">
                <Link
                  className="w-full p-4 border border-black"
                  href={link.href}
                  onClick={handleClick}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
