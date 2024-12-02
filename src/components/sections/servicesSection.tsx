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
  ShieldCheck,
  ChevronRight,
  LucideProps,
  PersonStanding,
  Presentation,
  ArrowRight,
} from "lucide-react";

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
      icon: PersonStanding,
    },
    {
      title: "Plan de protección",
      description: "Seguridad y respaldo adaptados a tus necesidades.",
      icon: ShieldCheck,
    },
    {
      title: "Consultoría marítima",
      description: "Soluciones estratégicas para el sector marítimo.",
      icon: Ship,
    },
  ];

  return (
    <section id="services" className="px-4 md:px-10 xl:px-20 py-10">
      <h2 className="text-foreground text-4xl font-extrabold flex items-center mb-8">
        <ChevronRight size={36} className="text-primary mr-2" />
        Servicios
      </h2>
      <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-gradient-to-tr from-secondary to-primary/20 text-foreground transition-colors ease-linear duration-300 hover:bg-gradient-to-bl hover:from-primary/40 hover:to-secondary"
          >
            <CardHeader className="flex flex-col items-center gap-1">
              <service.icon className="w-12 h-12 text-primary" />
              <div className="h-[2px] w-12 bg-primary"></div>
              <CardTitle className="text-xl font-semibold">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-sm text-muted-foreground">
                {service.description}
              </CardDescription>
            </CardContent>
            <a
              href="#"
              className="bottom-4 text-primary flex items-center gap-1 text-sm hover:text-primary/80 transition-colors"
            >
              Saber más <ArrowRight size={16} />
            </a>
          </Card>
        ))}
      </main>
    </section>
  );
};

export default ServiceSection;
