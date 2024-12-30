import Image from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export default async function ImageBlur({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const buffer = await fs.readFile(`./public${src}`);

  const { base64 } = await getPlaiceholder(buffer);
  return (
    <Image
      className={className}
      src={src.replace("./public", "")}
      fill
      alt="image"
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}
