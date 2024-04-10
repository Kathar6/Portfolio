// Components
import SkillsItem from "./skills-item";

// Types
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
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
    <div className="flex flex-row gap-10 md:gap-12 h-full overflow-x-hidden mx-5">
      {data.map((row, index) => {
        return <SkillsItem key={index} image={row.image} name={row.name} />;
      })}
    </div>
  );
}
