"use client";
import { useContext, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import NavigationContextProvider from "@/context/navigation-context";

const Navigation = () => {
  return (
    <NavigationContextProvider>
      <Sidebar />
      <Navbar />
    </NavigationContextProvider>
  );
};

export default Navigation;
