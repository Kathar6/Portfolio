"use client"
// Components
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu"
// Vendor
import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";

// Types
type Props = {};

export default function navbar({ }: Props) {
  //#region hooks
  const router = useRouter()
  //#endregion
  return (
    <div className="navbar flex flex-cols justify-end items-center gap-14 fixed top-0 left-0 text-sm w-full h-[3.75rem] font-bold uppercase text-neutral-50 px-8">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Languages />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push(`/en`)}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push(`/es`)}>Español</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
