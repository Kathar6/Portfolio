// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function ModalBody({ children }: Props) {
  return <div className="rounded-b-md">{children}</div>;
}
