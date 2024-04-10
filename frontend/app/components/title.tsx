// Types
type Props = {
  children: string;
  className?: string;
};

export default function Title({ className, children }: Props) {
  return (
    <span
      className={
        "block text-2xl sm:text-4xl lg:text-5xl text-neutral-50 uppercase font-lighter mb-10 " +
        className
      }
    >
      {children}
    </span>
  );
}
