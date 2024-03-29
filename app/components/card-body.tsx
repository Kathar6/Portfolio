// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function CardBody({ children }: Props) {
  return <div className="text-[0.625rem]">{children}</div>;
}
