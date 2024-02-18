import React from "react";

// Styles
import { css } from "@styled-system/css";

// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function ScrollContainer({ children }: Props) {
  return (
    <div
      className={css({
        overflowY: "auto",
        overflowX: "hidden",
        scrollSnapType: "y mandatory",
        h: "lvh",
      })}
    >
      {children}
    </div>
  );
}
