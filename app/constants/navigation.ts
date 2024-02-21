// Types
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Navigation = {
  image: string | StaticImport;
  name: string;
};

export const navigationData: Navigation[] = [
  {
    image: "@assets/chakraui.svg",
    name: "Home",
  },
  {
    image: "@assets/chakraui.svg",
    name: "About",
  },
  {
    image: "",
    name: "Experience",
  },
  {
    image: "",
    name: "Projects",
  },
  {
    image: "",
    name: "Contact",
  },
];
