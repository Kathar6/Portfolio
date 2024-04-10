// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function TimelineContainer({ children }: Props) {
  return (
    <div className="hidden sm:block fixed top-1/4 right-4 sm:right-6 min-h-30 z-10">
      {children}
    </div>
  );
}
