
// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function CardBody({ children }: Props) {
  return <div className="card-body flex-1 text-[0.625rem] max-h-full">{children}</div>;
}
