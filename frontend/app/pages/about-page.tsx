// Components
import PageContainer from "@components/page-container";
import Title from "@components/title";
import SkillsList from "@components/skills-list";
import Footer from "@components/footer";

// Constants
import { SKILLS } from "@constants/skills";

// Vendor
import { useTranslations } from "next-intl";

export default function AboutPage() {
  //#region hooks
  const t = useTranslations('about')
  //#endregion
  return (
    <PageContainer bg id="about" className="relative">
      <Title>{t('title')}</Title>
      <div className="ps-2 pe-0 sm:ps-14 sm:pe-24 md:pe-48 lg:pe-48 sm:text-lg lg:text-xl mb-10">
        <p>
          {t('description_1')}
        </p>
        <p>
          {t('description_2')} <span className="text-primary-500">SOLID</span> {t('description_3')}
        </p>
        <p>
          {t('description_4')}
        </p>
      </div>

      <div>
        <Title>{t('skills_title')}</Title>
        <div className="flex flex-col justify-center pe-4 lg:pe-0 mt-5">
          <div className="sm:w-full flex justify-center">
            <SkillsList data={SKILLS} />
          </div>
        </div>
      </div>
      <Footer />
    </PageContainer>
  );
}
