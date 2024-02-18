// Styles
import { css } from "@styled-system/css";
// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function PageContainer({ children }: Props) {
  return (
    <div
      className={css({
        bg: "secondary.500",
        minH: "lvh",
        p: "20",
        pe: "32",
        scrollSnapAlign: "start",
        fontWeight: "lighter",
        color: "neutral.50",
      })}
    >
      {children}
    </div>
  );
}
