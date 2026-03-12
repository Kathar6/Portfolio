// Components
import ModalCloseButton from "./modal-close-button";

type Props = {
  title: string;
  closeButton?: boolean;
};

export default function ModalHeader({ title, closeButton = false }: Props) {
  return (
    <div className="w-full h-16 p-5 relative rounded-t-md">
      {title}
      {closeButton && <ModalCloseButton />}
    </div>
  );
}
