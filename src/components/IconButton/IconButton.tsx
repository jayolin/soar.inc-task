import { ReactNode } from "react";
import classes from "./IconButton.module.scss";

interface Props {
  children: ReactNode;
  elevated?: boolean;
  theme?: "white" | "gray" | "black";
  className?: string;
  size?: "sm" | "md";
  onClick?: () => void;
}

const IconButton = ({
  children,
  theme = "white",
  elevated = true,
  className = "",
  size = "md",
  onClick,
}: Props) => {
  return (
    <button
      className={`${classes.root} ${classes[theme]} ${
        elevated ? classes.elevated : ""
      } ${classes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
