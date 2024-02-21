// Recipes
import cardBody from "@component-recipes/card-body";

// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function CardBody({ children }: Props) {
  return <div className={cardBody()}>{children}</div>;
}
