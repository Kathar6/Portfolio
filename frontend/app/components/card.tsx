// Styles
import "@styles/card.css"

// Types
import type { ReactNode } from "react";
type Props = {
  children?: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="flex flex-col min-w-[40dvw] md:min-w-72 lg:min-w-full max-w-min md:max-w-0 min-h-44 max-h-44 h-fit bg-secondary-400 rounded p-2 overflow-hidden">
      {children}
    </div>
  );
}
