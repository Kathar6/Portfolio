import { createContext } from "react";

// Types
export type ModalContextProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

const ModalContext = createContext<ModalContextProps | null>(null);

export default ModalContext;
