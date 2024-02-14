import { useState } from "react";

// Types

export default function useTimeline(onChange?: (selectedItem: number) => void) {
  //#region states
  const [selectedItem, setSelectedItem] = useState<number>(0);
  //#endregion

  //#region handlers
  const changeHandler = (item: number) => {
    setSelectedItem(item);
    if (!onChange) return;
    onChange(item);
  };
  //#endregion

  return { selectedItem, changeHandler };
}
