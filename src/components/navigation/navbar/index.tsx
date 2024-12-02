import React, { useContext, useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { ITEMS_NAVIGATION } from "@/placeholder-data";
import { NavigationContext } from "@/context/navigation-context";

const Navbar = () => {
  const { isOpenSidebar, handleCloseSidebar } = useContext(NavigationContext);

  return (
    <>
      <nav className="w-full h-20 bg-white sticky top-0 z-40 flex justify-between items-center px-2 md:px-10 xl:px-20 border-b-[1px] border-foreground/90">
        <Logo />
        <button
          type="button"
          className="relative flex flex-col items-center justify-center w-10 h-10 md:hidden"
          onClick={handleCloseSidebar}
        >
          <span
            className={`block w-8 h-1 bg-foreground transform transition duration-300 ease-in-out ${
              isOpenSidebar ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 bg-foreground my-1 transition duration-300 ease-in-out ${
              isOpenSidebar ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-8 h-1 bg-foreground transform transition duration-300 ease-in-out ${
              isOpenSidebar ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
        <ul className="hidden md:flex gap-x-6 text-foreground">
          {ITEMS_NAVIGATION.map((item, index) => {
            return (
              <li key={index} className="group">
                <Link href={item.href}>
                  <p className="relative inline-block group-hover:text-black transition-colors duration-300 font-medium">
                    {item.text}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
