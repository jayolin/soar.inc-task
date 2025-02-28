import classes from "./Button.module.scss";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ text, onClick, className = "" }: Props) => {
  return (
    <button
      onClick={() => onClick?.()}
      className={`${classes.root} ${className}`}
    >
      <span className="flex-1">{text}</span>
    </button>
  );
};

export default Button;
