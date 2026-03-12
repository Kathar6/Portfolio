// Assets
import js from "@assets/js.png";
import reactjs from "@assets/reactjs.png";
import nextjs from "@assets/nextjs.svg";
import lerna from "@assets/lerna.png";
import chakraui from "@assets/chakraui.svg";
import tailwind from "@assets/tailwind.png";
import atlassian from "@assets/atlassian.png";
import laravel from "@assets/laravel.svg"
import nodejs from "@assets/nodejs.svg"
import express from "@assets/express-js.png"
import git from "@assets/git.png";

// Types
import { StaticImport } from "next/dist/shared/lib/get-img-props";
type skills = {
  image: string | StaticImport;
  name: string;
};
export const SKILLS: skills[] = [
  {
    image: js,
    name: "JavaScript",
  },
  {
    image: reactjs,
    name: "React.js",
  },
  {
    image: nextjs,
    name: "Next.js",
  },
  {
    image: laravel,
    name: "Laravel"
  },
  {
    image: nodejs,
    name: "Node.js"
  },
  {
    image: express,
    name: "Express.js"
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
    image: git,
    name: "Git",
  },
];
