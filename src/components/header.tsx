import Link from "next/link";
import MenuMobile from "./menu-button";

export function Header() {
  return (
    <header className="text-principal">
      <nav className="flex justify-between items-center">
        <Link className="z-20" href="/">
          <h1 className="text-3xl uppercase font-bold">Logiport</h1>
        </Link>
        <MenuMobile />
      </nav>

      <div className="hero"></div>
    </header>
  );
}
