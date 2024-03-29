// Types
type Props = {
  alignment: "start" | "end";
};

export default function CardTimeLine({ alignment }: Props) {
  return (
    <div
      className={`hidden sm:block absolute top-0 w-1.5 min-h-full rounded-full bg-secondary-400${alignment === "start" ? " left-5" : " right-5"}`}
    />
  );
}
