// Styles
import { css } from "@styled-system/css";
// Types
type Props = {
  children: string;
};

export default function Title({ children }: Props) {
  return (
    <span
      className={css({
        display: "block",
        fontSize: "5xl",
        color: "neutral.50",
        textTransform: "uppercase",
        fontWeight: "lighter",
        mb: "10",
      })}
    >
      {children}
    </span>
  );
}
