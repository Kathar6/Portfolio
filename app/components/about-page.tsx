// Styles
import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";

// Components
import { Box } from "@styled-system/jsx";
import PageContainer from "@components/page-container";
import Title from "@components/title";
import SkillsList from "@components/skills-list";

// Constants
import { SKILLS } from "@constants/skills";

export default function AboutPage() {
  return (
    <PageContainer>
      <Title>About</Title>
      <Box className={css({ ps: "14", pe: "96", fontSize: "xl", mb: "10" })}>
        <p className={css({ mb: "6" })}>
          {"I'm"} someone committed to excellence and teamwork. I enjoy tackling
          complex challenges autonomously, but I also deeply value collaboration
          and the exchange of ideas that occurs in a collaborative
          environment.  
        </p>
        <p>
          I possess experience in crafting and structuring projects from
          inception, ensuring maintainability through the monorepository
          methodology, utilizing libraries such as{" "}
          <span className={css({ color: "primary.500" })}>Lerna</span>.
        </p>
      </Box>
      <Title>Skills</Title>
      <Box
        className={flex({
          direction: "column",
          align: "center",
        })}
      >
        <Box className={css({ w: "3xl" })}>
          <SkillsList data={SKILLS} />
        </Box>
      </Box>
    </PageContainer>
  );
}
