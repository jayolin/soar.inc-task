import { ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
  className?: string;
}

const SectionTitle = ({ children, title, className = "" }: Props) => {
  return (
    <div
      className={`flex items-center justify-between text-[#343C6A] text-left mb-4 ${className}`}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </div>
  );
};

export default SectionTitle;
