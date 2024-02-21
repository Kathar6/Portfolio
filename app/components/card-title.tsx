// Recipes
import cardTitle from "@component-recipes/card-title";

// Types
type Props = {
  children?: string;
};

export default function CardTitle({ children }: Props) {
  return <div className={cardTitle()}>{children}</div>;
}
