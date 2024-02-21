// Styles
import { cva } from "@styled-system/css";

const gradient = `0deg, var(--colors-primary\\.500) 50%, var(--colors-secondary\\.400) 50%`;
const skillItem = cva({
  base: {
    w: "28",
    h: "28",
    position: "relative",
    overflow: "hidden",
    rounded: "full",
    linearGradient: gradient,
    bgSize: "100% 200%",
    transition: "background-position .33s, transform .33s",
    _hover: {
      bgPosition: "0 100%",
      transform: "scale(1.1)",
    },
    "&:hover div": {
      h: "0",
    },
  },
});

const skillItemChild = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    fontSize: "lg",
    w: "full",
    h: "full",
    transition: "height .33s",
  },
});

export { skillItemChild, skillItem };
