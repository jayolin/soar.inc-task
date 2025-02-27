import { JSX, useMemo } from "react";

export interface IconProps {
  children?: JSX.Element | Array<JSX.Element> | null;
  size?: "sm" | "md" | "lg" | "xl" | "custom";
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  className?: string;
  viewBox?: string;
}

export type Icon = (props?: IconProps) => JSX.Element;

const BaseIcon = (props: IconProps) => {
  const {
    children,
    size = "md",
    fill = "currentColor",
    stroke,
    strokeWidth,
    className = "",
    viewBox = "0 0 20 20",
  } = props;
  const sizeClass = useMemo(() => {
    switch (size) {
      case "sm":
        return "yvlw-w-4 yvlw-h-4";
      case "lg":
        return "yvlw-w-7 yvlw-h-7";
      case "xl":
        return "yvlw-w-10 yvlw-h-10";
      case "custom":
        return "";
      default:
        return "yvlw-w-5 yvlw-h-5";
    }
  }, [size]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      className={`${sizeClass} ${className}`}
    >
      {children}
    </svg>
  );
};

export const HamburgerIcon = () => (<BaseIcon />);
export const SettingsIcon = () => (<BaseIcon />);
export const SearchIcon = () => (<BaseIcon />);
export const BellIcon = () => (<BaseIcon />);

export const DashboardIcon = () => (<BaseIcon />);
export const TransactionsIcon = () => (<BaseIcon />);
export const AccountsIcon = () => (<BaseIcon />);
export const InvestmentsIcon = () => (<BaseIcon />);
export const CreditCardsIcon = () => (<BaseIcon />);
export const LoansIcon = () => (<BaseIcon />);
export const ServicesIcon = () => (<BaseIcon />);
export const MyPrivilegesIcon = () => (<BaseIcon />);