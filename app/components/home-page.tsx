// Styles
import { css } from "@styled-system/css";

// Components
import PageContainer from "@components/page-container";

export default function HomePage() {
  return (
    <PageContainer>
      <div className={css({ p: "20" })}>
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
    </PageContainer>
  );
}
