// Assets
import movilbox from "@assets/movilbox.svg";
import garantias from "@assets/garantias_comunitarias.png";
import sena from "@assets/sena.png";

// Types
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Experience = {
  title: string;
  subtitle: string;
  description: string;
  image: string | StaticImport;
};

export const experienceData: Experience[] = [
  {
    title: "Movilbox",
    subtitle: "Frontend Developer | 11/2021 - Present",
    description: "asdkfjasdlkfj",
    image: movilbox,
  },
  {
    title: "Garantias Comunitarias",
    subtitle: "Software Developer | 10/2021 - 11/2021",
    description: "asdkfjasdlkfj",
    image: garantias,
  },
];

export const educationData: Experience[] = [
  {
    title: "Information Systems Analysis and Development",
    subtitle: "Associate Degree",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    image: sena,
  },
  {
    title: "Technician in Software Development",
    subtitle: "Technical major",
    description: "description",
    image: sena,
  },
];
