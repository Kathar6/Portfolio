// Components
import PageContainer from "@components/page-container";
import Title from "@components/title";
import Footer from "@components/footer";
import ProjectList from "@components/project-list";

// Vendor
import { getTranslations } from "next-intl/server";
import httpClient from "@/lib/http_client";

export default async function ProjectsPage() {
  // #region hooks
  const t = await getTranslations('projects')
  // #endregion
  let projects = []

  try {
    const response = await httpClient('/projects');

    projects = response.data
  } catch (error) {
    console.error(error)
  }

  return (
    <PageContainer bg id="projects" className="relative">
      <Title>{t('title')}</Title>
      <ProjectList data={projects} />
      <Footer />
    </PageContainer>
  );
}
