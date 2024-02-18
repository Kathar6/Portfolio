import { hstack } from "@styled-system/patterns";

// Types
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import SkillsItem from "./skills-item";
type SkillData = {
  image: string | StaticImport;
  name: string;
};
type Props = {
  data: SkillData[];
};

export default function SkillsList({ data }: Props) {
  if (!data || !data.length) return null;

  return (
    <div
      className={hstack({
        gap: "12",
        flexWrap: "wrap",
      })}
    >
      {data.map((row, index) => (
        <SkillsItem key={index} image={row.image} name={row.name} />
      ))}
    </div>
  );
}
