// Assets
import html5 from "@assets/html5.png";
import css3 from "@assets/css3.png";
import js from "@assets/js.png";
import reactjs from "@assets/reactjs.png";
import lerna from "@assets/lerna.png";
import chakraui from "@assets/chakraui.svg";
import tailwind from "@assets/tailwind.png";
import atlassian from "@assets/atlassian.png";
import github from "@assets/github.svg";
import git from "@assets/git.png";

// Types
import { StaticImport } from "next/dist/shared/lib/get-img-props";
type skills = {
  image: string | StaticImport;
  name: string;
};
export const SKILLS: skills[] = [
  {
    image: html5,
    name: "HTML5",
  },
  {
    image: css3,
    name: "CSS3",
  },
  {
    image: js,
    name: "JavaScript",
  },
  {
    image: reactjs,
    name: "ReactJs",
  },
  {
    image: lerna,
    name: "Lerna",
  },
  {
    image: chakraui,
    name: "ChakraUI",
  },
  {
    image: tailwind,
    name: "Tailwind",
  },
  {
    image: atlassian,
    name: "Atlassian",
  },
  {
    image: github,
    name: "Github",
  },
  {
    image: git,
    name: "Git",
  },
];
