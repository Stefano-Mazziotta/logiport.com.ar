import React from "react";

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
    <footer className="w-full border-t border-foreground bg-foreground py-4">
      <div className="container mx-auto text-center text-sm text-secondary">
        <span>© 2025 LOGIPORT SRL - Todos los derechos reservados.</span>
        <div className="mt-2 text-xs text-muted-foreground">
          <span>Sitio web desarrollado por </span>
          <a
            href="https://www.linkedin.com/in/stefanomazziotta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Stefano Mazziotta
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
