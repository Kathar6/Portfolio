// Styles
import { cva } from "@styled-system/css";

const card = cva({
  base: {
    w: "35lvw",
    h: "15lvh",
    bg: "secondary.400",
    rounded: "2px",
    p: "2",
  },
});

export default card;
