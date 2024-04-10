// Components
import PageContainer from "@components/page-container";
import Title from "@components/title";
import Footer from "@components/footer";
import ProjectList from "@components/project-list";

export default function HomePage() {
  return (
    <PageContainer id="projects" className="relative">
      <Title>Projects</Title>
      <ProjectList data={[1, 1, 1, 1, 1, 1, 1]} />
      <Footer />
    </PageContainer>
  );
}
