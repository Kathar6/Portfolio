// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function CardHeader({ children }: Props) {
  return (
    <div
      className="
      min-h-16
      grid grid-cols-1 
      justify-items-center sm:justify-items-start 
      grid-rows-[3.5rem_1fr] sm:grid-cols-[3.5rem_1fr] sm:grid-rows-1 
      gap-2 w-full sm:h-14 mb-2"
    >
      {children}
    </div>
  );
}
