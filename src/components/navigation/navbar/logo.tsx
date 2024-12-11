import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Link href="/" className="flex items-center gap-1">
        <Image
          src={"/logo.svg"}
          alt="Logiport"
          className="h-10 w-auto md:h-12 lg:h-16"
          width={100}
          height={100}
        />
        <h1 className="text-3xl font-extrabold text-foreground md:text-4xl">
          LOGIPORT
        </h1>
      </Link>
    </>
  );
};

export default Logo;
