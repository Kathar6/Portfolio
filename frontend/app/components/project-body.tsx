import useProjectContext from "@hooks/use-project-context";

export default function ProjectBody() {
  //#region hooks
  const { name } = useProjectContext();
  //#endregion

  return (
    <div className="flex p-5 w-full h-full text-center justify-center items-center text-4xl">
      {name}
    </div>
  );
}
