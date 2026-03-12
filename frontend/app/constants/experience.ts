// Assets
import movilbox from "@assets/movilbox.svg";
import garantias from "@assets/garantias_comunitarias.png";
import sena from "@assets/sena.png";

// Types
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Experience = {
  id: string,
  data: {
    id: string,
    image: string | StaticImport;
  }[]
};

export const experienceData: Experience = {
  id: "experience",
  data: [
    {
      id: "movilbox",
      image: movilbox,
    },
    {
      id: "garantias",
      image: garantias,
    },
  ]
};

export const educationData: Experience = {
  id: "education",
  data: [
    {
      id: "adsi",
      image: sena,
    },
    {
      id: "media_tecnica",
      image: sena,
    },
  ]
};
