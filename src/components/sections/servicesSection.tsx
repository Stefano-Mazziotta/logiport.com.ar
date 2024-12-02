"use server";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Ship,
  ChevronRight,
  LucideProps,
  Presentation,
  ArrowRight,
  Anchor,
  Handshake,
} from "lucide-react";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
}

const ServiceSection: React.FC = async () => {
  const services: Service[] = [
    {
      title: "Capacitaciones",
      description: "Cursos especializados para potenciar tus habilidades.",
      icon: Presentation,
    },
    {
      title: "Prestaciones OPIP",
      description: "Asesoramiento y soluciones integrales OPIP.",
      icon: Anchor,
    },
    {
      title: "Plan de protección",
      description: "Seguridad y respaldo adaptados a tus necesidades.",
      icon: Handshake,
    },
    {
      title: "Consultoría marítima",
      description: "Soluciones estratégicas para el sector marítimo.",
      icon: Ship,
    },
  ];

  return (
    <section
      id="services"
      className="px-4 md:px-10 xl:px-20 pt-10 pb-20 bg-foreground"
    >
      <h2 className="text-secondary text-4xl font-extrabold flex items-center mb-10">
        <ChevronRight size={36} className="text-primary" />
        Servicios
      </h2>
      <main className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative flex flex-col rounded-md shadow-lg bg-gradient-to-tr from-secondary to-primary/20 text-foreground transition-colors ease-linear duration-300 hover:bg-gradient-to-bl hover:from-primary/40 hover:to-secondary border-solid border-2 border-primary"
          >
            <CardHeader className="flex flex-col">
              <service.icon className="w-12 h-12 text-primary" />
              <div className="h-[2px] w-12 bg-primary"></div>
              <CardTitle className="text-xl font-semibold">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 justify-start items-start">
              <CardDescription className="text-sm text-muted-foreground">
                {service.description}
              </CardDescription>
              <Link
                href="#"
                className="relative text-primary flex items-center gap-1 text-sm group"
              >
                Saber más
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                <ArrowRight size={16} />
              </Link>
            </CardContent>
          </Card>
        ))}
      </main>
    </section>
  );
};

export default ServiceSection;
