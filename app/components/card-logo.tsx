import { ComponentProps } from "react";
import Image from "next/image";

// Recipes
import cardLogo from "@component-recipes/card-logo";

export default function CardLogo(props: ComponentProps<typeof Image>) {
  return <Image className={cardLogo()} {...props} />;
}
