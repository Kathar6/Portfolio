// Next
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

// Components
import Title from "@components/title";
import PageContainer from "@components/page-container";
import ExperienceTimeline from "@components/experience-timeline";
import Footer from "@components/footer";
import MobileExperienceModal from "@components/mobile-experience-modal";

// Constants
import { educationData, experienceData } from "@constants/experience";

// Vendor
import { useTranslations } from "next-intl";

// Types
type InferProps = InferGetServerSidePropsType<typeof getServerSideProps>
type Props = Omit<InferProps, 'deviceType'> & { deviceType?: InferProps['deviceType'] }

export default function AboutPage({
  deviceType,
}: Props) {
  //#region hooks
  const t = useTranslations('experience')
  //#endregion
  return (
    <PageContainer bg id="experience" className="relative">
      <div className="flex items-start w-full gap-4">
        <div className="flex flex-col justify-center items-center w-full">
          <Title className="text-2xl">{t('title')}</Title>
          <ExperienceTimeline data={experienceData} alignment="start" />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <Title className="text-2xl">{t('education_title')}</Title>
          <ExperienceTimeline data={educationData} alignment="end" />
        </div>
      </div>
      <Footer />
      {deviceType === "mobile" && <MobileExperienceModal />}
    </PageContainer>
  );
}

export const getServerSideProps = (async (context) => {
  const userAgent = context.req.headers["user-agent"];
  const isMobile = Boolean(
    userAgent?.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ),
  );

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
    },
  };
}) satisfies GetServerSideProps<{ deviceType: "mobile" | "desktop" }>;
