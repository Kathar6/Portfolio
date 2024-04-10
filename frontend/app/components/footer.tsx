"use client";

import useScroll from "@hooks/use-scroll";
// Styles
import "@styles/footer.css";

// Vendor
import { ChevronsDown } from "lucide-react";

// Types
type Props = {};

export default function Footer({}: Props) {
  //#region hooks
  const { scrollNextPage } = useScroll();
  //#endregion

  return (
    <div
      className="footer
      cursor-pointer
      flex gap-2
      absolute bottom-0 left-0
      w-full h-[2.813rem]
      justify-center items-center
      bg-gradient-to-b from-transparent from-50% to-primary-500 to-50% bg-[length:100%_200%]
      "
      onClick={scrollNextPage}
    >
      <ChevronsDown />
    </div>
  );
}
