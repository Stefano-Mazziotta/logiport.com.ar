"use server";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Ship,
  Anchor,
  Handshake,
  Lightbulb,
  ShieldCheck,
  LucideProps,
  ChevronRight,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
}

const ServiceSection: React.FC = async () => {
  const services: Service[] = [
    {
      title: "Servicio 1",
      description: "Descripción del servicio 1",
      icon: Ship,
    },
    {
      title: "Servicio 2",
      description: "Descripción del servicio 2",
      icon: Anchor,
    },
    {
      title: "Servicio 3",
      description: "Descripción del servicio 3",
      icon: Handshake,
    },
    {
      title: "Servicio 4",
      description: "Descripción del servicio 4",
      icon: Lightbulb,
    },
    {
      title: "Servicio 5",
      description: "Descripción del servicio 5",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="services" className="px-2 md:px-10 xl:px-20">
      <h2 className="text-foreground text-3xl font-bold flex mb-4">
        <ChevronRight size={36} className="text-primary" />
        Servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <Card
              key={index}
              className={`flex flex-col items-center justify-center gap-5 p-4 ${
                isOdd
                  ? "bg-foreground text-secondary"
                  : "bg-secondary text-foreground"
              }`}
            >
              <service.icon />
              <Separator
                className={`w-10 ${isOdd ? "bg-foreground" : "bg-secondary"}`}
              />
              <h3>{service.title}</h3>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection;
