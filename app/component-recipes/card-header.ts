// Styles
import { cva } from "@styled-system/css";

const cardHeader = cva({
  base: {
    display: "grid",
    gridTemplateColumns: "3.125rem 1fr",
    gap: "2",
    w: "full",
    h: "3.125rem",
  },
});

export default cardHeader;
