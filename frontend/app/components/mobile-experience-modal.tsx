"use client";

import { useState } from "react";

// Components
import Modal, { ModalHeader, ModalBody, ModalFooter } from "@components/modal";

export default function MobileExperienceModal() {
  //#region states
  const [isOpen, setIsOpen] = useState(false);
  //#endregion

  //#region handlers
  const toggleModal = () => setIsOpen(!isOpen);
  //#endregion

  return (
    <Modal
      trigger={<button>Boton</button>}
      isOpen={isOpen}
      toggleModal={toggleModal}
      header={<ModalHeader title="Prueba" closeButton />}
      body={<ModalBody>hola</ModalBody>}
    />
  );
}
