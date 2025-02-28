import { ReactNode } from "react";
import classes from "./Button.module.scss";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

const Button = ({ text, onClick, className = "", children }: Props) => {
  return (
    <button
      onClick={() => onClick?.()}
      className={`${classes.root} ${className}`}
      aria-label={text}
    >
      <span className="flex-1">{text}</span>
      {children}
    </button>
  );
};

export default Button;
