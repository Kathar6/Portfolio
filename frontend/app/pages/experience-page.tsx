// Components
import Title from "@components/title";
import PageContainer from "@components/page-container";
import ExperienceTimeline from "@components/experience-timeline";
import Footer from "@components/footer";

// Constants
import { educationData, experienceData } from "@constants/experience";

export default function AboutPage() {
  return (
    <PageContainer id="experience" className="relative">
      <div className="flex items-start w-full gap-4">
        <div className="flex flex-col justify-center items-center w-full">
          <Title className="text-2xl">Experience</Title>
          <ExperienceTimeline data={experienceData} alignment="start" />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <Title className="text-2xl">Education</Title>
          <ExperienceTimeline data={educationData} alignment="end" />
        </div>
      </div>
      <Footer />
    </PageContainer>
  );
}
