// Vendor
import useModalContext from "@hooks/use-modal-context";
import { X } from "lucide-react";

export default function ModalCloseButton() {
  //#region hooks
  const { toggleModal } = useModalContext();
  //#endregion

  return <X className="absolute top-5 right-5" onClick={toggleModal} />;
}
