// Components
import CardTimeLine from "./card-timeline";
import ExperienceTimelineItem from "./experience-timeline-item";

// Types
import { StaticImport } from "next/dist/shared/lib/get-img-props";
type ExperienceTimelineData = {
  title: string;
  subtitle?: string;
  description: string;
  image: string | StaticImport;
};

type Props = {
  data: ExperienceTimelineData[];
  alignment: "start" | "end";
};

export default function ExperienceTimeline({ data, alignment }: Props) {
  const className =
    alignment === "start" ? " sm:ps-10 items-start  " : " sm:pe-10 items-end ";
  return (
    <div
      className={
        "relative w-full flex flex-col gap-5 p-0 " +
        className +
        " md:items-stretch sm:py-10 justify-center"
      }
    >
      <CardTimeLine alignment={alignment} />
      {data.map((item, index) => (
        <ExperienceTimelineItem key={index} {...item} alignment={alignment} />
      ))}
    </div>
  );
}
