"use client";

// Styles
import "@styles/modal.css";

// Vendor
import * as Dialog from "@radix-ui/react-dialog";
import ModalContext from "@contexts/modal";

// Types
import { Fragment, type ReactNode } from "react";
type Props = {
  isOpen: boolean;
  toggleModal: () => void;
  trigger: ReactNode;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
};

function Modal({ isOpen, toggleModal, header, body, trigger, footer }: Props) {
  return (
    <Fragment>
      <Dialog.Root>
        <Dialog.Trigger>{trigger}</Dialog.Trigger>
      </Dialog.Root>
      <ModalContext.Provider value={{ isOpen, toggleModal }}>
        <div className="modal flex flex-col rounded-md shadow-xl">
          {header}
          {body}
          {footer}
        </div>
      </ModalContext.Provider>
    </Fragment>
  );
}

export { default as ModalHeader } from "./modal-header";
export { default as ModalBody } from "./modal-body";
export { default as ModalFooter } from "./modal-footer";

export default Modal;
