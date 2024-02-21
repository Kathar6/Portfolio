// Recipes
import cardTimeline from "@component-recipes/card-timeline";

type Props = {
  alignment: "start" | "end";
};

export default function CardTimeLine({ alignment }: Props) {
  return <div className={cardTimeline({ alignment })}>CardTimeLine</div>;
}
