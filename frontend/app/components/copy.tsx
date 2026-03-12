"use client"
// Vendor
import { Copy as CopyIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { toast } from "sonner"

// Types
type Props = {
  target: string
}

export default function Copy({ target }: Props) {
  //#region hooks
  const t = useTranslations("copy_message")
  //#endregion
  //#region handlers
  const copyText = () => {
    if (!target) return
    const targetElement = document.querySelector(`[data-copy='${target}']`)
    if (!targetElement || !targetElement.textContent) return

    navigator.clipboard.writeText(targetElement.textContent)
    toast.success(t("text"), {
      position: "top-center",
      closeButton: true
    })
  }
  //#endregion
  return (
    <div className="cursor-pointer" onClick={copyText}>
      <CopyIcon />
    </div>
  )
}
