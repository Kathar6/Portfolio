// Components
import ProjectItem from "./project-item";

// Types
type Props = {
  data: Array<any>;
};

export default function ProjectList({ data }: Props) {
  return (
    <div className="flex flex-row gap-8 flex-wrap">
      {data.map((item, index) => {
        return <ProjectItem key={index} />;
      })}
    </div>
  );
}
