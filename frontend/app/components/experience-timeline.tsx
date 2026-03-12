// Components
import CardTimeLine from "./card-timeline";
import ExperienceTimelineItem from "./experience-timeline-item";

// Vendor
import { useTranslations } from "next-intl";

// Types
import { StaticImport } from "next/dist/shared/lib/get-img-props";
type ExperienceTimelineData = {
  id: string;
  data: {
    id: string,
    image: string | StaticImport
  }[]
};

type Props = {
  data: ExperienceTimelineData;
  alignment: "start" | "end";
};

export default function ExperienceTimeline({ data, alignment }: Props) {
  //#region hooks
  const t = useTranslations('experience')
  //#endregion
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
      {data.data.map((item, index) => {
        const translatedItem = t.raw(`${data.id}.${item.id}`)
        const experienceData = { ...translatedItem, image: item.image }
        return <ExperienceTimelineItem key={index} {...experienceData} alignment={alignment} />
      })}
    </div>
  );
}
