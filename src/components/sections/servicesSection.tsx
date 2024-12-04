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
      className="bg-foreground px-4 pb-20 pt-10 md:px-10 xl:px-20"
    >
      <h2 className="mb-10 flex items-center text-4xl font-extrabold text-secondary">
        <ChevronRight size={36} className="text-primary" />
        Servicios
      </h2>
      <main className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative flex flex-col rounded-md border-2 border-solid border-primary bg-gradient-to-tr from-secondary to-primary/20 text-foreground shadow-lg transition-colors duration-300 ease-linear hover:bg-gradient-to-bl hover:from-primary/40 hover:to-secondary"
          >
            <CardHeader className="flex flex-col">
              <service.icon className="h-12 w-12 text-primary" />
              <div className="h-[2px] w-12 bg-primary"></div>
              <CardTitle className="text-xl font-semibold">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-start justify-start gap-3">
              <CardDescription className="text-sm text-muted-foreground">
                {service.description}
              </CardDescription>
              <Link
                href="#"
                className="group relative flex items-center gap-1 text-sm text-primary"
              >
                Saber más
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
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
