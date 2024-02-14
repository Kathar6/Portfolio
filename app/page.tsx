import { css } from "@styled-system/css";

export default function Home() {
  return (
    <div className={css({ px: "40", pt: "40" })}>
      <div
        className={css({
          color: "primary.500",
          fontSize: "9xl",
          maxW: "2xl",
          textWrap: "wrap",
        })}
      >
        Frontend Developer
      </div>
      <span className={css({ color: "neutral.50", fontSize: "4xl" })}>
        Mateo Alonso Pabón García
      </span>
    </div>
  );
}
