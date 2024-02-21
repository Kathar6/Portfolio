// Styles
import { cva } from "@styled-system/css";

const cardTimeline = cva({
  base: {
    position: "absolute",
    top: "0",
    w: "1",
    h: "full",
    bg: "secondary.400",
  },
  variants: {
    alignment: {
      start: {
        left: "1",
      },
      end: {
        right: "1",
      },
    },
  },
});

export default cardTimeline;
