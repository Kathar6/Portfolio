// Types
type Props = {
  children?: string;
};

export default function CardTitle({ children }: Props) {
  return <div className="text-base text-primary-500">{children}</div>;
}
