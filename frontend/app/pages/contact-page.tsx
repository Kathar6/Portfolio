// Components
import PageContainer from "@components/page-container";
import Title from "@components/title";
import SkillsItem from "@components/skills-item";
import DownloadButton from "@components/download-button";
import Copy from "@components/copy";

// Assets
import github from "@assets/github.svg";

// Vendor
import { Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  // #region hooks
  const t = useTranslations('contact')
  // #endregion
  return (
    <PageContainer bg id="contact">
      <Title>{t('title')}</Title>
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
        <div className="flex flex-row items-center gap-3">
          <span data-copy="email" className="text-lg md:text-2xl">matepabon@gmail.com</span>
          <Copy target="email" />
        </div>
      </div>

      <div className="flex justify-center">
        <DownloadButton>{t('resume_button')}</DownloadButton>
      </div>
    </PageContainer>
  );
}
