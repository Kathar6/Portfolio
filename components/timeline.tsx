"use client";

// Hooks
import useTimeline from "../hooks/use-timeline";

// Custom Components
import TimelineContainer from "./timeline-container";
import TimelineItem from "./timeline-item";

// Styles
import { vstack } from "@styled-system/patterns";
import { css } from "@styled-system/css";

// Types
type TimelineItem = {
  name: string;
};
type Props = {
  data: TimelineItem[];
  onChange?: (selectedItem: number) => void;
};

export default function Timeline({ data, onChange }: Props) {
  //#region hooks
  const { selectedItem } = useTimeline(onChange);
  //#endregion

  return (
    <TimelineContainer>
      <div
        className={vstack({
          position: "relative",
          alignItems: "end",
          gap: "16",
          h: "full",
        })}
      >
        <div
          className={css({
            position: "absolute",
            top: "0",
            right: "1",
            w: "1",
            h: "full",
            bg: "secondary.400",
          })}
        ></div>
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            name={item.name}
            selected={selectedItem === index}
          />
        ))}
      </div>
    </TimelineContainer>
  );
}
