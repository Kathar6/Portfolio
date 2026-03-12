import { useContext } from "react";

// Contexts
import ModalContext from "@contexts/modal";

export default function useModalContext() {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error(
      "Modal.* component must be rendered as child of Modal component",
    );

  return context;
}
