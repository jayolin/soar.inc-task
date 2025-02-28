import React, { ReactNode } from "react";
import classes from "./Input.module.scss";

interface InputProps {
  variant?: "white" | "gray";
  label?: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rounded?: boolean;
  className?: string;
  left?: ReactNode;
  pattern?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  variant = "white",
  rounded = false,
  className = "",
  left,
  pattern,
  required
}) => {
  return (
    <div className={`${classes.root} ${className}`}>
      {label && <label className="block">{label}</label>}
      <div className={`${classes.container} ${classes[variant]} ${rounded ? classes.rounded : ""}`}>
        {left}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          pattern={pattern}
          required={required}
        />
      </div>
    </div>
  );
};

export default Input;
