import Link from "next/link";
import { MenuIcon } from "./icons/menu-icon";

export function Header() {
  return (
    <header className="bg-principal text-white">
      <nav>
        <Link href="/">
          <h1 className="logo">Logiport</h1>
        </Link>

        <MenuIcon />
      </nav>

      <div className="hero"></div>
    </header>
  );
}
