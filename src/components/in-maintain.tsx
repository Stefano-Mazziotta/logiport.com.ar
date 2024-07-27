import Image from "next/image";

export function InMantain() {
  return (
    <section className="h-screen w-screen flex flex-col items-center gap-20 p-2">
      <Image
        src={"/images/logo-logiport-rgb.png"}
        width={370}
        height={250}
        alt="logiport"
      />
      <div>
        <h1 className="font-bold text-2xl">Sitio web en mantenimiento!</h1>
        <p className="text-xl">
          <a href="/">logiport.com.ar</a> estará disponible proximamente.
        </p>
      </div>
    </section>
  );
}
