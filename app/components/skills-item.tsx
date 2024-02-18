import Image from "next/image";

// Styles
import { circle } from "@styled-system/patterns";
// Types
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
type Props = {
  image: string | StaticImport;
  name: string;
};

export default function SkillsItem({ image, name }: Props) {
  return (
    <div className={circle({ size: "24", bg: "secondary.400" })}>
      <Image src={image} alt={name} />
    </div>
  );
}
