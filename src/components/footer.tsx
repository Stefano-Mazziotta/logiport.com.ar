import { Anchor, Mail, Phone } from "lucide-react";
import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contactanos", label: "Contáctanos" },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-b border-t-[1px] border-foreground">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 234 567 890</span>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@logiport.com</span>
            </span>
          </div>
          <div className="hidden md:block">
            Horario: Lun - Vie: 9:00 AM - 6:00 PM
          </div>
        </div>

        {/* Main navbar */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Anchor className="h-8 w-8" />
            <span className="text-2xl font-bold">LOGIPORT</span>
          </div>
          <ul className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="rounded bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90">
            Cotizar
          </button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
