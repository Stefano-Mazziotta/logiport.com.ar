import React, { useContext, useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { ITEMS_NAVIGATION } from "@/placeholder-data";
import { NavigationContext } from "@/context/navigation-context";

const Navbar = () => {
  const { isOpenSidebar, handleCloseSidebar } = useContext(NavigationContext);

  return (
    <>
      <nav className="sticky top-0 z-40 flex h-20 w-full items-center justify-between border-b-[1px] border-foreground/90 bg-white px-2 md:px-10 xl:px-20">
        <Logo />
        <button
          type="button"
          className="relative flex h-10 w-10 flex-col items-center justify-center md:hidden"
          onClick={handleCloseSidebar}
        >
          <span
            className={`block h-1 w-8 transform bg-foreground transition duration-300 ease-in-out ${
              isOpenSidebar ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`my-1 block h-1 w-8 bg-foreground transition duration-300 ease-in-out ${
              isOpenSidebar ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1 w-8 transform bg-foreground transition duration-300 ease-in-out ${
              isOpenSidebar ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
        <ul className="hidden gap-x-6 text-foreground md:flex">
          {ITEMS_NAVIGATION.map((item, index) => {
            return (
              <li key={index} className="group">
                <Link href={item.href}>
                  <p className="relative inline-block font-medium transition-colors duration-300 group-hover:text-black">
                    {item.text}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
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
