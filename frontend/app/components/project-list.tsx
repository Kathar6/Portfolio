// Components
import Project, { ProjectBody, ProjectFooter } from "./project";

// Types
type Props = {
  data: Array<{
    name: string;
    description: string;
    url: string;
    repo_url: string;
    is_private: boolean
  }>;
};

export default function ProjectList({ data }: Props) {
  return (
    <div className="flex flex-row gap-8 flex-wrap">
      {data.map((item, index) => {
        return (
          <Project key={index} data={item}>
            <ProjectBody />
            <ProjectFooter />
          </Project>
        );
      })}
    </div>
  );
}
