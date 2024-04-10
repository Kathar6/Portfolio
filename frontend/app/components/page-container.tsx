// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export default function PageContainer({ id, className, children }: Props) {
  return (
    <div
      id={id}
      className={
        "page-container min-h-lvh px-5 pt-20 pb-5 sm:pe-10 sm:pb-10 lg:ps-20 lg:pe-32 lg:pb-20 snap-start font-lighter text-neutral-50 " +
        (className ?? "")
      }
    >
      {children}
    </div>
  );
}
