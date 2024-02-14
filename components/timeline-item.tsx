import { Fragment } from "react";
// Styles
import { circle, hstack } from "@styled-system/patterns";
import { css } from "@styled-system/css";

// Types
type Props = {
  name: string;
  selected: boolean;
};

export default function TimelineItem({ name, selected }: Props) {
  return (
    <div
      className={hstack({
        justifyContent: "end",
        color: selected ? "primary.500" : "neutral.50",
        fontSize: "sm",
      })}
    >
      <span className={css({ me: "1" })}>{name}</span>
      <div
        className={circle({
          size: "13",
          cursor: "pointer",
          bg: selected ? "primary.500" : "secondary.300",
        })}
      />
    </div>
  );
}
