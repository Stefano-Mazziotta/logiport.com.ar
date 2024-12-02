import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        <div className="relative w-full h-[300px] overflow-hidden shadow-md p-10 border-solid border-foreground lg:h-[600px] rounded-md">
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          <Image
            src="/images/Planes_de_proteccion.jpg"
            alt="Amarres de barcos en puertos de Santa Fe"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative">
          <div className="bg-[#1a1332] z-20 text-white p-8 rounded-md lg:absolute lg:-left-24 lg:top-1/2 lg:-translate-y-1/2 lg:w-[120%] shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <ChevronRight />
              About us
            </h2>
            <div className="space-y-4">
              <p className="text-gray-200">
                For more than 30 years we have been delivering world-class
                construction and we&apos;ve built many lasting relationships
                along the way.
              </p>
              <p className="text-gray-200">
                We&apos;ve matured into an industry leader and trusted resource
                for those seeking quality, innovation and reliability when
                building in the U.S.
              </p>
            </div>
            <Button
              className="mt-8 bg-white text-[#1a1332] hover:bg-gray-100"
              size="lg"
            >
              More on Our History
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
