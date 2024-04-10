import { ComponentProps } from "react";
import Image from "next/image";

export default function CardLogo({ src, alt }: ComponentProps<typeof Image>) {
  return (
    <div className="flex justify-center items-center min-w-14 min-h-14 sm:w-full sm:h-full bg-secondary-300 rounded-md max-w-14 max-h-14 p-0.5">
      <Image src={src} alt={alt} objectFit="contain" />
    </div>
  );
}
