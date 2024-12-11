import { Link } from "lucide-react";
import Image from "next/image";

export function InMantain() {
  return (
    <section className="flex h-screen w-screen flex-col items-center gap-20 p-2">
      <Image
        src={"/images/logo-logiport-rgb.png"}
        width={370}
        height={250}
        alt="logiport"
      />
      <div>
        <h1 className="text-2xl font-bold">Sitio web en mantenimiento!</h1>
        <p className="text-xl">
          <Link href="/">logiport.com.ar</Link> estará disponible proximamente.
        </p>
      </div>
    </section>
  );
}
