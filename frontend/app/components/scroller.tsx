// Styles
import "@styles/scroller.css";

// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function Scroller({ children }: Props) {
  return (
    <div className="scroller">
      <div>{children}</div>
      <div className="copy">{children}</div>
    </div>
  );
}
