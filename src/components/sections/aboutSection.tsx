import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="relative mx-auto w-full max-w-6xl px-4">
      <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-2">
        <div className="relative h-[300px] w-full overflow-hidden rounded-md border-solid border-foreground p-10 shadow-md lg:h-[600px]">
          <div className="absolute inset-0 z-10 bg-black opacity-30"></div>
          <Image
            src="/images/Quienes-somos-img.jpg"
            alt="Amarres de barcos en puertos de Santa Fe"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative">
          <div className="z-20 rounded-md bg-foreground p-8 text-secondary shadow-2xl lg:absolute lg:-left-24 lg:top-1/2 lg:w-[120%] lg:-translate-y-1/2">
            <h2 className="mb-6 flex items-center text-2xl font-extrabold md:text-4xl lg:text-6xl">
              <ChevronRight size={24} className="text-primary" />
              Sobre nosotros
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                LOGIPORT S.R.L. fundada en junio de 2018 y registrada ante
                Prefectura Naval Argentina, responde a la necesidad de asesorar
                a la comunidad portuaria en protección y gestión de
                instalaciones.
              </p>
              <p>
                Especializados en formación y capacitación según el Código PBIP,
                contamos con amplia experiencia en la protección de buques e
                instalaciones portuarias.
              </p>
            </div>
            <Link href="#contact">
              <Button
                className="mt-8 bg-secondary text-foreground hover:bg-primary hover:text-secondary"
                size="lg"
              >
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
