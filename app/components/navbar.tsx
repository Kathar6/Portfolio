// Vendor
import { Languages } from "lucide-react";

// Types
type Props = {};

export default function navbar({}: Props) {
  return (
    <div className="flex flex-cols justify-end items-center gap-14 fixed top-0 left-0 text-sm w-full h-[3.75rem] font-bold uppercase text-neutral-50 px-8">
      <div>
        <Languages />
      </div>
    </div>
  );
}
