// Styles
import { css } from "@styled-system/css";

// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function TimelineContainer({ children }: Props) {
  return (
    <div
      className={css({
        position: "fixed",
        top: "25%",
        right: "8",
        minH: "30",
      })}
    >
      {children}
    </div>
  );
}
