import React, { useContext, useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { ITEMS_NAVIGATION } from "@/placeholder-data";
import { NavigationContext } from "@/context/navigation-context";

const Navbar = () => {
  const { isOpenSidebar, handleCloseSidebar } = useContext(NavigationContext);

  return (
    <>
      <div className="w-full h-20 bg-white sticky top-0 z-20">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="relative flex flex-col items-center justify-center w-10 h-10 md:hidden"
              onClick={handleCloseSidebar}
            >
              <span
                className={`block w-8 h-1 bg-primary transform transition duration-300 ease-in-out ${
                  isOpenSidebar ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-8 h-1 bg-primary my-1 transition duration-300 ease-in-out ${
                  isOpenSidebar ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-8 h-1 bg-primary transform transition duration-300 ease-in-out ${
                  isOpenSidebar ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
            <ul className="hidden md:flex gap-x-6 text-primary">
              {ITEMS_NAVIGATION.map((item, index) => {
                return (
                  <li key={index} className="group">
                    <Link href={item.href}>
                      <p className="relative inline-block text-primary group-hover:text-black transition-colors duration-300 font-medium">
                        {item.text}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
