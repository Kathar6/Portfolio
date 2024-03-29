import Image from "next/image";

// Assets
import github from "@assets/github.svg";

// Styles
import styles from "@styles/project-item.module.css";

// Vendor
import { Link2 } from "lucide-react";

type Props = {};

export default function ProjectItem({}: Props) {
  return (
    <div
      className={`${styles["project-item"]} flex min-w-80 max-w-[25rem] h-[12.5rem] rounded bg-secondary-300`}
    >
      <div className="flex p-5 w-full h-full text-center justify-center items-center text-4xl">
        proyecto de prueba
      </div>
      <div
        className={`${styles["project-item-footer"]} rounded-b bg-secondary-400`}
      >
        <Image src={github} alt="github" width={24} />
        <Link2 size={24} />
      </div>
    </div>
  );
}
