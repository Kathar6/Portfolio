"use client";

import useScroll from "@hooks/use-scroll";
// Styles
import "@styles/footer.css";

// Vendor
import { ChevronsDown } from "lucide-react";
import { useTranslations } from "next-intl";

// Types
type Props = {};

export default function Footer({ }: Props) {
  //#region hooks
  const { scrollPageTo } = useScroll();
  const t = useTranslations('contact')
  //#endregion

  return (
    <div
      className="footer
      z-99
      cursor-pointer
      flex gap-2
      absolute bottom-0 left-0
      w-full h-[2.813rem]
      justify-center items-center
      bg-gradient-to-b from-transparent from-50% to-primary-500 to-50% bg-[length:100%_200%]
      "
      onClick={() => scrollPageTo(4)}
    >
      {t('title')}
      <ChevronsDown />
    </div>
  );
}
