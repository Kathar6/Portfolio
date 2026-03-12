"use client";

// Styles
import "@styles/project-item.css";

// Contexts
import ProjectContext from "@contexts/project";

// Types
import type { ProjectContextProps } from "@contexts/project";
import type { ReactNode } from "react";
type Props = {
  data: ProjectContextProps;
  children: ReactNode;
};

function Project({ data, children }: Props) {
  return (
    <ProjectContext.Provider value={data}>
      <div
        className={`project-item flex min-w-80 max-w-[25rem] h-[12.5rem] rounded bg-secondary-300`}
      >
        {children}
      </div>
    </ProjectContext.Provider>
  );
}

export { default as ProjectBody } from "./project-body";
export { default as ProjectFooter } from "./project-footer";
export default Project;
