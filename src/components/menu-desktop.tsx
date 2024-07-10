import { HOME_LINKS } from "@/placeholder-data";
import Link from "next/link";

export function MenuDesktop() {
  return (
    <nav className="hidden md:flex justify-center items-center gap-4">
      {HOME_LINKS.map((link, index) => (
        <Link key={index} href={link.href}>
          {link.text}
        </Link>
      ))}
    </nav>
  );
}
