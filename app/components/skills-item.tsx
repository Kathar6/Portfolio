import Image from "next/image";

// Styles
import "@styles/skill-item.css";

// Types
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
type Props = {
  image?: string | StaticImport;
  children?: JSX.Element;
  name: string;
  width?: number;
  height?: number;
  href?: string;
};

export default function SkillsItem({
  image,
  name,
  href,
  children,
  ...props
}: Props) {
  return (
    <div
      className="skill-item 
      cursor-pointer
      min-w-24 min-h-24 
      xl:min-w-28 xl:min-h-28 
      relative overflow-hidden rounded-full 
      bg-gradient-to-b from-secondary-400 from-50% to-primary-500 to-50% bg-[length:100%_200%]"
    >
      <div
        className="flex flex-row justify-center items-center 
          overflow-hidden 
          text-lg w-full h-full 
          transition-[height] duration-300"
      >
        <div className="flex justify-center items-center w-10 h-10 lg:w-[3.75rem] lg:h-[3.75rem]">
          {image && (
            <Image src={image} alt={name} objectFit="fill" {...props} />
          )}
          {children && children}
        </div>
      </div>
      <a
        href={href}
        target="_blank"
        className="flex justify-center items-center overflow-hidden text-xs md:text-lg w-full h-full transition-[height] duration-300"
      >
        {name}
      </a>
    </div>
  );
}
