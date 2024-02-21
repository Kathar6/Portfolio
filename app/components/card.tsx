// Recipes
import card from "@component-recipes/card";
// Types
import type { ReactNode } from "react";
type Props = {
  children?: ReactNode;
};

export default function Card({ children }: Props) {
  return <div className={card()}>{children}</div>;
}
