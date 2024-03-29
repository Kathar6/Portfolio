// Styles
import "@styles/download-button.css";
// Assets
import { Download } from "lucide-react";

// Types
import type { HTMLAttributes } from "react";
type Props = HTMLAttributes<HTMLButtonElement>;

export default function DownloadButton({
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={
        "download-button flex justify-between items-center p-5 w-96 h-[6.25rem] text-3xl font-lighter text-primary-500 bg-gradient-to-b from-secondary-400 from-50% to-primary-500 to-50% bg-[length:100%_200%] hover:text-neutral-50"
      }
      {...props}
    >
      {children}
      <Download className="inline ms-4" size="40" />
    </button>
  );
}
