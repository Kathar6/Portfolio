// Components
import PageContainer from "@components/page-container";
import Title from "@components/title";
import SkillsList from "@components/skills-list";
import Scroller from "@components/scroller";
import Footer from "@components/footer";

// Constants
import { SKILLS } from "@constants/skills";

export default function AboutPage() {
  return (
    <PageContainer id="about" className="relative">
      <Title>About</Title>
      <div className="ps-2 pe-0 sm:ps-14 sm:pe-24 md:pe-48 lg:pe-72 sm:text-lg lg:text-xl mb-10">
        <p className="mb-6">
          {"I'm"} someone committed to excellence and teamwork. I enjoy tackling
          complex challenges autonomously, but I also deeply value collaboration
          and the exchange of ideas that occurs in a collaborative
          environment.  
        </p>
        <p>
          I possess experience in crafting and structuring projects from
          inception, ensuring maintainability through the monorepository
          methodology, utilizing libraries such as{" "}
          <span className="text-primary-500">Lerna</span>.
        </p>
      </div>
      <div>
        <Title>Skills</Title>
        <div className="flex flex-col pe-4 lg:pe-0 max-h-42 mt-28">
          <div className="max-h-62 sm:w-full">
            <Scroller>
              <SkillsList data={SKILLS} />
            </Scroller>
          </div>
        </div>
      </div>
      <Footer />
    </PageContainer>
  );
}
