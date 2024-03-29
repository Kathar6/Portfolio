// Components
import PageContainer from "@components/page-container";
import Title from "@components/title";
import SkillsItem from "@components/skills-item";
import DownloadButton from "@components/download-button";

// Assets
import github from "@assets/github.svg";

// Vendor
import { Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <PageContainer id="contact">
      <Title>Contact</Title>
      <div className="flex flex-row mt-28 mb-20 justify-center gap-5 sm:gap-20">
        <SkillsItem
          href="https://github.com/Kathar6"
          name="Github"
          image={github}
          width={200}
          height={200}
        />
        <SkillsItem
          href="https://www.linkedin.com/in/mateopabon"
          name="LinkedIn"
          width={200}
          height={200}
        >
          <Linkedin width={200} height={200} />
        </SkillsItem>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 my-20">
        <span className="text-xl md:text-3xl">Email:</span>
        <span className="text-lg md:text-2xl">matepabon@gmail.com</span>
      </div>

      <div className="flex justify-center">
        <DownloadButton>Download Resume</DownloadButton>
      </div>
    </PageContainer>
  );
}
