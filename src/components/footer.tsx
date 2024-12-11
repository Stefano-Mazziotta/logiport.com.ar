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
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <span>Derechos reservados Logiport 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
