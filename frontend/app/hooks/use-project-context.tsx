import { useContext } from "react";

// Contexts
import ProjectContext from "@contexts/project";

export default function useProjectContext() {
  const context = useContext(ProjectContext);

  if (!context)
    throw new Error(
      "Project.* component must be rendered as child of Project component",
    );

  return context;
}
