import { ReactNode } from "react";
import classes from "./Avatar.module.scss";

interface Props {
  src?: string;
  size?: "md" | "lg" | "xl" | "xxl" | "custom";
  className?: string;
  children?: ReactNode;
}

const Avatar = ({ src, size = "md", className = "", children }: Props) => {
  return (
    <div className={`${classes.root} ${className}`}>
      <div
        style={{backgroundImage: src ? `url(${src})` : undefined}}
        className={`${classes.container} ${classes[size]}`}
      ></div>
      {children}
    </div>
  );
};

export default Avatar;

