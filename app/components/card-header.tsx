// Recipes
import cardHeader from "@component-recipes/card-header";

// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function CardHeader({ children }: Props) {
  return <div className={cardHeader()}>{children}</div>;
}
