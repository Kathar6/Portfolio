import { Fragment } from "react";
// Styles
import { circle, hstack } from "@styled-system/patterns";
import { css } from "@styled-system/css";

// Types
type Props = {
  name: string;
  value: number;
  selected: boolean;
  onSelect: (index: number) => void;
};

export default function TimelineItem({
  name,
  value,
  selected,
  onSelect,
}: Props) {
  return (
    <div
      className={hstack({
        justifyContent: "end",
        color: selected ? "primary.500" : "neutral.50",
        fontSize: "sm",
      })}
      onClick={(event) => onSelect(value)}
    >
      <span className={css({ me: "1", cursor: "pointer" })}>{name}</span>
      <div
        className={circle({
          size: "13px",
          zIndex: "100",
          cursor: "pointer",
          bg: selected ? "primary.500" : "secondary.300",
        })}
        onClick={(event) => onSelect(value)}
      />
    </div>
  );
}
