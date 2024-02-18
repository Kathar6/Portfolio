// Styles
import { hstack } from "@styled-system/patterns";

// Vendor
import { Globe } from "lucide-react";

// Types
type Props = {};

export default function navbar({}: Props) {
  return (
    <div
      className={hstack({
        position: "fixed",
        top: "0",
        left: "0",
        color: "neutral.50",
        w: "full",
        h: "[3.75rem]",
        gap: "14",
        justifyContent: "center",
        fontSize: "sm",
        fontWeight: "bold",
        textTransform: "uppercase",
      })}
    >
      <div>home</div>
      <div>about</div>
      <div>experience</div>
      <div>projects</div>
      <div>contact</div>
      <div>
        <Globe />
      </div>
    </div>
  );
}
