// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function ScrollContainer({ children }: Props) {
  return (
    <div className="overflow-y-auto overflow-x-hidden snap-y snap-mandatory h-lvh">
      {children}
    </div>
  );
}
