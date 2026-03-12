import { createContext } from "react";

// Types
export type ProjectContextProps = {
  url: string;
  repo_url: string;
  name: string;
  description: string;
  is_private: boolean
};

const ProjectContext = createContext<ProjectContextProps | null>(null);

export default ProjectContext;
