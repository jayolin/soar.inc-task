import { ReactNode } from "react";
import classes from "./Avatar.module.scss";

interface Props {
  src?: string;
  size?: "md" | "lg" | "xl" | "xxl" | "custom";
  className?: string;
  children?: ReactNode;
  innerChild?: ReactNode;
  color?: string;
}

const Avatar = ({
  src,
  size = "md",
  className = "",
  children,
  innerChild,
  color,
}: Props) => {
  return (
    <div aria-label="Avatar" className={`${classes.root} ${className}`}>
      <div
        style={{
          backgroundImage: src ? `url(${src})` : undefined,
          backgroundColor: color,
        }}
        className={`${classes.container} ${classes[size]}`}
      >{innerChild}</div>
      {children}
    </div>
  );
};

export default Avatar;
