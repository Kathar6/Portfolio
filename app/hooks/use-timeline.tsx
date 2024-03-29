import { useState, useEffect } from "react";

// Hooks
import useScroll from "./use-scroll";

// Types

export default function useTimeline(onChange?: (selectedItem: number) => void) {
  //#region hooks
  const { currentPage, scrollPageTo } = useScroll();
  //#endregion

  //#region states
  const [selectedItem, setSelectedItem] = useState<number>(0);
  //#endregion

  //#region handlers
  const onSelectItem = (item: number) => {
    setSelectedItem(item);
    scrollPageTo(item);

    if (!onChange) return;
    onChange(item);
  };
  //#endregion

  //#region effects
  useEffect(() => {
    setSelectedItem(currentPage);
  }, [currentPage]);
  //#endregion
  return { selectedItem, onSelectItem };
}
