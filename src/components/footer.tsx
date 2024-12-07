import { Anchor, Mail, Phone } from "lucide-react";

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
    <footer className="w-full border-b border-t-[1px] border-foreground bg-foreground">
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

        <div className="flex items-center gap-2">
          <Anchor className="h-8 w-8" />
          <span className="text-2xl font-bold">LOGIPORT</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
