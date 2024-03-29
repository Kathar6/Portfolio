// Components
import Card from "@components/card";
import CardHeader from "@components/card-header";
import CardTitle from "@components/card-title";
import CardLogo from "@components/card-logo";
import CardBody from "@components/card-body";

// Types
import { StaticImport } from "next/dist/shared/lib/get-img-props";
type Props = {
  image: string | StaticImport;
  title: string;
  subtitle?: string;
  description: string;
  alignment: "start" | "end";
};

export default function ExperienceTimelineItem({
  title,
  description,
  image,
  subtitle,
  alignment,
}: Props) {
  return (
    <div className="relative">
      <div
        className={`hidden sm:block absolute size-3 rounded-full bg-secondary-300 top-1/2${alignment === "start" ? " left-[-1.45rem]" : " right-[-1.45rem]"}`}
      />
      <Card>
        <CardHeader>
          <CardLogo src={image} alt="logo" />
          <div>
            <CardTitle>{title}</CardTitle>
            <small>{subtitle}</small>
          </div>
        </CardHeader>
        <CardBody>{description}</CardBody>
      </Card>
    </div>
  );
}
