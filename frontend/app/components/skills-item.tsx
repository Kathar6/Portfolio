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
      w-16 h-16 
      sm:w-20 sm:h-20
      md:w-24 md:h-24
      lg:w-28 lg:h-28
      xl:w-32 xl:h-32
      relative overflow-hidden rounded-full 
      bg-gradient-to-b from-secondary-400 from-50% to-primary-500 to-50% bg-[length:100%_200%]"
    >
      <div
        className="flex flex-row justify-center items-center 
          overflow-hidden 
          text-lg w-full h-full 
          transition-[height] duration-300"
      >
        <div
          className="
          flex 
          justify-center items-center 
          w-8 h-8 
          sm:w-10 sm:h-10
          md:w-12 md:h-12
          lg:w-14 lg:h-14 
          xl:w-16 xl:h-16
        "
        >
          {image && (
            <Image src={image} alt={name} {...props} />
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
