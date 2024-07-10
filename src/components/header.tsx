import Link from "next/link";
import MenuMobile from "./menu-mobile";
import { MenuDesktop } from "./menu-desktop";
import { Hero } from "./hero";

export function Header() {
  return (
    <header className="text-principal">
      <nav className="sticky flex justify-between items-center p-4">
        <Link className="z-20" href="/">
          <h1 className="text-3xl uppercase font-bold">LOGIPORT</h1>
        </Link>
        <MenuMobile />
        <MenuDesktop />
      </nav>

      <Hero />
    </header>
  );
}
