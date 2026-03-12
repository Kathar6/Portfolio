"use client";

import { useTranslations } from "next-intl";
// Hooks
import useTimeline from "../hooks/use-timeline";

// Custom Components
import TimelineContainer from "./timeline-container";
import TimelineItem from "./timeline-item";

// Types
type TimelineItem = {
  id: string;
};
type Props = {
  data: TimelineItem[];
  onChange?: (selectedItem: number) => void;
};

function Line() {
  return (
    <div className="absolute top-0 right-1 w-1 h-full rounded bg-secondary-400"></div>
  );
}

export default function Timeline({ data, onChange }: Props) {
  //#region hooks
  const { selectedItem, onSelectItem } = useTimeline(onChange);
  const t = useTranslations('timeline')
  //#endregion

  return (
    <TimelineContainer>
      <div className="flex flex-col relative items-end gap-16 py-14 h-full">
        <Line />
        {data.map((item, index) => {
          const text = t(item.id)
          return (
            <TimelineItem
              key={index}
              name={text}
              value={index}
              selected={selectedItem === index}
              onSelect={onSelectItem}
            />
          )
        })}
      </div>
    </TimelineContainer>
  );
}
