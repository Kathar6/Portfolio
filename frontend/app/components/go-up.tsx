"use client";

// Hooks
import useScroll from "@hooks/use-scroll";

// Vendor
import { ArrowUp } from "lucide-react";

export default function GoUp() {
  //#region Hooks
  const { scrollPageTo, currentPage } = useScroll();
  //#endregion

  if (currentPage === 0) return;

  return (
    <button
      id="scroll-up"
      onClick={() => scrollPageTo(0)}
      className="scroll-up-container
      z-99
      fixed flex 
      text-neutral-50
      justify-center items-center 
      rounded-full bg-secondary-300
      w-10 h-10
      right-10 bottom-12
      "
    >
      <ArrowUp size="14" />
    </button>
  );
}
