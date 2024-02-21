import Image from "next/image";

// Recipes
import { skillItem, skillItemChild } from "@component-recipes/skill-item";

// Types
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
type Props = {
  image: string | StaticImport;
  name: string;
};

export default function SkillsItem({ image, name }: Props) {
  return (
    <div className={skillItem({})}>
      <div className={skillItemChild({})}>
        <Image src={image} alt={name} width="60" height="60" />
      </div>
      <span className={skillItemChild({})}>{name}</span>
    </div>
  );
}
