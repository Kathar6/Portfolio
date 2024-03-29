// Styles
import "@styles/timeline-item.css";

// Types
type Props = {
  name: string;
  value: number;
  selected: boolean;
  onSelect: (index: number) => void;
};

export default function TimelineItem({
  name,
  value,
  selected,
  onSelect,
}: Props) {
  return (
    <div
      className={`timeline-item flex flex-row justify-end items-center text-sm${selected ? " selected text-primary-500" : " text-neutral-50"}`}
      onClick={() => onSelect(value)}
    >
      <span className=" me-4 cursor-pointer animate-fade-right">{name}</span>
      <div
        className={`w-[13px] h-[13px] cursor-pointer rounded-full z-50${selected ? " bg-primary-500" : " bg-secondary-300"}`}
        onClick={() => onSelect(value)}
      />
    </div>
  );
}
